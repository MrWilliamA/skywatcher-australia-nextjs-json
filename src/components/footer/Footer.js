import styles from "../../styles/footer.module.css";
import Image from "next/image";
import Socials from "../header/Socials";

const Footer = () => {
  const logoUrl = "/images/logos/Skywatcher-logo-white.png";

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.column}>
          <Image
            src={logoUrl}
            alt="SkyWatcher Australia"
            width={200}
            height={70}
          />
          <p>
            Innovation and world-class engineering. That is what you can expect
            from every Sky-Watcher product.
          </p>
        </div>
        <div className={styles.column}>
          <p>Newsletter Signup form here</p>
          <br></br>
          <h3>Follow Us</h3>
          <br />
          <Socials className={styles.socials} />
        </div>
        <div className={styles.column}>
          <h3>Popular Pages</h3>
          <ul>
            <li>pages</li>
          </ul>
        </div>
        <div className={styles.fullColumn}>
          <p>Copyright ©2023 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
