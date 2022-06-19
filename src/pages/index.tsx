import Head from "next/head";
import CountriesView from "@components/countries-view";
import CountriesViewSkeleton from "@components/countries-view-skeleton";
import ErrorNotification from "@components/error-notification";
import useCountries from "@hooks/use-countries";

function HomePage() {
  const { countries, isLoading, isError } = useCountries();

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      {isLoading ? (
        <CountriesViewSkeleton />
      ) : isError ? (
        <ErrorNotification />
      ) : (
        <CountriesView />
      )}
    </>
  );
}

export default HomePage;