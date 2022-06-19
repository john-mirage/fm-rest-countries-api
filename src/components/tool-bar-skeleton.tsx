import SearchBarSkeleton from "@components/search-bar-skeleton";
import FilterSkeleton from "@components/filter-skeleton";

function ToolbarSkeleton() {
  return (
    <div className="mb-32">
      <SearchBarSkeleton />
      <FilterSkeleton />
    </div>
  );
}

export default ToolbarSkeleton;