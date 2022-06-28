import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import SkillsAndTools from "../components/SkillsAndTools";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nemanja Jezdić</title>
        <meta name='description' content='Front page of my portfolio' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/image/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/image/favicon-16x16.png'
        ></link>
      </Head>
      <Header />
      <About />
      <SkillsAndTools />
      <Projects />
    </div>
  );
}
