import useSWR from "swr";
import Head from "next/head";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function HomePage() {
  const { data, error } = useSWR("https://restcountries.com/v3.1/all", fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <ul>
        {data.map((country) => (
          <li key={country.cca3}>{ country.name.common }</li>
        ))}
    </ul>
    </>
  );
}

export default HomePage;