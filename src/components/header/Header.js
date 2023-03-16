import HomeBanner from "./banners/Homebanner";
import PageBanners from "./banners/PageBanners";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const currentURL = useRouter().pathname;
  return currentURL === "/" ? <HomeBanner /> : <PageBanners />;
};

export default Header;
