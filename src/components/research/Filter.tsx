import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { applyFilters, setFilters } from "@/redux/slices/blogSlice";
import { useAppDispatch } from "@/redux/store";

type Option = {
  value: string;
  label: string;
};

type SelectFilterProps = {
  placeholder: string;
  options: Option[];
  onChange?: (value: string) => void;
  className?: string;
};

const SelectFilter = ({
  placeholder,
  options,
  onChange,
  className
}: SelectFilterProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger
        className={className || "w-[280px] border-accent-grey-3 text-xs"}
      >
        <SelectValue
          placeholder={<span className="text-accent-grey">{placeholder}</span>}
        />
      </SelectTrigger>
      <SelectContent className="bg-white border-accent-grey-3">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="hover:bg-accent-grey-3"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const TYPE_OPTIONS: Option[] = [
  { value: "article", label: "Article" },
  { value: "video", label: "Video" },
  { value: "podcast", label: "Podcast" },
  { value: "tutorial", label: "Tutorial" },
  { value: "case-study", label: "Case Study" },
  { value: "whitepaper", label: "Whitepaper" }
];

// Topic options
const TOPIC_OPTIONS: Option[] = [
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "science", label: "Science" },
  { value: "health", label: "Health" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" }
];

// Date options
const DATE_OPTIONS: Option[] = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "year", label: "This Year" },
  { value: "last-year", label: "Last Year" },
  { value: "older", label: "Older" }
];

export function AllTypes() {
  const dispatch = useAppDispatch();
  return (
    <SelectFilter
      placeholder="All Types"
      options={TYPE_OPTIONS}
      onChange={(value) => {
        dispatch(setFilters({ type: value }));
        dispatch(applyFilters());
      }}
    />
  );
}

export function FilterTopics() {
  const dispatch = useAppDispatch();
  return (
    <SelectFilter
      placeholder="All Topics"
      options={TOPIC_OPTIONS}
      onChange={(value) => {
        dispatch(setFilters({ topic: value }));
        dispatch(applyFilters());
      }}
    />
  );
}

export function FilterDates() {
  const dispatch = useAppDispatch();
  return (
    <SelectFilter
      placeholder="All Dates"
      options={DATE_OPTIONS}
      onChange={(value) => {
        const now = new Date();
        let fromDate: string | undefined;
        switch (value) {
          case "today":
            fromDate = new Date(now.setHours(0, 0, 0, 0)).toISOString();
            break;
          case "week":
            fromDate = new Date(now.setDate(now.getDate() - 7)).toISOString();
            break;
          case "month":
            fromDate = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
            break;
          case "year":
            fromDate = new Date(
              now.setFullYear(now.getFullYear() - 1)
            ).toISOString();
            break;
          case "last-year":
            fromDate = new Date(
              now.setFullYear(now.getFullYear() - 2)
            ).toISOString();
            break;
          case "older":
            fromDate = "1900-01-01";
            break;
        }
        dispatch(setFilters({ fromDate }));
        dispatch(applyFilters());
      }}
    />
  );
}
