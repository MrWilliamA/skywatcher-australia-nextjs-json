import Styles from "../../../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  leftNavLinks,
  rightNavLinks,
  productsSubMenu,
  knowledgeBaseSubMenu,
  buyersGuide,
} from "./NavigationRoutes";

const OpenMobileNav = ({ logoUrl, buttonHandler }) => {
  return (
    <section className={Styles.mobileContainerOpen}>
      <article className={Styles.openMobileNav}>
        <ul>
          {leftNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  className={Styles.mobileTopList}
                  onClick={buttonHandler}
                >
                  {link.name}
                </Link>
                {link.name === "PRODUCTS" && (
                  <section className={Styles.mobileSubMenuContainer}>
                    <ul className={Styles.mobileSubMenu}>
                      {productsSubMenu.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link href={link.path} onClick={buttonHandler}>
                              {link.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                )}
                {link.name === "BUYERS GUIDE" && (
                  <section className={Styles.mobileSubMenuContainer}>
                    <ul className={Styles.mobileSubMenu}>
                      {buyersGuide.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link href={link.path} onClick={buttonHandler}>
                              {link.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                )}
              </li>
            );
          })}
          {rightNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  className={Styles.mobileTopList}
                  onClick={buttonHandler}
                >
                  {link.name}
                </Link>
                {link.name === "KNOWLEDGE BASE" && (
                  <section className={Styles.mobileSubMenuContainer}>
                    <ul className={Styles.mobileSubMenu}>
                      {knowledgeBaseSubMenu.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link href={link.path} onClick={buttonHandler}>
                              {link.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                )}
              </li>
            );
          })}
        </ul>
      </article>
      <section>
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
        <article className={Styles.close}>
          <p onClick={buttonHandler}>CLOSE MENU</p>
        </article>
      </section>
    </section>
  );
};

export default OpenMobileNav;
