import Styles from "../../../styles/productPage.module.css";
import Nav from "../navigation/Nav";
import ProductTags from "@/components/products/ProductTags";

const ProductBanners = ({ productDetails, hovered, setHovered }) => {
  return (
    <section className={Styles.pageBanner}>
      <Nav hovered={hovered} setHovered={setHovered} />
      <div className={Styles.pageBannerText}>
        <h1>{productDetails.name}</h1>
        <div className={Styles.metaContainer}>
          <ProductTags productDetails={productDetails} />
        </div>
      </div>
    </section>
  );
};

export default ProductBanners;
