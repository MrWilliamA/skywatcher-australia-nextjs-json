import Link from "next/link";
import Image from "next/image";
import Styles from "../../../styles/nav.module.css";
import {
  leftNavLinks,
  productsSubMenu,
  rightNavLinks,
  knowledgeBaseSubMenu,
} from "./NavigationRoutes";

const DesktopMenu = ({
  logoUrl,
  productsHovered,
  setProductsHovered,
  kBHovered,
  setKBHovered,
}) => {
  function mouseOver(name) {
    if (name === "PRODUCTS") {
      setProductsHovered(true);
    } else if (name === "KNOWLEDGE BASE") {
      console.log("asdasd");
      setKBHovered(true);
    }
  }

  function mouseOff() {
    setProductsHovered(false);
    setKBHovered(false);
  }
  return (
    <>
      <section className={Styles.navContainerBackground}></section>
      <section className={Styles.navContainer}>
        <div className={Styles.innerNavContainer}>
          <div className={Styles.leftMenuContainer}>
            <ul className={`${Styles.list}  ${Styles.left}`}>
              {leftNavLinks.map((link, index) => {
                return (
                  <li key={index} onMouseLeave={mouseOff}>
                    <Link
                      href={link.path}
                      className={`${Styles.topList}${
                        productsHovered ? Styles.hovered : ""
                      }`}
                      onMouseOver={() => mouseOver(link.name)}
                    >
                      {link.name}
                    </Link>
                    {link.name === "PRODUCTS" && productsHovered && (
                      <section
                        className={`${Styles.subMenuContainer} ${Styles.subMenuContainerFixed} `}
                        onMouseLeave={mouseOff}
                      >
                        <ul className={Styles.subMenu}>
                          {productsSubMenu.map((link, index) => {
                            return (
                              <li key={index}>
                                <Link href={link.path}>{link.name}</Link>
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
                  <li key={index} onMouseLeave={mouseOff}>
                    <Link
                      href={link.path}
                      className={Styles.topList}
                      onMouseOver={() => mouseOver(link.name)}
                    >
                      {link.name}
                    </Link>
                    {link.name === "KNOWLEDGE BASE" && kBHovered && (
                      <section
                        className={`${Styles.subMenuContainer} ${Styles.subMenuContainerFixed} `}
                        onMouseLeave={mouseOff}
                      >
                        <ul className={Styles.subMenu}>
                          {knowledgeBaseSubMenu.map((link, index) => {
                            return (
                              <li key={index}>
                                <Link href={link.path}>{link.name}</Link>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default DesktopMenu;
