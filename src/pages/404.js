import Image from "next/image";
import Styles from "../styles/pageNotFound.module.css";
import Layout from "@/components/templates/Layout";

function Custom404() {
  return (
    <Layout layout="boxed">
      <div className={Styles.notFound}>
        <Image
          src="/images/pageImages/page-not-found.png"
          alt="404 page not found"
          width="900"
          height="667"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      type: "PageNotFound",
      title: "404 - Page Not Found",
    },
  };
}

export default Custom404;
