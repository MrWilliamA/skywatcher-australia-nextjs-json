import { useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const handleFallback = () => {
    if (fallbackIndex < fallbackSrc.length) {
      setImgSrc(fallbackSrc[fallbackIndex]);
      setFallbackIndex(fallbackIndex + 1);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...rest} src={imgSrc} onError={handleFallback} />
  );
};
export default ImageWithFallback;
