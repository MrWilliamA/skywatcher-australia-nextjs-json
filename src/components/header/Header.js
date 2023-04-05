import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import ProductBanners from "./banners/productPages/ProductBanners";
import { useState } from "react";

const Header = ({ productDetails, nextProduct, title }) => {
  const [hovered, setHovered] = useState(false);

  const banners = {
    home: <HomeBanner hovered={hovered} setHovered={setHovered} />,
    product: (
      <ProductBanners
        productDetails={productDetails.product}
        nextProduct={nextProduct}
        hovered={hovered}
        setHovered={setHovered}
      />
    ),
    page: (
      <PageBanners title={title} hovered={hovered} setHovered={setHovered} />
    ),
  };

  const selectedPageType = productDetails.type;

  return banners[selectedPageType] || banners[`page`];
};

export default Header;
