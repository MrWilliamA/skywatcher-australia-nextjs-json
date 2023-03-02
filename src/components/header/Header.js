import HomeBanner from "./banners/Homebanner";
import PageBanners from "./banners/PageBanners";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const currentURL = useRouter().pathname;

  const [banner, setBanner] = useState(<PageBanners />);

  useEffect(() => {
    if (currentURL === "/") {
      setBanner(<HomeBanner />);
    }
  }, []);

  return banner;
};

export default Header;
