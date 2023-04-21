import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const ImageWithFallback = ({ src, fallbackSrc, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
};

export default ImageWithFallback;
