import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import { useRouter } from "next/router";

const Header = ({ title }) => {
  const currentURL = useRouter().pathname;
  return currentURL === "/" ? <HomeBanner /> : <PageBanners title={title} />;
};

export default Header;
