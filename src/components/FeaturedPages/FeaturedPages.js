import styles from "../../styles/featuredPages.module.css";
import Link from "next/link";

const FeaturedPages = () => {
  return (
    <section className={styles.section}>
      <article className="knowledge">
        <Link href="/knowledge-base">
          <h2>Knowledge Base</h2>{" "}
        </Link>
      </article>
      <article className="firstTimeBuyer">
        <Link href="/buyers-guide">
          <h2>First Time Buyers Guide</h2>
        </Link>
      </article>
      <article className="news">
        <Link href="/news">
          <h2>News</h2>
        </Link>
      </article>
    </section>
  );
};

export default FeaturedPages;
