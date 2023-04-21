import Styles from "../../../styles/productCard.module.css";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductGrid = ({ products }) => {
  return (
    <section className={Styles.container}>
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </section>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductGrid;
