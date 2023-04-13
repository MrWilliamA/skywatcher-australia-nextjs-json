import { useState } from "react";
import Head from "next/head";
import Styles from "../styles/faq.module.css";
import { questions } from "../components/faq/Faq";
import Layout from "@/components/templates/Layout";

const Faq = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  function toggleQuestion(column, index) {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex === `${column}-${index}` ? null : `${column}-${index}`
    );
  }

  function getButtonClass(column, index) {
    return activeQuestionIndex === `${column}-${index}`
      ? Styles.minus
      : Styles.plus;
  }

  const questionSplit = Math.ceil(questions.length / 2);

  const test = Array.from(questions);
  const firstColumn = test.slice(0, questionSplit);
  const secondColumn = test.slice(questionSplit);

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia FAQs</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Frequently Asked Questions(FAQs) - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>
      <Layout layout="boxed">
        <section className={Styles.container}>
          <div className={`${Styles.column} ${Styles.column1}`}>
            {firstColumn.map((q, index) => (
              <div key={index} className={Styles.question}>
                <button
                  onClick={() => toggleQuestion("column1", index)}
                  className={getButtonClass("column1", index)}
                >
                  {q.question}
                </button>
                {activeQuestionIndex === `column1-${index}` && (
                  <p
                    className={Styles.answer}
                    dangerouslySetInnerHTML={{ __html: q.answer }}
                  ></p>
                )}
              </div>
            ))}
          </div>
          <div className={`${Styles.column} ${Styles.column2}`}>
            {secondColumn.map((q, index) => (
              <div key={index} className={Styles.question}>
                <button
                  onClick={() => toggleQuestion("column2", index)}
                  className={getButtonClass("column2", index)}
                >
                  {q.question}
                </button>
                {activeQuestionIndex === `column2-${index}` && (
                  <p
                    className={Styles.answer}
                    dangerouslySetInnerHTML={{ __html: q.answer }}
                  ></p>
                )}
              </div>
            ))}
          </div>
        </section>{" "}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Sky-Watcher Australia FAQs",
    },
  };
}

export default Faq;
