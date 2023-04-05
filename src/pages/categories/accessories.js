import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "../../components/products/productGrid/ProductGrid";
import Styles from "../../styles/categories.module.css";

const accessories = () => {
  const allAccessories = data.products.filter((product) =>
    product.tags.includes("Accessories")
  );

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia Accessories</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Accessories - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <main className={Styles.main}>
        <section className={Styles.top}>
          <div className={Styles.text}>
            <h2>Extend Your Kit With High Quality Extras.</h2>
            <p>
              Sky-Watcher Australia offers a wide range of telescope
              accessories, perfect to add on to your telescope for better and
              more varied astronomical viewing, learning, or astrophotography.
              If you own a telescope, our superb range of telescope accessories
              is perfect for you to customise and also enhance your telescope
              and astronomy experience!
            </p>
            <p>
              <strong>
                So you have a basic telescope and want to do more with it?
              </strong>
            </p>
            <p>
              Telescope eyepieces are great for adding some variety to your
              telescope’s magnification, whereas Barlow lenses are excellent to
              double or triple the power of your eyepieces. Telescope filters
              are a must-have to enhance the details and colours of the sun, the
              moon, the planets, and nebulae. If you have a camera and would
              love to take pictures of what you’re viewing, then
              astrophotography accessories would definitely be what you’re
              looking for.
            </p>
          </div>
        </section>
        <section className={Styles.productList}>
          {allAccessories.length > 0 && (
            <ProductGrid products={allAccessories} />
          )}
        </section>
      </main>
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

export default accessories;
