import HomeBanner from "./banners/HomeBanner";
import PageBanners from "./banners/PageBanners";
import ProductBanners from "./banners/productPages/ProductBanners";
import PageNotFoundBanner from "./banners/PageNotFoundBanner.js";
import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ productDetails, nextProduct, title }) => {
  const [productsHovered, setProductsHovered] = useState(false);
  const [kBHovered, setKBHovered] = useState(false);
  const [buyerGuideHovered, setBuyerGuideHovered] = useState(false);

  const banners = {
    home: (
      <HomeBanner
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
        buyerGuideHovered={buyerGuideHovered}
        setBuyerGuideHovered={setBuyerGuideHovered}
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
        buyerGuideHovered={buyerGuideHovered}
        setBuyerGuideHovered={setBuyerGuideHovered}
      />
    ),
    page: (
      <PageBanners
        title={title}
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
        buyerGuideHovered={buyerGuideHovered}
        setBuyerGuideHovered={setBuyerGuideHovered}
      />
    ),
    PageNotFound: (
      <PageNotFoundBanner
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
        buyerGuideHovered={buyerGuideHovered}
        setBuyerGuideHovered={setBuyerGuideHovered}
      />
    ),
  };

  const selectedPageType = productDetails.type;

  return banners[selectedPageType] || banners[`page`];
};

Header.propTypes = {
  productDetails: PropTypes.object.isRequired,
  nextProduct: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default Header;
