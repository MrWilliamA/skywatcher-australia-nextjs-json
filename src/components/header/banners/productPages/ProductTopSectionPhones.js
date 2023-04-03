import ProductFeaturedImage from "../../../products/ProductFeaturedImage";
import Styles from "../../../../styles/productPage.module.css";
import ImageWithFallback from "../../../products/ImageWithFallback";

const ProductTopSectionPhones = ({ product, handlelightbox }) => {
  return (
    <>
      <article className={Styles.imageContainerPhones}>
        <ProductFeaturedImage
          src={product.images[0]}
          fallbackSrc={"/images/products/missing-image.svg"}
          alt={product.name}
          width="0"
          height="0"
          sizes="100%"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "44vh",
          }}
          onClick={handlelightbox}
        />
        <article
          className={Styles.detailsContainerPhones}
          onClick={handlelightbox}
        >
          {product.images.map((image, key) => {
            return (
              <div key={key}>
                <ImageWithFallback
                  src={image}
                  fallbackSrc={"/images/products/missing-image.svg"}
                  alt={product.name}
                  sku={product.sku}
                  type="gallery"
                  width="0"
                  height="0"
                  sizes="80px"
                  style={{ width: "auto", height: "80px" }}
                />
              </div>
            );
          })}
        </article>
      </article>
    </>
  );
};

export default ProductTopSectionPhones;
