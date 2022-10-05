import Head from "next/head";
import { ToolBar, ToolbarSkeleton } from "@components/ToolBar";
import { CardGroup, CardGroupSkeleton } from "@components/CardGroup";
import { ErrorNotification } from "@components/ErrorNotification";
import useCountries from "@hooks/use-countries";
import { useMemo, useState } from "react";

function IndexPage() {
  const { countries, isLoading, isError } = useCountries();
  const [region, setRegion] = useState("all");

  const regionCountries = useMemo(() => {
    if (!isLoading && !isError && region !== "all") {
      return countries.filter((country) => country.region === region);
    }
    return false;
  }, [countries, region]);

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      {isLoading ? (
        <>
          <ToolbarSkeleton />
          <CardGroupSkeleton />
        </>
      ) : isError ? (
        <ErrorNotification />
      ) : (
        <>
          <ToolBar countries={countries} setRegion={setRegion}/>
          <CardGroup countries={regionCountries ? regionCountries : countries}/>
        </>
      )}
    </>
  );
}

export default IndexPage;
