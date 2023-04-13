import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Styles from "../../styles/categories.module.css";
import Image from "next/image";
import Layout from "@/components/templates/Layout";

const maks = () => {
  const allMaks = data.products.filter((product) =>
    product.tags.includes("Maksutov-Cassegrains")
  );

  const kits = allMaks.filter((product) => !product.tags.includes("OTAs"));

  const otas = allMaks.filter((product) => product.tags.includes("OTAs"));

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Maksutov Cassegrains</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Maksutov Cassegrains - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <main className={Styles.main}>
          <section className={Styles.top}>
            <div className={Styles.text}>
              <h2>The Ultimate &apos;Take-Anywhere&apos; Telescopes.</h2>
              <p>
                The Sky-Watcher Maksutov-Cassegrains are the ultimate
                ‘take-anywhere’ telescopes. Their compact size makes them ideal
                if working space is limited. Despite their small dimensions they
                pack a powerful punch. Their High-Resolution, diffraction
                limited optical systems are multi-coated to maximise contrast
                and image sharpness.
              </p>

              <p>
                Whether your requirement is for terrestrial or astronomical use,
                these compact scopes are the perfect companion. Tube material:
                Aluminium.
              </p>

              <h2>High Contrast Telescopes.</h2>
              <p>
                Maksutov-Cassegrains are very similar to Schmidt-Cassegrains,
                but they use convex meniscus lenses instead of corrector plates.
                The main advantage here, compared to other similar models is
                that Maksutov-Cassegrains don’t need periodic collimation as
                many other telescopic models do. In addition, because mirror
                obstruction is smaller, images appear with greater contrasts,
                but will have a narrower field of view due to the
                Maksutov-Cassegrain’s slow focal ratio which tends to make this
                telescope design better for planetary and double star observing.
              </p>
            </div>
            <div className={Styles.image}>
              <Image
                src="/images/pageImages/maksutov_cassegrain_model.jpg"
                alt="Maksutov Cassegrains"
                width="360"
                height="154"
              />
            </div>
          </section>
          <section className={Styles.productList}>
            {kits.length > 0 && (
              <>
                <h2>Maksutov Telescope Kits</h2>
                <ProductGrid products={kits} />
              </>
            )}

            {otas.length > 0 && (
              <>
                <h2>Maksutov OTAs</h2>
                <ProductGrid products={otas} />
              </>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Sky-Watcher Maksutov Cassegrains",
    },
  };
}

export default maks;
