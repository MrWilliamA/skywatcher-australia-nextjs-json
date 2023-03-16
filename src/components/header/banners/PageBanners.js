import styles from "../../../styles/Page.module.css";

import Nav from "../navigation/Nav";

const PageBanners = () => {
  return (
    <section className={styles.pageBanner}>
      <Nav />
      <p>this is a page banner</p>
    </section>
  );
};

export default PageBanners;
