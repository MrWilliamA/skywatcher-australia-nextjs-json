import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Image from "next/image";
import Styles from "../../styles/categories.module.css";
import Layout from "@/components/templates/Layout";

const reflectors = () => {
  const allReflectors = data.products.filter((product) =>
    product.tags.includes("Reflectors")
  );

  const kits = allReflectors.filter(
    (product) => !product.tags.includes("OTAs")
  );

  const otas = allReflectors.filter((product) => product.tags.includes("OTAs"));

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Reflectors</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Reflectors - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <main className={Styles.main}>
          <section className={Styles.top}>
            <div className={Styles.text}>
              <h2>Sometimes Simple Is Best</h2>
              <p>
                Sky-Watcher Australia reflector telescope uses two mirrors
                instead of two lenses. Isaac Newton developed this telescope to
                combat chromatic aberration (a rainbow seen around some objects
                viewed with a refractor telescope). A mirror used to gather
                light doesn’t suffer from this effect. Light from an object
                enters the telescope tube and is reflected off a curved mirror
                at the end of the tube. A second, small, flat mirror in the
                middle of the tube reflects this image to the eyepiece.
              </p>
              <p>
                There are potential problems associated with the mirrors.
                Firstly, some light is always lost in the reflection; good
                quality telescopes can usually gather 90% of the light coming
                in. Secondly, the mirror might not be a perfect curve, so the
                image being reflected will not come to a perfect point. This
                results in a dragging effect; a point could be seen as a line or
                cross. Also, the mirrors need to be cleaned and realigned from
                time to time.
              </p>
            </div>
            <div className={Styles.image}>
              <Image
                src="/images/pageImages/early-reflector.jpg"
                alt="Reflectors"
                width="288"
                height="228"
              />
            </div>
          </section>
          <section className={Styles.allReflectors}>
            {kits.length > 0 && (
              <>
                <h2>Reflector Kits</h2>
                <ProductGrid products={kits} />
              </>
            )}

            {otas.length > 0 && (
              <>
                <h2>Reflector OTAs</h2>
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
      title: "Sky-Watcher Reflectors",
    },
  };
}

export default reflectors;
