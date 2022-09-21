import React, { useEffect, useState } from "react";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import Cart from "./Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const getAndSetProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const products = await response.json();
        setProducts(products);
      } catch (e) {
        console.error(e)
      }
    }

    getAndSetProducts()
  }, []);

  const handleUpdateProductSubmit = async ({_id, title, price, quantity}) => {
    try {
      const response = await fetch(`/api/products/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          price,
          quantity
        })
      })

      const updatedProduct = await response.json();
      setProducts(products.map( product => product._id !== _id ? product : updatedProduct))
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div id="app">
        <Cart cartItems={cartItems}/>
      <main>
        <ProductListing products={products} setProducts={setProducts} onUpdateProductSubmit={handleUpdateProductSubmit}/>
        <AddProductForm products={products} setProducts={setProducts}/>
      </main>
    </div>


  );
};

export default App;
