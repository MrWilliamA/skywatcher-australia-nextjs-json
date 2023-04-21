import Styles from "../../../styles/productCard.module.css";
import Link from "next/link";
import ProductFeaturedImage from "../../products/ProductFeaturedImage";
import LearnMore from "@/components/buttons/LearnMore";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const productLink = `/products/${product.url}`;
  const name = product.name.replace("Sky-Watcher ", "");

  return (
    <article className={Styles.card}>
      <div className={Styles.imageContainer}>
        <Link href={productLink}>
          <ProductFeaturedImage
            src={product.images[0]}
            fallbackSrc={"/images/products/missing-image.svg"}
            alt={product.name}
            width="0"
            height="0"
            sizes="300px"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <div className={Styles.text}>
        <h3>{name}</h3>
        <LearnMore href={productLink} />
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
