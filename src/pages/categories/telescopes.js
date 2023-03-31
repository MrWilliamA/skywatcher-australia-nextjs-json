import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Styles from "../../styles/categories.module.css";

const otas = () => {
  const productList = data.products.filter((product) =>
    product.tags.includes("Telescopes")
  );

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Telescopes</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Telescopes - Astronomy, land and sky telescopes."
        />
      </Head>
      <main className={Styles.main}>
        <div className={Styles.text}>
          <h2>Explore With Sky-Watcher</h2>
          <p>
            <strong>Innovation and world-class engineering.</strong> That is
            what you can expect from every Sky-Watcher product. Take a look at
            our full product catalog below.
          </p>
        </div>
        <div className={Styles.image}></div>
        <section className={Styles.productList}>
          <ProductGrid products={productList} />
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
