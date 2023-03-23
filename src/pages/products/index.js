import Head from "next/head";
import data from "/productData/products.json";
import ProductGrid from "@/components/products/productGrid/ProductGrid";

export default function Index({ products }) {
  return (
    <div>
      <Head>
        <title>Sky-Watcher Products</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Products - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>

      <main>
        <ul>
          <ProductGrid products={products} />
        </ul>
      </main>
    </div>
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
