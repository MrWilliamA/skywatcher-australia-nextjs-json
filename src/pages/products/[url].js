import Head from "next/head";
import test from "/productData/products.json";
import { useState } from "react";

export default function Product({ urlObject }) {
  const productList = test[0].products;

  const currentUrl = urlObject.params.url;
  const product = productList.filter((item) => item.url === currentUrl)[0];

  if (product !== undefined) {
    return (
      <div>
        <Head>
          <title>{product.name}</title>
        </Head>

        <main>
          <h1>{product.name}</h1>
        </main>
      </div>
    );
  } else {
    return <p>page not found</p>;
  }
}

export async function getServerSideProps({ params }) {
  const data = await params;

  const currentUrl = { params };

  return {
    props: { urlObject: currentUrl },
  };
}
