import Link from "next/link";
import Image from "next/image";
import Styles from "../../../styles/nav.module.css";

const ClosedMobileMenu = ({ logoUrl, isOpen, setOpen, buttonHandler }) => {
  return (
    <section className={Styles.mobileContainer}>
      <article className={Styles.mobileLogo}>
        <Link href="/">
          <Image
            src={logoUrl}
            alt="SkyWatcher Australia"
            width={200}
            height={70}
          />
        </Link>
      </article>
      <article className={Styles.menuBtn}>
        <p onClick={buttonHandler}>Menu</p>
      </article>
    </section>
  );
};

export default ClosedMobileMenu;
