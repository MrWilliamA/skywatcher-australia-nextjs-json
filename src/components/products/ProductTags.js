import Link from "next/link";

const ProductTags = ({ productDetails, seperator }) => {
  return (
    <>
      {productDetails.tags.map((tag, key) => {
        return (
          <>
            <Link
              key={key}
              href={`/products/cat/${tag.replace(" ", "-").toLowerCase()}`}
            >
              {tag}
            </Link>
            {seperator && seperator}
          </>
        );
      })}
    </>
  );
};

export default ProductTags;
