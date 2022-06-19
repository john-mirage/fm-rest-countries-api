import "@styles/global.css";
import Head from "next/head";
import Layout from "@components/layout";
import favicon from "@images/favicon.png";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={favicon.src}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;