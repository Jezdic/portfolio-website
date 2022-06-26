import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nemanja Jezdic</title>
        <meta name='description' content='Front page of my portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-red-600 mt-6'>Yeet</div>
    </div>
  );
}
