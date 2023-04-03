import Styles from "../../../styles/productPage.module.css";
import Nav from "../navigation/Nav";
import ProductTags from "@/components/products/ProductTags";
import ProductTopSection from "./../../templates/ProductTopSection";
const ProductBanners = ({ productDetails }) => {
  return (
    <section className={Styles.pageBanner}>
      <Nav />
      <div className={Styles.pageBannerText}>
        <section className={Styles.titleMeta}>
          <div className={Styles.titleMetaInner}>
            <h1>{productDetails.name}</h1>
            <div className={Styles.metaContainer}>
              <ProductTags productDetails={productDetails} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductBanners;
