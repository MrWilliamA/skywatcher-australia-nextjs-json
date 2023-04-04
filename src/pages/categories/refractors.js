import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Image from "next/image";
import Styles from "../../styles/categories.module.css";

const refractors = () => {
  const allRefractors = data.products.filter((product) =>
    product.tags.includes("Refractors")
  );

  const kits = allRefractors.filter(
    (product) => !product.tags.includes("OTAs")
  );

  const otas = allRefractors.filter((product) => product.tags.includes("OTAs"));

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Refactors</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Refactors - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <main className={Styles.main}>
        <section className={Styles.top}>
          <div className={Styles.text}>
            <h2>Great Performance</h2>
            <p>
              A refractor telescope uses a lens to gather and focus light. The
              first telescopes built were refractors.
            </p>
            <h2>Advantages</h2>
            <p>
              Refractor telescopes are rugged. After the initial alignment,
              their optical system is more resistant to misalignment than the
              reflector telescopes. The glass surface inside the tube is sealed
              from the atmosphere so it rarely needs cleaning. Since the tube is
              closed off from the outside, air currents and effects due to
              changing temperatures are eliminated. This means that the images
              are steadier and sharper than those from a reflector telescope of
              the same size.
            </p>
          </div>
          <div className={Styles.image}>
            <Image
              src="/images/pageImages/old-refractor.jpg"
              alt="Refractors"
              width="198"
              height="293"
            />
          </div>
        </section>
        <section className={Styles.productList}>
          {kits.length > 0 && (
            <>
              <h2>Refractor Telescope Kits</h2>
              <ProductGrid products={kits} />
            </>
          )}

          {otas.length > 0 && (
            <>
              <h2>Refractor OTAs</h2>
              <ProductGrid products={otas} />
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
      title: "Sky-Watcher Refractors",
    },
  };
}

export default refractors;
