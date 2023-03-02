import data from "../../../productData/products.json";

const index = () => {
  console.log(data);

  const products = [...data][0].products;

  return (
    <>
      {products.map((product, key) => (
        <div key={key} style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
};

export default index;
