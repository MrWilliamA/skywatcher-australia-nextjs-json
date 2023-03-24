import { useState, useEffect } from "react";
import Image from "next/image";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [gallery, setGallery] = useState([]);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const handleFallback = () => {
    if (fallbackIndex < fallbackSrc.length) {
      setImgSrc(fallbackSrc[fallbackIndex]);
      setFallbackIndex(fallbackIndex + 1);
    }
  };

  const galleryArray = [
    `/images/products/${props.sku}.tag.0.png`,
    `/images/products/${props.sku}.tag.1.png`,
    `/images/products/${props.sku}.tag.2.png`,
    `/images/products/${props.sku}.tag.3.png`,
    `/images/products/${props.sku}.tag.4.png`,
  ];

  if (props.type === "gallery") {
    console.log("this is gallery");
    return galleryArray.map((photo, key) => {
      return (
        <div key={key}>
          {photo && (
            <Image
              key={key}
              {...rest}
              src={photo}
              alt=""
              onError={handleFallback}
            />
          )}
        </div>
      );
    });
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...rest} src={imgSrc} onError={handleFallback} />
  );
};
export default ImageWithFallback;
