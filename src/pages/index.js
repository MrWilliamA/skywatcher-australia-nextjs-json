import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import BoxedWidth from "@/components/templates/BoxedWidth";
import CatMasonry from "@/components/catMasonry/CatMasonry";
import FeaturedPages from "@/components/FeaturedPages/FeaturedPages";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sky-Watcher Australia</title>
        <meta
          name="description"
          content="Sky-Watcher Australia - Astronomy telescopes, binoculars and spotting scopes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <CatMasonry />
        <FeaturedPages />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      <BoxedWidth>{page}</BoxedWidth>
      <Footer />
    </>
  );
};
