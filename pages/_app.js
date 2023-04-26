import Head from "next/head";
import "../styles/globals.css"


function Viadukt({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Viadukt