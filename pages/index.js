import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nemanja Jezdić</title>
        <meta name='description' content='Front page of my portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  );
}
