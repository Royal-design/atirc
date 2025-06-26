import { NewsSkeleton } from "./NewsSkeleton";

export const LoadingSkeleton = ({ value }: { value: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-x-6 px-4 md:px-24 py-4 md:my-12">
      {Array.from({ length: value }).map((_, i) => (
        <NewsSkeleton key={i} />
      ))}
    </div>
  );
};
