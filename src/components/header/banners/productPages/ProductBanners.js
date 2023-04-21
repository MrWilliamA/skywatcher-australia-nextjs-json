import Styles from "../../../../styles/productPage.module.css";
import Nav from "../../navigation/Nav";
import ProductTags from "@/components/products/ProductTags";
import ProductTopSectionDesktop from "./ProductTopSectionDesktop";
import ProductTopSectionPhones from "./ProductTopSectionPhones";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Lightbox from "../../../products/Lighbox";

const ProductBanners = ({
  productDetails,
  nextProduct,
  productsHovered,
  setProductsHovered,
  kBHovered,
  setKBHovered,
  buyerGuideHovered,
  setBuyerGuideHovered,
}) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 970 });
  const [lightbox, setLightbox] = useState(false);

  function handlelightbox() {
    setLightbox((lightbox) => !lightbox);
  }

  return (
    <>
      <section
        className={`${
          isSmallScreen ? Styles.phoneBanner : Styles.desktopBanner
        } ${Styles.productBanner}`}
      >
        <div
          className={`${Styles.hoverShade} ${
            productsHovered || kBHovered || buyerGuideHovered
              ? Styles.hovered
              : ""
          }`}
        ></div>
        <Nav
          productsHovered={productsHovered}
          setProductsHovered={setProductsHovered}
          kBHovered={kBHovered}
          setKBHovered={setKBHovered}
          buyerGuideHovered={buyerGuideHovered}
          setBuyerGuideHovered={setBuyerGuideHovered}
        />
        <section className={Styles.pageBannerText}>
          <div className={Styles.titleMeta}>
            <div className={Styles.titleMetaInner}>
              <h1>{productDetails.name}</h1>
              <div className={Styles.metaContainer}>
                <ProductTags productDetails={productDetails} />
              </div>
            </div>
          </div>
          {isSmallScreen ? (
            <ProductTopSectionPhones
              product={productDetails}
              handlelightbox={handlelightbox}
            />
          ) : (
            <ProductTopSectionDesktop
              product={productDetails}
              handlelightbox={handlelightbox}
              nextProduct={nextProduct}
            />
          )}
        </section>
      </section>
      {lightbox && (
        <Lightbox handlelightbox={handlelightbox} product={productDetails} />
      )}
    </>
  );
};

export default ProductBanners;
