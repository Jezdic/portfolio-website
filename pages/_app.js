import { useState } from "react";

import Layout from "../components/Layout";

import { ThemeProvider } from "next-themes";

import SectionContext from "../utils/SectionContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [currentSection, setCurrentSection] = useState("");

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SectionContext.Provider>
  );
}

export default MyApp;
