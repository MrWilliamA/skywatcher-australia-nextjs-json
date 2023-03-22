import styles from "../../styles/featuredPages.module.css";

const FeaturedPages = () => {
  return (
    <section className={styles.section}>
      <article className="knowledge">Knowledge Base</article>
      <article className="firstTimeBuyer">First Time Buyters Guide</article>
      <article className="news">News</article>
    </section>
  );
};

export default FeaturedPages;
