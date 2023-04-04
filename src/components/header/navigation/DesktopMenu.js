import Link from "next/link";
import Image from "next/image";
import Styles from "../../../styles/nav.module.css";
import {
  leftNavLinks,
  productsSubMenu,
  rightNavLinks,
} from "./NavigationRoutes";
import { useState } from "react";

const DesktopMenu = ({ logoUrl }) => {
  const [hovered, setHovered] = useState(false);

  function mouseOver(name) {
    if (name === "PRODUCTS") {
      setHovered(true);
    }
  }

  function mouseOff() {
    setHovered(false);
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
                  <li key={index}>
                    <Link
                      href={link.path}
                      className={`${Styles.topList}${
                        hovered ? Styles.hovered : ""
                      }`}
                      onMouseOver={() => mouseOver(link.name)}
                    >
                      {link.name}
                    </Link>
                    {link.name === "PRODUCTS" && hovered && (
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
                  <li key={index}>
                    <Link href={link.path} className={Styles.topList}>
                      {link.name}
                    </Link>
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
