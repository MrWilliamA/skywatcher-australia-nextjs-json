import Head from "next/head";
import Styles from "../styles/home.module.css";
import CatMasonry from "@/components/catMasonry/CatMasonry";
import FeaturedPages from "@/components/FeaturedPages/FeaturedPages";
import Layout from "@/components/templates/Layout";
import News from "../pages/news/index";

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
        <main className={Styles.main}>
          <CatMasonry />
          <FeaturedPages />

          <h2 className={Styles.subHeading}>Latest News From Sky-Watcher</h2>
          <div className={Styles.news}>
            <News />
          </div>
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
