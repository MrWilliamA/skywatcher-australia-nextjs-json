import Nav from "../../../components/header/navigation/Nav";
import styles from "../../../styles/Home.module.css";

const homebanner = () => {
  return (
    <section className={styles.pageBanner}>
      <div className={styles.galaxyContainer}>
        <div className={styles.galaxy}></div>
      </div>
      <Nav />
      <div classname={styles.h1Container}>
        <h1>SKY-WATCHER AUSTRALIA</h1>
      </div>
    </section>
  );
};

export default homebanner;
