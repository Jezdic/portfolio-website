import { useState, useEffect } from "react";

import Layout from "../components/Layout";

import { ThemeProvider } from "next-themes";

import SectionContext from "../utils/SectionContext";

import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
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
