import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "@/components/products/productGrid/ProductGrid";
import TelescopeFinderForm from "@/components/telescopeFinder/TelescopeFinderForm";
import Styles from "../styles/telescopeFinder.module.css";
import Layout from "@/components/templates/Layout";
import { useState } from "react";

const TelescopeFinder = ({ products }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedRrp, setSelectedRrp] = useState([]);

  const rrpRanges = [
    { label: "Under $300", min: 0, max: 300 },
    { label: "$300 - $600", min: 300, max: 600 },
    { label: "$600 - $1200", min: 600, max: 1200 },
    { label: "Over $1200", min: 1200, max: Infinity },
  ];

  const filtered = products.filter((product) => {
    // const matchedRange = rrpRanges.find(
    //   (range) => product.rrp >= range.min && product.rrp < range.max
    // );

    return selectedFilters.every((filter) => {
      if (filter.includes("$")) {
        setSelectedRrp(...filter, filter);
      }
      // console.log(product.filter);

      return product.filter.includes(filter);
      // || product.rrp.includes(selectedRrp)
    });
  });

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <>
      <Head>
        <title>Sky-Watcher Telescope Finder</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Telescope Finder - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <h2>5 Questions To Find Your Telescope!</h2>
        <p>
          <strong>Find A Telescope To Suit Your Needs. </strong>Try our quick
          questionnaire to sort out the best telescopes to suit your
          requirements. Tick the boxes below and the products that best suit
          your selection will show up below.
        </p>
        <p>You can select mutiple checkboxes under each category.</p>
      </Layout>
      <Layout layout="full">
        <section className={Styles.container}>
          <Layout layout="boxed">
            <TelescopeFinderForm onFilterChange={handleFilterChange} />
          </Layout>
        </section>
      </Layout>
      <Layout layout="boxed">
        {selectedFilters.includes("Land") && (
          <p className={Styles.defined}>
            <strong>Land Telescopes: </strong>If you want to use your telescope
            for more then just stars, land telescopes are refractors or spotting
            scopes are best. They are suited for land viewing because they are
            designed with lenses rather than mirrors that invert images the
            other way. They come in a variety of sizes and magnifications for
            viewing the landscaope around you.
          </p>
        )}
        {selectedFilters.includes("Sky") && (
          <p className={Styles.defined}>
            <strong>Astronomy Telescopes: </strong>Deep space viewing (nebulae,
            galaxies) is generally reserved for Dobosnian Telescopes. They are
            made of a simple tube structure yet features remarkable ability to
            gather light, making it extremely versatile for viewing the deep
            skies. High-powered Reflector Telescopes and Maksutov-Cassegrains
            affixed with a large aperture are also suitable.
          </p>
        )}

        {selectedFilters.includes("Beginner") && (
          <p className={Styles.defined}>
            <strong>Beginner Telescopes: </strong>If you are curious and want to
            see more, but have no idea where to start. These telescopes are for
            hobbyists and backyard astronomers that are not too taxing on the
            wallet.
          </p>
        )}

        {selectedFilters.includes("Intermediate") && (
          <p className={Styles.defined}>
            <strong>Intermediate Telescopes: </strong>Featuring a balanced
            selection between quality telescopes, affordability and ease of use.
          </p>
        )}

        {selectedFilters.includes("Experienced") && (
          <p className={Styles.defined}>
            <strong>Experienced Telescopes: </strong>Featuring a selection of
            high powered, large Refractor, Maksutov- Cassegrains and Dobsonian
            Telescopes for professionals and those who engage in serious
            astronomy.
          </p>
        )}
        {selectedFilters.includes("Yes") && (
          <p className={Styles.defined}>
            <strong>GOTO Telescopes: </strong>Good choice! GOTO telescopes are
            perfect for all usrs. It will allow you to automatically find
            celestial objects at the click of a button.
          </p>
        )}
        {selectedFilters.includes("Compact") && (
          <p className={Styles.defined}>
            <strong>Compact Telescopes: </strong>Compact telescopes will give
            you the freedomnof portability, there’s no additional heavy
            equipment and they can generally be setup quickly.
          </p>
        )}

        <ProductGrid products={filtered} />
      </Layout>
    </>
  );
};

export default TelescopeFinder;

export async function getStaticProps() {
  const productList = data.products;

  return {
    props: {
      products: productList,
      title: "Sky-Watcher Telescope Finder",
      type: "page",
    },
  };
}
