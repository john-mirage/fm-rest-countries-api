import SearchBarSkeleton from "@components/skeleton/search-bar-skeleton";
import FilterSkeleton from "@components/skeleton/filter-skeleton";

function ToolbarSkeleton() {
  return (
    <div className="mt-24 mb-32 md:mt-48 md:mb-48 lg:flex lg:flex-row lg:justify-between lg:items-center">
      <SearchBarSkeleton />
      <FilterSkeleton />
    </div>
  );
}

export default ToolbarSkeleton;