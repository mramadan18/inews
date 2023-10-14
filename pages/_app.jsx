import { createContext, useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export const CategoriesContext = createContext();

function MyApp({ Component, pageProps, categories }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </CategoriesContext.Provider>
  );
}

export default MyApp;
