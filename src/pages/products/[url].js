import Head from "next/head";
import data from "/productData/products.json";
import Link from "next/link";
import ProductTags from "@/components/products/ProductTags";
import { FaSearchLocation } from "react-icons/fa";
import Styles from "../../styles/productPage.module.css";
import ProductSpecTable from "@/components/products/ProductSpecTable";
import Layout from "@/components/templates/Layout";

export default function Product({ urlObject }) {
  const productList = data.products;

  const currentUrl = urlObject.params.url;
  const product = productList.find((item) => item.url === currentUrl);
  if (product !== undefined) {
    return (
      <>
        <Head>
          <title>{product.name}</title>
          <meta
            name="description"
            content={`Introducing the ${product.name} ${product.tags}`}
          />
        </Head>
        <Layout layout="boxed">
          <main className={Styles.mainContent}>
            <section className={Styles.shortDescription}>
              <h2>{product.name} Features</h2>
              <ul>
                {product.bullets.map((bullet, key) => {
                  return <li key={key}>{bullet}</li>;
                })}
              </ul>
            </section>
            <section className={Styles.productDetails}>
              <div>
                <p className={Styles.rrp}>${product.rrp}</p>
                <p className={Styles.sku}>
                  Product Code: <span>{product.sku}</span>
                </p>
                <p className={Styles.tags}>
                  <ProductTags productDetails={product} seperator={" | "} />
                </p>
              </div>
              <div>
                <p> 5 year manufacturer warranty (not transferable).</p>
              </div>
              <div>
                <button className={Styles.dealers}>
                  <Link href="/find-a-dealer">
                    Find a Local Dealer
                    <FaSearchLocation />
                  </Link>
                </button>
              </div>
            </section>
            <section className={Styles.description}>
              <h2>{product.name} Description</h2>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </section>
            {product.specs ? <ProductSpecTable product={product.specs} /> : " "}
          </main>{" "}
        </Layout>
      </>
    );
  } else {
    return <p>page not found</p>;
  }
}

export async function getStaticProps({ params }) {
  const { url } = params;

  const product = data.products.find((product) => product.url === url);

  let nextProduct;

  if (product !== data.products[data.products.length - 1]) {
    nextProduct = data.products[data.products.indexOf(product) + 1];
  } else {
    nextProduct = data.products[0];
  }

  return {
    props: {
      urlObject: { params: { url } },
      product: product,
      nextProduct: nextProduct,
      title: product.name,
      type: "product",
    },
  };
}

export async function getStaticPaths() {
  const paths = data.products.map((product) => {
    return { params: { url: product.url } };
  });

  return {
    paths,
    fallback: false,
  };
}
