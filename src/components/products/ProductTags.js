import Link from "next/link";
import React from "react";

const ProductTags = ({ productDetails, seperator }) => {
  const tagElements = productDetails.tags.map((tag) => {
    const cleanedTag = tag.replace(" ", "-").toLowerCase();

    if (tag.includes("Dobsonian")) {
      return (
        <React.Fragment key={tag}>
          <Link href={`/categories/dobsonians`}>{tag}</Link>
          {seperator && seperator}
        </React.Fragment>
      );
    } else if (tag.includes("EQ") || tag.includes("AZ")) {
      return (
        <React.Fragment key={tag}>
          <Link href={`/categories/mounts/${cleanedTag}`} key={tag}>
            {tag}
          </Link>
          {seperator && seperator}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={tag}>
          <Link href={`/categories/${cleanedTag}`} key={tag}>
            {tag}
          </Link>
          {seperator && seperator}
        </React.Fragment>
      );
    }
  });
  return tagElements;
};

export default ProductTags;
