import Nav from "../../../components/header/navigation/Nav";
import styles from "../../../styles/Home.module.css";

const homebanner = () => {
  return (
    <section className={styles.pageBanner}>
      <div className={styles.galaxy}></div>
      <Nav />
      <h1>Welcome to Sky-Watcher Australia</h1>
    </section>
  );
};

export default homebanner;
