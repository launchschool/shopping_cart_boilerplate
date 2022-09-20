import Product from "./Product";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} {...product}></Product>
      ))}
    </div>
  );
};

export default ProductListing;
