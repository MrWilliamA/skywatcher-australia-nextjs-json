import "@/styles/globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PreHeader from "../components/header/PreHeader";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
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
