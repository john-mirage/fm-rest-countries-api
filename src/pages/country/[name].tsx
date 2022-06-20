import Head from "next/head";
import BackButton from "@components/back-button";
import CountrySkeleton from "@components/skeleton/country-skeleton";
import Country from "@components/country";
import ErrorNotification from "@components/error-notification";
import { useRouter } from "next/router";

function CountryPage() {
  const router = useRouter();
  const isLoading = true;
  const isError = false;

  function handleBackButton() {
    router.back();
  }

  return (
    <>
      <Head>
        <title>REST Countries API - France</title>
      </Head>
      <BackButton onClick={handleBackButton} />
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