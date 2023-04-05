import styles from "../../../styles/page.module.css";
import Nav from "../navigation/Nav";

const PageBanners = ({ title, hovered, setHovered }) => {
  return (
    <section className={styles.pageBanner}>
      <Nav hovered={hovered} setHovered={setHovered} />
      <div className={styles.pageBannerText}>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageBanners;
