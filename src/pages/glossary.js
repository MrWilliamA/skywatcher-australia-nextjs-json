import { terms } from "../components/glossary/Terms";
import Styles from "../styles/glossary.module.css";
import Layout from "@/components/templates/Layout";

const glossary = () => {
  return (
    <Layout layout="boxed">
      <section>
        <table className={Styles.table}>
          <tbody>
            <tr>
              <th>Term</th>
              <th>Definition</th>
            </tr>
            {terms.map((term, key) => {
              return (
                <tr key={key}>
                  <td>{term.term}</td>
                  <td>{term.definition}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Glossary of Astronomy Terms",
    },
  };
}

export default glossary;
