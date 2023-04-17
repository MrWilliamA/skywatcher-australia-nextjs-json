import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "@/components/products/productGrid/ProductGrid";
import Layout from "@/components/templates/Layout";

export default function Index({ products }) {
  return (
    <>
      <Head>
        <title>Sky-Watcher Products</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Products - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <main>
          <ul>
            <ProductGrid products={products} />
          </ul>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const productList = data.products;

  return {
    props: {
      products: productList,
      title: "Sky-Watcher Products",
      type: "page",
    },
  };
}
