import Nav from "../navigation/Nav";
import Styles from "../../../styles/home.module.css";

const homebanner = ({
  productsHovered,
  setProductsHovered,
  kBHovered,
  setKBHovered,
}) => {
  return (
    <>
      <section className={Styles.pageBanner}>
        <div
          className={`${Styles.hoverShade} ${
            productsHovered || kBHovered ? Styles.hovered : ""
          }`}
        ></div>
        <div className={Styles.galaxyContainer}>
          <div className={Styles.galaxy}></div>
        </div>
        <Nav
          productsHovered={productsHovered}
          setProductsHovered={setProductsHovered}
          kBHovered={kBHovered}
          setKBHovered={setKBHovered}
        />
        <div className={Styles.h1Container}>
          <h1>Sky-Watcher Australia</h1>
        </div>
      </section>
    </>
  );
};

export default homebanner;
