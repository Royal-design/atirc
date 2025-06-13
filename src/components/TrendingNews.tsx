import { NewsCard } from "./NewsCard";

export const TrendingNews = () => {
  return (
    <div className="py-4 px-4 md:py-12 md:px-24">
      <h1 className="text-accent-black text-2xl md:text-3xl font-bold text-center mb-4">
        Get updated news on Trending Technology
      </h1>
      <p className="text-accent-grey text-lg md:text-2xl text-center mb-8">
        Get Updated news on Trending Technology
      </p>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3).keys()].map((_, i) => (
          <NewsCard key={i} />
        ))}
      </div>
    </div>
  );
};
