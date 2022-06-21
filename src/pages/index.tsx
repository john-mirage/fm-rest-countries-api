import Head from "next/head";
import ToolbarSkeleton from "@components/skeleton/tool-bar-skeleton";
import CardGroupSkeleton from "@components/skeleton/card-group-skeleton";
import ErrorNotification from "@components/error-notification";
import useCountries from "@hooks/use-countries";
import ToolBar from "@components/tool-bar";
import CardGroup from "@components/card-group";
import { useMemo, useState } from "react";

function IndexPage() {
  const { countries, isLoading, isError } = useCountries();
  const [region, setRegion] = useState("all");

  const regionCountries = useMemo(() => {
    if (region !== "all") {
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
          <ToolBar
            countries={countries}
            setRegion={setRegion}
          />
          <CardGroup
            countries={regionCountries ? regionCountries : countries}
          />
        </>
      )}
    </>
  );
}

export default IndexPage;
