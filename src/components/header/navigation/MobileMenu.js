import { useState } from "react";
import OpenMobileNav from "./OpenMobileNav";
import ClosedMobileMenu from "./ClosedMobileMenu";

const MobileMenu = ({ leftNavLinks, rightNavLinks, logoUrl }) => {
  const [isOpen, setOpen] = useState(false);
  const buttonHandler = () => {
    setOpen((isOpen) => !isOpen);
  };

  return isOpen ? (
    <OpenMobileNav
      leftNavLinks={leftNavLinks}
      rightNavLinks={rightNavLinks}
      logoUrl={logoUrl}
      isOpen={isOpen}
      setOpen={setOpen}
      buttonHandler={buttonHandler}
    />
  ) : (
    <ClosedMobileMenu
      logoUrl={logoUrl}
      isOpen={isOpen}
      setOpen={setOpen}
      buttonHandler={buttonHandler}
    />
  );
};

export default MobileMenu;
