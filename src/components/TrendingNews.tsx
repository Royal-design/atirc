import { useAppSelector } from "@/redux/store";
import { LoadingSkeleton } from "./news/LoadingSkeleton";
import { NewsCard } from "./NewsCard";

export const TrendingNews = () => {
  const { loading, allData, error } = useAppSelector((state) => state.blogs);
  const topThree = [...allData].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <div className="py-4 px-4 md:py-12 md:px-24">
      <h1 className="text-accent-black text-2xl md:text-3xl font-bold text-center mb-4">
        Get updated news on Trending Technology
      </h1>
      <p className="text-accent-grey text-lg md:text-2xl text-center mb-8">
        Get Updated news on Trending Technology
      </p>
      {loading && <LoadingSkeleton value={3} />}
      {!loading && error && (
        <p className="text-center text-red-500 my-4">
          Failed to load trending news.
        </p>
      )}
      {!loading && !error && (
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {topThree &&
            topThree.map((data) => <NewsCard {...data} key={data.id} />)}
        </div>
      )}
    </div>
  );
};
