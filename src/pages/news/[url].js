import Head from "next/head";
import Styles from "../../styles/news.module.css";
import Layout from "@/components/templates/Layout";
import { articles } from "../../components/news/NewsArticles";
import Image from "next/image";
import PropTypes from "prop-types";

export default function News({ article }) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.title} />
      </Head>
      <Layout layout="boxed">
        <div className={Styles.textContainer}>
          <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
        </div>
        <div className={Styles.imageContainer}>
          {article.image
            ? article.image.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={`/images/pageimages/news/${imageUrl}`}
                  alt={article.title}
                  width={500}
                  height={350}
                />
              ))
            : ""}
        </div>
      </Layout>
    </>
  );
}

News.propTypes = {
  article: PropTypes.object.isRequired,
};

export async function getStaticProps({ params }) {
  const article = articles.find(
    (article) =>
      article.title
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^\w-]+/g, "") === params.url
  );

  const title = article ? article.title : "Sky-Watcher Australia";

  return {
    props: {
      article,
      title,
    },
  };
}

export async function getStaticPaths() {
  const paths = articles.map((article) => {
    const url = article.title
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace(/[^\w-]+/g, "");
    return {
      params: {
        url,
        title: article.title,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
