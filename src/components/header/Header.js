import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import ProductBanners from "./banners/ProductBanners";

const Header = ({ productDetails, title }) => {
  const banners = {
    home: <HomeBanner />,
    product: <ProductBanners productDetails={productDetails.product} />,
    page: <PageBanners title={title} />,
  };

  const selectedPageType = productDetails.type;

  return banners[selectedPageType] || banners[`page`];
};

export default Header;
