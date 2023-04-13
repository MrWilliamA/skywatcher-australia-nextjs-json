import "@/styles/globals.css";
import BoxedWidth from "@/components/templates/BoxedWidth";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PreHeader from "../components/header/PreHeader";
import Layout from "@/components/templates/Layout";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      console.log(page);
      return (
        <>
          <PreHeader />
          <Header
            productDetails={pageProps}
            title={pageProps.title}
            nextProduct={pageProps.nextProduct}
          />
          {page}
          <Footer />
        </>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
