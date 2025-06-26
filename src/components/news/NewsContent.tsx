import { NewsCard } from "../NewsCard";
import { AllTypes, FilterDates, FilterTopics } from "../research/Filter";
import { useAppSelector } from "@/redux/store";
import { NewsPagination } from "./NewsPagination";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const NewsContent = () => {
  const { filteredData, loading, error, currentPage, perPage } = useAppSelector(
    (state) => state.blogs
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  return (
    <div className="py-4 px-4 md:py-12 md:px-24">
      <h1 className="text-accent-black text-2xl md:text-3xl uppercase font-bold text-center mb-4">
        News
      </h1>
      <p className="text-accent-grey text-lg md:text-2xl text-center mb-8">
        Get Updated news on Trending Technology
      </p>

      <div className="flex justify-between max-md:gap-2 mb-8">
        <FilterTopics />
        <AllTypes />
        <FilterDates />
      </div>

      {loading && <LoadingSkeleton value={6} />}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedData.map((post) => (
          <NewsCard key={post.id} {...post} />
        ))}
      </div>
      <NewsPagination />
    </div>
  );
};
