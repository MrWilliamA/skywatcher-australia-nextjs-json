import { articles } from "../../components/news/NewsArticles";

const NewsGrid = () => {
  return articles.map((article, key) => {
    return (
      <tr key={key}>
        <td>{article.title}</td>
        <td>
          <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
        </td>
      </tr>
    );
  });
};

export default NewsGrid;
