import { client } from "@/api/contentful";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from "@reduxjs/toolkit";
import type { Entry } from "contentful";
import { format, isAfter, isBefore } from "date-fns";

export interface BlogPost {
  id: string;
  title: string;
  body: string;
  image: string;
  date: string;
  views: number;
  rawDate: string;
  type?: string;
  topic?: string;
}

interface Filters {
  fromDate?: string;
  toDate?: string;
  topic?: string;
  type?: string;
}

interface BlogState {
  allData: BlogPost[];
  filteredData: BlogPost[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  perPage: number;
  totalPages: number;
  filters: Filters;
}

const initialState: BlogState = {
  allData: [],
  filteredData: [],
  loading: false,
  error: null,
  currentPage: 1,
  perPage: 6,
  totalPages: 1,
  filters: {}
};

function extractTextFromRichText(richText: any): string {
  if (!richText?.content) return "";
  return richText.content
    .map((node: any) => {
      if (node.nodeType === "paragraph" && Array.isArray(node.content)) {
        return node.content
          .map((child: any) => (child.nodeType === "text" ? child.value : ""))
          .join("");
      }
      return "";
    })
    .join("\n")
    .trim();
}

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await client.getEntries({ content_type: "blogPost" });

  return res.items.map((item: Entry<any>) => {
    const rawDateValue = item.fields.date ?? "";
    const rawDate =
      typeof rawDateValue === "string"
        ? rawDateValue
        : typeof rawDateValue === "number"
        ? new Date(rawDateValue).toISOString()
        : "";
    return {
      id: String(item.sys.id),
      title:
        typeof item.fields.title === "string"
          ? item.fields.title
          : String(item.fields.title ?? ""),
      body: extractTextFromRichText(item.fields.body),
      image:
        item.fields.image &&
        typeof item.fields.image === "object" &&
        "fields" in item.fields.image
          ? `https:${
              (item.fields.image as { fields: { file: { url: string } } })
                .fields.file.url || ""
            }`
          : "",
      date: rawDate ? format(new Date(rawDate), "MMMM d, yyyy") : "",
      rawDate,
      type:
        typeof item.fields.type === "string"
          ? item.fields.type
          : String(item.fields.type ?? "article"),
      topic:
        typeof item.fields.topic === "string"
          ? item.fields.topic
          : String(item.fields.topic ?? "technology"),
      views:
        typeof item.fields.views === "number"
          ? item.fields.views
          : Number(item.fields.views ?? 0)
    };
  });
});

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPerPage(state, action: PayloadAction<number>) {
      state.perPage = action.payload;
    },
    setFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = {
        ...state.filters,
        ...action.payload
      };
      blogSlice.caseReducers.applyFilters(state);
    },
    applyFilters(state) {
      const { fromDate, toDate } = state.filters;

      state.filteredData = state.allData.filter((post) => {
        const date = new Date(post.rawDate);
        if (fromDate && isBefore(date, new Date(fromDate))) return false;
        if (toDate && isAfter(date, new Date(toDate))) return false;
        return true;
      });

      state.totalPages = Math.ceil(state.filteredData.length / state.perPage);
      state.currentPage = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.allData = action.payload;
        state.filteredData = action.payload;
        state.totalPages = Math.ceil(action.payload.length / state.perPage);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch blogs";
      });
  }
});

export const { setPage, setPerPage, setFilters, applyFilters } =
  blogSlice.actions;

export const selectPaginatedBlogs = (state: BlogState): BlogPost[] => {
  const start = (state.currentPage - 1) * state.perPage;
  const end = start + state.perPage;
  return state.filteredData.slice(start, end);
};

export default blogSlice.reducer;
