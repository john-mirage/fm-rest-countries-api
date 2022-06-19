import Head from "next/head";
import Bar from "@components/bar";

function HomePage() {
  return (
    <>
      <Head>
        <title>REST Countries API</title>
      </Head>
      <Bar />
    </>
  );
}

export default HomePage;