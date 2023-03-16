import "@/styles/globals.css";
import BoxedWidth from "@/components/templates/BoxedWidth";
import Header from "../components/header/Header";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <>
          <Header />
          <BoxedWidth>{page}</BoxedWidth>
        </>
      );
    });

  return getLayout(<Component {...pageProps} />);
}
