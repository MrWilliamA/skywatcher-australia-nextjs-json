import Nav from "../navigation/Nav";
import Styles from "../../../styles/pageNotFound.module.css";
const PageBanners = ({
  productsHovered,
  setProductsHovered,
  kBHovered,
  setKBHovered,
}) => {
  return (
    <section className={Styles.pageBanner}>
      <div
        className={`${Styles.hoverShade} ${
          productsHovered || kBHovered ? Styles.hovered : ""
        }`}
      ></div>
      <Nav
        productsHovered={productsHovered}
        setProductsHovered={setProductsHovered}
        kBHovered={kBHovered}
        setKBHovered={setKBHovered}
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
