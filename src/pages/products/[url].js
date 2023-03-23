import Head from "next/head";
import data from "/productData/products.json";
import Styles from "../../styles/productPage.module.css";
export default function Product({ urlObject }) {
  const productList = data.products;

  const currentUrl = urlObject.params.url;
  const product = productList.find((item) => item.url === currentUrl);
  if (product !== undefined) {
    return (
      <div>
        <Head>
          <title>{product.name}</title>
        </Head>

        <main className={Styles.top}>
          <p>{product.bullets}</p>
        </main>
      </div>
    );
  } else {
    return <p>page not found</p>;
  }
}

export async function getStaticProps({ params }) {
  const { url } = params;

  const product = data.products.find((product) => product.url === url);
  return {
    props: {
      urlObject: { params: { url } },
      product: product,
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
