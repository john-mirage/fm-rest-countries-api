import SearchBarSkeleton from "@components/skeleton/search-bar-skeleton";
import FilterSkeleton from "@components/skeleton/filter-skeleton";

function ToolbarSkeleton() {
  return (
    <div className="mb-32 lg:flex lg:flex-row lg:justify-between lg:items-center">
      <SearchBarSkeleton />
      <FilterSkeleton />
    </div>
  );
}

export default ToolbarSkeleton;