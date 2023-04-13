import Link from "next/link";
import { knowledgeBaseSubMenu } from "../components/header/navigation/NavigationRoutes";
import Styles from "../styles/knowledgeBase.module.css";
import Layout from "@/components/templates/Layout";

const KnowledgeBase = () => {
  return (
    <Layout layout="boxed">
      <div>
        <p>
          Sky-Watcher is a First-Class, Market Leading telescope brand offering
          an incredible range of high quality astronomical telescopes and
          accessories, catering for users of all groups and experience, from the
          novice astronomer to the advanced. Sky-Watcher astronomical telescopes
          perfectly integrate modern optical technology with precision
          mechanical engineering, resulting in designs of superb functionality,
          versatility and uncompromising levels of performance.
        </p>

        <section className={Styles.container}>
          {knowledgeBaseSubMenu.map((link, index) => {
            return (
              <div key={index}>
                <Link href={link.path}>{link.name}</Link>
              </div>
            );
          })}
        </section>
      </div>
    </Layout>
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
