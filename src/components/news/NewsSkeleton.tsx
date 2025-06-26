import { Skeleton } from "@/components/ui/skeleton";

export function NewsSkeleton() {
  return (
    <div className="flex flex-col  space-y-4 h-60">
      <Skeleton className="h-48 w-full  bg-accent-grey-2" />
      <div className="space-y-3">
        <Skeleton className="h-3 w-full bg-accent-grey-2" />
        <Skeleton className="h-4 w-4/5 bg-accent-grey-2" />
        <Skeleton className="h-4 w-4/5 bg-accent-grey-2" />
      </div>
    </div>
  );
}
