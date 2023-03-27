import Link from "next/link";
import React from "react";

const ProductTags = ({ productDetails, seperator }) => {
  return (
    <>
      {productDetails.tags.map((tag) => {
        return (
          <React.Fragment key={tag}>
            <Link href={`/products/cat/${tag.replace(" ", "-").toLowerCase()}`}>
              {tag}
            </Link>
            {seperator && seperator}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ProductTags;
