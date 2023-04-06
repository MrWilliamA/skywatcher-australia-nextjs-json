import { useState } from "react";
import Head from "next/head";
import Styles from "../styles/faq.module.css";
import { questions } from "../components/faq/Faq";

function FAQ() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  function toggleQuestion(index) {
    setActiveQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <>
      <Head>
        <title>Sky-Watcher Australia FAQs</title>
        <meta
          name="description"
          content="Sky-Watcher Australia Frequently Asked Questions(FAQs) - Astronomy telescopes, binoculars and spotting scopes."
        />
      </Head>

      <section>
        {questions.map((q, index) => (
          <div key={index} className={Styles.question}>
            <button onClick={() => toggleQuestion(index)}>{q.question}</button>
            {activeQuestionIndex === index && <p>{q.answer}</p>}
          </div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Sky-Watcher Australia FAQs",
    },
  };
}

export default FAQ;
