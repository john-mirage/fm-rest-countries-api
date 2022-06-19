import ToolbarSkeleton from "@components/tool-bar-skeleton";
import CardGroupSkeleton from "@components/card-group-skeleton";
import PaginationSkeleton from "@components/pagination-skeleton";
import Divider from "@components/divider";

function CountriesViewSkeleton() {
  return (
    <>
      <ToolbarSkeleton />
      <CardGroupSkeleton />
      <Divider />
      <PaginationSkeleton />
    </>
  );
}

export default CountriesViewSkeleton;