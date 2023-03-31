import Styles from "../../styles/productPage.module.css";
import ImageWithFallback from "../products/ImageWithFallback";
import ProductFeaturedImage from "../products/ProductFeaturedImage";
import { useState } from "react";
import Lightbox from "../products/Lighbox";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

const ProductTopSection = ({ product, nextProduct }) => {
  const [lightbox, setLightbox] = useState(false);
  const router = useRouter();

  function handlelightbox() {
    setLightbox((lightbox) => !lightbox);
  }

  return (
    <>
      <section className={Styles.top}>
        <div className={Styles.back} onClick={() => router.back()}>
          <FaChevronLeft />
        </div>
        <div
          className={Styles.forward}
          onClick={() => router.push(window.location.assign(nextProduct.url))}
        >
          <FaChevronRight />
        </div>
        <section className={Styles.innerContainer}>
          <article className={Styles.imageContainer}>
            <ProductFeaturedImage
              src={product.images[0]}
              fallbackSrc={"/images/products/missing-image.svg"}
              alt={product.name}
              width="0"
              height="0"
              sizes="100%"
              style={{ width: "auto", height: "42vh" }}
              onClick={handlelightbox}
            />
          </article>
          <article className={Styles.detailsContainer} onClick={handlelightbox}>
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
        </section>
      </section>
      {lightbox && (
        <Lightbox handlelightbox={handlelightbox} product={product} />
      )}
    </>
  );
};

export default ProductTopSection;
