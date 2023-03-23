import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import ProductBanners from "./banners/ProductBanners";

const Header = ({ productDetails }) => {
  const banners = {
    home: <HomeBanner />,
    product: <ProductBanners productDetails={productDetails.product} />,
    page: <PageBanners title={productDetails.title} />,
  };

  const selectedPageType = productDetails.type;

  return banners[selectedPageType] || banners[`page`];
};

export default Header;
