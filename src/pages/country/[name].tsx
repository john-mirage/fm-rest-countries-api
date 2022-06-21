import Head from "next/head";
import BackButton from "@components/back-button";
import CountrySkeleton from "@components/skeleton/country-skeleton";
import Country from "@components/country";
import ErrorNotification from "@components/error-notification";
import { useRouter } from "next/router";
import useCountry from "@hooks/use-country";

function CountryPage() {
  const router = useRouter();
  const { name } = router.query;
  const { country, isLoading, isError } = useCountry(name as string);

  function handleBackButton() {
    router.back();
  }

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <BackButton onClick={handleBackButton} />
      {isLoading ? (
        <CountrySkeleton />
      ) : isError ? (
        <ErrorNotification />
      ) : (
        <Country country={country} />
      )}
    </>
  );
}

export default CountryPage;