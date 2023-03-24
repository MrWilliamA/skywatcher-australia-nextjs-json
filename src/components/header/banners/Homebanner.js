import Nav from "../navigation/Nav";
import styles from "../../../styles/home.module.css";

const homebanner = () => {
  return (
    <>
      <section className={styles.pageBanner}>
        <div className={styles.galaxyContainer}>
          <div className={styles.galaxy}></div>
        </div>
        <Nav />
        <div className={styles.h1Container}>
          <h1>Sky-Watcher Australia</h1>
        </div>
      </section>
    </>
  );
};

export default homebanner;
