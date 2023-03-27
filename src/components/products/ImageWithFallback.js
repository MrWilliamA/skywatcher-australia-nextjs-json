import Image from "next/image";
import Styles from "../../styles/productPage.module.css";
import { useState } from "react";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, handleClick = null, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt=""
      width={100}
      height={100}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
