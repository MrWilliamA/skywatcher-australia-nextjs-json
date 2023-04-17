import Head from "next/head";
import Layout from "@/components/templates/Layout";
import NewsCard from "../../components/news/NewsCard";
import Styles from "../../styles/news.module.css";
const index = () => {
  return (
    <>
      <Head>
        <title>Sky-Watcher News</title>
        <meta
          name="description"
          content="Sky-Watcher Australia News - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <section className={Styles.container}>
          <NewsCard />
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Sky-Watcher News",
    },
  };
}

export default index;
