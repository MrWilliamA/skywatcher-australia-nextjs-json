import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import ProductBanners from "./banners/productPages/ProductBanners";
import { useState } from "react";

const Header = ({ productDetails, nextProduct, title }) => {
  const [productsHovered, setProductsHovered] = useState(false);
  const [kBHovered, setKBHovered] = useState(false);

  const banners = {
    home: (
      <HomeBanner
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
      />
    ),
    product: (
      <ProductBanners
        productDetails={productDetails.product}
        nextProduct={nextProduct}
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
      />
    ),
    page: (
      <PageBanners
        title={title}
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
      />
    ),
  };

  const selectedPageType = productDetails.type;

  return banners[selectedPageType] || banners[`page`];
};

export default Header;
