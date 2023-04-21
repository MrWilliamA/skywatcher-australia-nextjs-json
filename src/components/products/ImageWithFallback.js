import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

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

ImageWithFallback.propTypes = {
  props: PropTypes.object,
};

export default ImageWithFallback;
