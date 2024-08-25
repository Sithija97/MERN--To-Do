import { Skeleton } from "../atoms/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[calc(100% - 20%)]" />
      </div>
    </div>
  );
};
