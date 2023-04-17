import Link from "next/link";
import { knowledgeBaseSubMenu } from "../components/header/navigation/NavigationRoutes";
import Styles from "../styles/knowledgeBase.module.css";
import Layout from "@/components/templates/Layout";
import Image from "next/image";
import Head from "next/head";

const KnowledgeBase = () => {
  return (
    <>
      <Head>
        <title>Sky-Watcher Knowledge Base</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Knowledge Base - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <section className={Styles.container}>
          <div className={Styles.leftcol}>
            <p>
              Sky-Watcher is a First-Class, Market Leading telescope brand
              offering an incredible range of high quality astronomical
              telescopes and accessories, catering for users of all groups and
              experience, from the novice astronomer to the advanced.
              Sky-Watcher astronomical telescopes perfectly integrate modern
              optical technology with precision mechanical engineering,
              resulting in designs of superb functionality, versatility and
              uncompromising levels of performance.
            </p>
            <article className={Styles.buttonContainer}>
              {knowledgeBaseSubMenu.map((link, index) => {
                return (
                  <div key={index}>
                    <Link href={link.path}>{link.name}</Link>
                  </div>
                );
              })}
            </article>
          </div>
          <div className={Styles.rightcol}>
            <Image
              src="/images/pageImages/knowledge-base.png"
              alt="Sir Patrick Moore"
              width="680"
              height="504"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Knowledge Base",
    },
  };
}

export default KnowledgeBase;
