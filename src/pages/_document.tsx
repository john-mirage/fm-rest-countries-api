import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="en" dir="ltr" data-theme="light">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/src/assets/images/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"/>
        <meta name="title" content="REST Countries API"/>
        <meta name="description" content="Frontend mentor challenge solution for: REST Countries API"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://john-mirage.github.io/rest-countries-api/"/>
        <meta property="og:title" content="REST Countries API"/>
        <meta property="og:description" content="Frontend mentor challenge solution for: REST Countries API"/>
        <meta property="og:image" content="https://john-mirage.github.io/rest-countries-api/preview.jpg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://john-mirage.github.io/rest-countries-api/"/>
        <meta property="twitter:title" content="REST Countries API"/>
        <meta property="twitter:description" content="Frontend mentor challenge solution for: REST Countries API"/>
        <meta property="twitter:image" content="https://john-mirage.github.io/rest-countries-api/preview.jpg"/>
      </Head>
      <body className="bg-light-background dark:bg-dark-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;