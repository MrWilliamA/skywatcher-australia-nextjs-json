import Styles from "../../../styles/productPage.module.css";
import Nav from "../navigation/Nav";
import ProductTags from "@/components/products/ProductTags";

const ProductBanners = ({ productDetails }) => {
  return (
    <section className={Styles.pageBanner}>
      <Nav />
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
