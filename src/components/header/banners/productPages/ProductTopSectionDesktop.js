import Styles from "../../../../styles/productPage.module.css";
import ImageWithFallback from "../../../products/ImageWithFallback";
import ProductFeaturedImage from "../../../products/ProductFeaturedImage";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

const ProductTopSection = ({ product, handlelightbox, nextProduct }) => {
  const router = useRouter();

  return (
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
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "42vh",
              maxWidth: "40vw",
            }}
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
  );
};

export default ProductTopSection;
