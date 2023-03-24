import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Nav = () => {
  const logoUrl = "/images/logos/Skywatcher-logo-white.png";

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth < 800 ? (
    <MobileMenu logoUrl={logoUrl} />
  ) : (
    <DesktopMenu logoUrl={logoUrl} />
  );
};

export default Nav;
