import Nav from "../navigation/Nav";
import Styles from "../../../styles/pageNotFound.module.css";
const PageBanners = ({
  productsHovered,
  setProductsHovered,
  kBHovered,
  setKBHovered,
  buyerGuideHovered,
  setBuyerGuideHovered,
}) => {
  return (
    <section className={Styles.pageBanner}>
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
      <div className={Styles.pageBannerText}>
        <h1>
          <span>404</span> PAGE NOT FOUND
        </h1>
      </div>
    </section>
  );
};

export default PageBanners;
