import styles from "../../styles/CatMasonry.module.css";
const CatMasonry = () => {
  return (
    <section className={styles.section}>
      <article className="refractors">Refractors</article>
      <article className="dobsonians">Dobsonians</article>

      <article className="otas">OTAs</article>

      <article className="maks">Maksutov Cassegrains</article>
      <article className="acuter">Acuter</article>
      <article className="accessories">Accessories</article>

      <article className="reflectors">Reflectors</article>
      <article className="mounts">Mounts</article>
    </section>
  );
};

export default CatMasonry;
