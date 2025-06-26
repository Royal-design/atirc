import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // optional: to merge Tailwind classes
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setPage } from "@/redux/slices/blogSlice";

export const NewsPagination = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector((state) => state.blogs);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
    }
  };

  const renderPageNumbers = () => {
    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== -1) {
        pages.push(-1);
      }
    }

    return pages.map((page, idx) =>
      page === -1 ? (
        <span key={idx} className="px-2 text-gray-500">
          ...
        </span>
      ) : (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={cn(
            "px-3 py-1 rounded text-sm font-medium",
            page === currentPage ? "bg-accent text-white" : "hover:bg-gray-200"
          )}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="p-2 rounded hover:bg-gray-200 disabled:opacity-30"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {renderPageNumbers()}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="p-2 rounded hover:bg-gray-200 disabled:opacity-30"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
