import React from "react";
import Head from "next/head";
import Image from "next/image";
import Styles from "../styles/about.module.css";
import Layout from "@/components/templates/Layout";

const about = () => {
  return (
    <>
      <Head>
        <title>Sky-Watcher Australia FAQs</title>
        <meta
          name="description"
          content="About Sky-Watcher Australia - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <section className={Styles.container}>
          <div className={Styles.text}>
            <h2>BROADER HORIZONS</h2>
            <p>
              Sky-Watcher is a First-Class, Market Leading telescope brand
              offering an incredible range of high quality astronomical
              telescopes and accessories, catering for users of all groups and
              experience, from the novice astronomer to the advanced.
              Sky-Watcher astronomical telescopes perfectly integrate modern
              optical technology with precision mechanical engineering,
              resulting in designs of superb functionality, versatility and
              uncompromising levels of performance.
            </p>
            <p>
              <strong>
                Innovation and world-class engineering. That is what you can
                expect from every Sky-Watcher product.
              </strong>
            </p>
            <p>
              Tasco Sales Australia (TSA) is a wholesale distributor of leading
              outdoor and optical products. We distribute to over 1100 retail
              accounts across Australia and New Zealand. We represent many
              well-known, highly respected and dependable brands with whom we
              have long standing relationships. We supply a wide spectrum of
              astronomy products including refractors, reflectors, dobsonians,
              maksutov-cassegrains and telescope mounts. tripods and
              accessories.
            </p>
          </div>
          <div className={Styles.image}>
            <div className={Styles.clear}></div>
            <Image
              src="/images/pageImages/sir-patrick-moore.jpg"
              alt="Sir Patrick Moore"
              width="65"
              height="65"
            />
            <p>
              &quot;I have used a great number of telescopes; some are good,
              some mediocre and some bad. To me the Sky-Watcher range of
              instruments are very good indeed & suited to amateurs of all kinds
              – and they are not priced out of the market! Excellent value. Use
              them and enjoy them. &quot;
            </p>
            <p>
              <strong>Sir Patrick Moore </strong>CBE FRS (1923-2012)
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "About Sky-Watcher Australia",
    },
  };
}

export default about;
