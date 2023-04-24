import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import LogRocket from "logrocket";

// Init LogRocket only in Production
if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") LogRocket.init('vjissv/viadukt');

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        description=""
        openGraph={{
          type: "website",
          locale: "de_DE",
          url: "https://viadukt.de",
          site_name: "Viadukt",
          title: "Viadukt",
          description: "Viadukt — Demokratische Stadtentwicklung",
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
