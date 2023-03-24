import Link from "next/link";
import Image from "next/image";
import Styles from "../../../styles/nav.module.css";
import { leftNavLinks, rightNavLinks } from "./NavigationRoutes";

const DesktopMenu = ({ logoUrl }) => {
  return (
    <section className={Styles.navContainer}>
      <div className={Styles.innerNavContainer}>
        <div className={Styles.leftMenuContainer}>
          <ul className={`${Styles.list}  ${Styles.left}`}>
            {leftNavLinks.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className={Styles.logoContainer}>
          <Link href="/">
            <Image
              src={logoUrl}
              alt="SkyWatcher Australia"
              width={200}
              height={70}
            />
          </Link>
        </div>
        <div className={Styles.rightMenuContainer}>
          <ul className={`${Styles.list}  ${Styles.right}`}>
            {rightNavLinks.map((link, index) => {
              return (
                <Link key={index} href={link.path}>
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DesktopMenu;
