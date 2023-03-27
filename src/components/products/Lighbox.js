import Styles from "../../styles/lightBox.module.css";
import ProductFeaturedImage from "./ProductFeaturedImage";
import ImageWithFallback from "./ImageWithFallback";
import { useState } from "react";

const Lighbox = ({ handlelightbox, product }) => {
  const [featuredImage, setFeaturedImage] = useState(product.images[0]);

  const handleImageClick = (key) => {
    setFeaturedImage((prevFeaturedImage) => product.images[key]);
  };

  return (
    <section className={Styles.lightbox}>
      <div className={Styles.close} onClick={handlelightbox}>
        CLOSE
      </div>
      <section className={Styles.container}>
        <article className={Styles.featured}>
          <ProductFeaturedImage
            key={featuredImage}
            src={featuredImage}
            fallbackSrc={"/images/products/missing-image.svg"}
            alt={product.name}
            width="0"
            height="0"
            sizes="100%"
            style={{ width: "auto", height: "auto" }}
          />
        </article>
        <article className={Styles.gallery}>
          {product.images.map((image, key) => {
            return (
              <div key={key} onClick={() => handleImageClick(key)}>
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
      </section>
    </section>
  );
};

export default Lighbox;
