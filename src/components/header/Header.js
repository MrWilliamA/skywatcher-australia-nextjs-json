import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import ProductBanners from "./banners/productPages/ProductBanners";

const Header = ({ productDetails, nextProduct, title }) => {
  const banners = {
    home: <HomeBanner />,
    product: (
      <ProductBanners
        productDetails={productDetails.product}
        nextProduct={nextProduct}
      />
    ),
    page: <PageBanners title={title} />,
  };

  const selectedPageType = productDetails.type;

  return banners[selectedPageType] || banners[`page`];
};

export default Header;
