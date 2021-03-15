import React, { useState, useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import AddProductForm from "./AddProductForm";
import data from "../lib/data.js";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div id="app">
      "hello?!"
      <Header />
      <main>
        <Products products={products} />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
