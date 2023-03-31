import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Styles from "../../styles/categories.module.css";

const otas = () => {
  const allOtas = data.products.filter((product) =>
    product.tags.includes("OTAs")
  );
  const reflectorOtas = allOtas.filter((product) =>
    product.tags.includes("Reflectors")
  );
  const refractorOtas = allOtas.filter((product) =>
    product.tags.includes("Refractors")
  );
  const makOtas = allOtas.filter((product) =>
    product.tags.includes("Maksutov-Cassegrains")
  );

  const esprits = allOtas.filter((product) => product.tags.includes("Esprits"));

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia OTAs</title>
        <meta
          name="description"
          content="Sky-Watcher Australia OTAs - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <main className={Styles.main}>
        <div className={Styles.text}>
          <h2>Optical Tube Assembly</h2>
          <p>
            A telescope optical tube is the body of your telescope. The Optical
            Tube Assembly is often shortened to the phrase “OTA”. While most
            telescope packages offer fully equipped OTAs, there are many
            circumstances where the optical tube might be all you have. Perhaps
            you’ve built your own telescope, bought one in pieces, you’re
            working on restoring a telescope, or you’re just starting from
            ground up on building your own custom telescope assembly.
          </p>
        </div>
        <section className={Styles.productList}>
          {reflectorOtas.length > 0 && (
            <>
              <h2>Reflector OTAs</h2>
              <ProductGrid products={reflectorOtas} />
            </>
          )}

          {refractorOtas.length > 0 && (
            <>
              <h2>Refractor OTAs</h2>
              <ProductGrid products={refractorOtas} />
            </>
          )}

          {makOtas.length > 0 && (
            <>
              <h2>Maksutov Cassegrain OTAs</h2>
              <ProductGrid products={makOtas} />
            </>
          )}

          {esprits.length > 0 && (
            <>
              <h2>Esprit OTAs</h2>
              <ProductGrid products={esprits} />
            </>
          )}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Sky-Watcher OTAs",
    },
  };
}

export default otas;
