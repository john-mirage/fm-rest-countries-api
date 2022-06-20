import Head from "next/head";
import ToolbarSkeleton from "@components/skeleton/tool-bar-skeleton";
import CardGroupSkeleton from "@components/skeleton/card-group-skeleton";
import PaginationSkeleton from "@components/skeleton/pagination-skeleton";
import Divider from "@components/divider";
import ErrorNotification from "@components/error-notification";
import useCountries from "@hooks/use-countries";
import ToolBar from "@components/tool-bar";
import CardGroup from "@components/card-group";
import Pagination from "@components/pagination";

function IndexPage() {
  //const { countries, isLoading, isError } = useCountries();

  const isLoading = true;
  const isError = false;

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      {isLoading ? (
        <>
          <ToolbarSkeleton />
          <CardGroupSkeleton />
          <Divider />
          <PaginationSkeleton />
        </>
      ) : isError ? (
        <ErrorNotification />
      ) : (
        <>
          <ToolBar />
          <CardGroup />
          <Divider />
          <Pagination />
        </>
      )}
    </>
  );
}

export default IndexPage;
