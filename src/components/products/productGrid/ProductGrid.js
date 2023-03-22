import Styles from "../../../styles/productCard.module.css";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section className={Styles.container}>
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
