import Styles from "../../../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { leftNavLinks, rightNavLinks } from "./NavigationRoutes";

const OpenMobileNav = ({ logoUrl, isOpen, setOpen, buttonHandler }) => {
  return (
    <section className={Styles.mobileContainerOpen}>
      <article className={Styles.close}>
        <p onClick={buttonHandler}>CLOSE MENU</p>
      </article>

      <article className={Styles.openMobileNav}>
        <ul>
          {leftNavLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <li>{link.name}</li>
              </Link>
            );
          })}
          {rightNavLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </article>
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
    </section>
  );
};

export default OpenMobileNav;
