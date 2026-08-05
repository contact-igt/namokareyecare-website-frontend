import { useEffect, useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "@/style/globals.css";
import Layout from "@/common/Layout";
import Preloader from "@/common/Preloader";

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  // Show page content slightly after preloader begins splitting (1.8s)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <Preloader />
      <Layout>
        <div className={ready ? "page-enter" : ""} style={{ visibility: ready ? "visible" : "hidden" }}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
