import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "../../styles/productPage.module.css";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;

  const galleryArray = [
    `/images/products/${props.sku}.tag.0.png`,
    `/images/products/${props.sku}.tag.1.png`,
    `/images/products/${props.sku}.tag.2.png`,
    `/images/products/${props.sku}.tag.3.png`,
    `/images/products/${props.sku}.tag.4.png`,
  ];

  function GalleryItem({ photo, ...rest }) {
    const [imageExists, setImageExists] = useState(true);

    useEffect(() => {
      async function checkImageExists() {
        try {
          const response = await fetch(photo);
          setImageExists(response.status !== 404);
        } catch (error) {
          setImageExists(false);
        }
      }
      checkImageExists();
    }, [photo]);

    return (
      <>
        {imageExists && (
          <div className={Styles.galleryContainer}>
            <Image {...rest} src={photo} alt="" width={100} height={100} />
          </div>
        )}
      </>
    );
  }

  return galleryArray.map((photo, key) => {
    return <GalleryItem key={key} photo={photo} {...rest} />;
  });
};
export default ImageWithFallback;
