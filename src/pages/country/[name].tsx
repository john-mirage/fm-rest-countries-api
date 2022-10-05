import Head from "next/head";
import { BackButton } from "@components/BackButton";
import { Country, CountrySkeleton } from "@components/Country";
import { ErrorNotification } from "@components/ErrorNotification";
import { useRouter } from "next/router";
import useCountry from "@hooks/use-country";
import { useEffect } from "react";

function CountryPage() {
  const router = useRouter();
  const { name } = router.query;
  const { country, isLoading, isError } = useCountry(name as string);

  useEffect(() => {
    if (country) {
      document.title = `REST Countries API | ${country.name}`;
    }
  }, [country]);

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <BackButton />
      {isLoading ? (
        <CountrySkeleton />
      ) : isError ? (
        <ErrorNotification message="The country has not been found." />
      ) : (
        <Country country={country} />
      )}
    </>
  );
}

export default CountryPage;