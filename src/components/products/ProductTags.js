import Link from "next/link";
import React from "react";

const ProductTags = ({ productDetails, seperator }) => {
  return (
    <>
      {productDetails.tags.map((tag) => {
        const cleanedTag = tag.replace(" ", "-").toLowerCase();

        return (
          <React.Fragment key={tag}>
            {tag.includes("Dobsonian") ? (
              <Link href={`/categories/dobsonians`}>{tag}</Link>
            ) : (
              <Link href={`/categories/${cleanedTag}`}>{tag}</Link>
            )}
            {seperator && seperator}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ProductTags;
