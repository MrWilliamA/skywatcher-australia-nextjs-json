import { articles } from "../../components/news/NewsArticles";
import Styles from "../../styles/news.module.css";
import Image from "next/image";
import LearnMore from "@/components/buttons/LearnMore";
import Link from "next/link";

const NewsCard = () => {
  console.log(typeof articles);

  return articles.map((article, key) => {
    const url =
      "/news/" +
      article.title
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^\w-]+/g, "");

    return (
      <div key={key} className={Styles.article}>
        <Link href={url}>
          <Image
            src={`${article.image[0]}`}
            alt={article.title}
            width="300"
            height="200"
          />
        </Link>
        <Link href={url}>
          <h3>{article.title}</h3>
        </Link>

        <div>
          <p>
            <i>{article.date}</i>
          </p>
          <LearnMore href={url} />
        </div>
      </div>
    );
  });
};

export default NewsCard;
