import Styles from "../../../styles/productCard.module.css";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ProductFeaturedImage from "../../products/ProductFeaturedImage";

const ProductCard = ({ product }) => {
  const productLink = `/products/${product.url}`;
  const name = product.name.replace("Sky-Watcher ", "");

  return (
    <article className={Styles.card}>
      <div className={Styles.imageContainer}>
        <Link href={productLink}>
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
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <h3>{name}</h3>
      <Link href={productLink} className={Styles.link}>
        Learn More <FaArrowAltCircleRight />
      </Link>
    </article>
  );
};

export default ProductCard;
