import "@/styles/globals.css";
import BoxedWidth from "@/components/templates/BoxedWidth";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PreHeader from "../components/header/PreHeader";
import ProductTopSection from "../components/templates/ProductTopSection";
export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <>
          <PreHeader />
          <Header productDetails={pageProps} title={pageProps.title} />
          {pageProps.product && (
            <ProductTopSection
              product={pageProps.product}
              nextProduct={pageProps.nextProduct}
            />
          )}
          <BoxedWidth>{page}</BoxedWidth>
          <Footer />
        </>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
