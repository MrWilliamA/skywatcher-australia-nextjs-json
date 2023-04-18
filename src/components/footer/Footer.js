import styles from "../../styles/footer.module.css";
import Image from "next/image";
import Socials from "../header/Socials";
import Link from "next/link";

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
          <p>Newsletter Signup (coming soon) </p>
          <br></br>
          <h3>Follow Us</h3>
          <br />
          <Socials className={styles.socials} />
        </div>
        <div className={styles.column}>
          <h3>Popular Pages</h3>
          <ul>
            <li>
              <Link href="/categories/refractors">Refractors</Link>
            </li>
            <li>
              <Link href="/categories/reflectors">Reflectors</Link>
            </li>
            <li>
              <Link href="/buyers-guide">Buyers Guide</Link>
            </li>
            <li>
              <Link href="/knowledge-base">Knowledge Base</Link>
            </li>
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
