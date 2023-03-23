import Styles from "../../../styles/productPage.module.css";
import Nav from "../navigation/Nav";

const ProductBanners = ({ productDetails }) => {
  return (
    <section className={Styles.pageBanner}>
      <Nav />
      <div className={Styles.pageBannerText}>
        <h1>{productDetails.name}</h1>
        <div className={Styles.metaContainer}>
          {productDetails.tags.map((tag, key) => {
            return <p key={key}>{tag} </p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductBanners;
