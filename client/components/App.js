import React, { useEffect, useState } from "react";
import productData from "../mockData/data";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <main>
      <ProductListing products={products} />
      <AddProductForm />
    </main>
  );
};

export default App;
