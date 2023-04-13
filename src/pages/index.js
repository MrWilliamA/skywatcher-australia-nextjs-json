import Head from "next/head";
import styles from "../styles/Home.module.css";
import CatMasonry from "@/components/catMasonry/CatMasonry";
import FeaturedPages from "@/components/FeaturedPages/FeaturedPages";
import Layout from "@/components/templates/Layout";

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
      <Layout layout="boxed">
        <main className={styles.main}>
          <CatMasonry />
          <FeaturedPages />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      type: "home",
      title: "Sky-Watcher Australia",
    },
  };
}
