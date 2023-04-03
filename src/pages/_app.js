import "@/styles/globals.css";
import BoxedWidth from "@/components/templates/BoxedWidth";
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
<<<<<<< Updated upstream
          <Header productDetails={pageProps} title={pageProps.title} />
          {pageProps.product && (
            <ProductTopSection
              product={pageProps.product}
              nextProduct={pageProps.nextProduct}
            />
          )}

=======
          <Header
            productDetails={pageProps}
            title={pageProps.title}
            nextProduct={pageProps.nextProduct}
          />
>>>>>>> Stashed changes
          <BoxedWidth>{page}</BoxedWidth>
          <Footer />
        </>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
