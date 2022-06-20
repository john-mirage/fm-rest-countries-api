import Head from "next/head";
import BackButton from "@components/back-button";
import CountrySkeleton from "@components/skeleton/country-skeleton";
import Country from "@components/country";
import ErrorNotification from "@components/error-notification";

function CountryPage() {

  const isLoading = true;
  const isError = false;

  return (
    <>
      <Head>
        <title>REST Countries API - France</title>
      </Head>
      <BackButton />
      {isLoading ? (
        <CountrySkeleton />
      ) : isError ? (
        <ErrorNotification />
      ) : (
        <Country />
      )}
    </>
  );
}

export default CountryPage;