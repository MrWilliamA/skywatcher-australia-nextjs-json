import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Styles from "../../styles/categories.module.css";
import Layout from "@/components/templates/Layout";

const acuter = () => {
  const allAcuter = data.products.filter((product) =>
    product.tags.includes("Acuter")
  );

  const telescopes = allAcuter.filter((product) =>
    product.tags.includes("Telescopes")
  );

  const spotters = allAcuter.filter((product) =>
    product.tags.includes("Spotting Scopes")
  );

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Acuter</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Acuter - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <main className={Styles.main}>
          <section className={Styles.top}>
            <div className={Styles.text}>
              <h2>Fine Craftsmanship & Attention To Detail</h2>
              <p>
                Acuter™ is the sport optics line owned by Synta Technology Corp,
                a world famous and market leading optics manufacturer who are
                also the owners of Sky-Watcher. With ambitions to make the
                highest quality optics at a affordable price, Acuter™ carries
                the most popular optical equipment such as telescopes, spotting
                scopes and binoculars.
              </p>
            </div>
          </section>
          <section className={Styles.productList}>
            {telescopes.length > 0 && (
              <>
                <h2>Acuter Telescopes</h2>
                <p>
                  Our traditional brass telescopes and monoculars are ideal to
                  grace the balcony, library, conservatory or drawing room of a
                  fine house. These beautifully crafted, hand-polished, solid
                  brass telescopes and monocular have been manufactured to
                  reflect the workmanship and materials of a more elegant bygone
                  age. The magnificent, highly polished brass, is complimented
                  by a tripod made from finest quality mahogany wood. Features
                  high quality fully coated optics making them highly functional
                  products. All models provide erect images, so can be used for
                  terrestrial viewing as well as for basic astronomical
                  observations.
                </p>
                <ProductGrid products={telescopes} />
              </>
            )}

            {spotters.length > 0 && (
              <>
                <h2>Acuter Spotting Scopes</h2>
                <p>
                  A spotting scope is a portable telescope designed for land or
                  sea viewing. It is a remarkable instrument loved by many
                  nature observers, bird watchers and hunters. With a spotting
                  scope you can view across great distances and notice details
                  that are nearly impossible to see with binoculars.
                </p>
                <ProductGrid products={spotters} />
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
      title: "Sky-Watcher Accessories",
    },
  };
}

export default acuter;
