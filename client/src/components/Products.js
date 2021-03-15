import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  console.log("products props", products);
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
