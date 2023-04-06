import Styles from "../../../styles/page.module.css";
import Nav from "../navigation/Nav";

const PageBanners = ({
  title,
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
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageBanners;
