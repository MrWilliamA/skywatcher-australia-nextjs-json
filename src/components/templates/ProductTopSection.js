import Styles from "../../styles/productPage.module.css";
import ImageWithFallback from "../products/ImageWithFallback";
import ProductFeaturedImage from "../products/ProductFeaturedImage";

const ProductTopSection = ({ product }) => {
  return (
    <section className={Styles.top}>
      <section className={Styles.innerContainer}>
        <article className={Styles.imageContainer}>
          <ProductFeaturedImage
            src={`/images/products/${product.sku}.tag.0.png`}
            fallbackSrc={[
              `/images/products/${product.sku}.tag.0.jpg`,
              "/images/products/missing-image.svg",
            ]}
            alt={product.name}
            width="0"
            height="0"
            sizes="300px"
            style={{ width: "auto", height: "45vh" }}
          />
        </article>
        <article className={Styles.detailsContainer}>
          <ImageWithFallback
            src={`/images/products/${product.sku}.tag.0.png`}
            fallbackSrc={[
              `/images/products/${product.sku}.tag.0.jpg`,
              "/images/products/missing-image.svg",
            ]}
            alt={product.name}
            sku={product.sku}
            type="gallery"
            width="0"
            height="0"
            sizes="100px"
            style={{ width: "auto", height: "100px" }}
          />
        </article>
      </section>
    </section>
  );
};

export default ProductTopSection;
