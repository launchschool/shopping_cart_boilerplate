import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductListing from "./ProductListing";
import AddProductForm from "./AddProductForm";
import Cart from "./Cart";

interface productType {
  _id: string, 
  title: string, 
  price: number, 
  quantity: number
}

interface cartItems extends productType {
  productID: string
}

type State<T> = [T, Dispatch<SetStateAction<T>>];

const App = () : React.FC => {
  const [products, setProducts]: State<productType[]>= useState([]);
  const [cartItems, setCartItems]: State<cartItems[]> = useState([]);

  useEffect(() => {
    const getAndSetProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const products = await response.json();
        setProducts(products);
      } catch (e) {
        console.error(e);
      }
    };

    getAndSetProducts();
  }, []);

  useEffect(() => {
    const getAndSetCart = async () => {
      try {
        const response = await fetch("/api/cart");
        const cartItemsRes = await response.json();
        setCartItems(cartItemsRes);
      } catch (e) {
        console.error(e);
      }
    };

    getAndSetCart();
  }, []);

  const handleUpdateProductSubmit = async ({ _id, title, price, quantity }) => {
    try {
      const response = await fetch(`/api/products/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          quantity,
        }),
      });

      const updatedProduct = await response.json();
      setProducts(
        products.map((product) =>
          product._id !== _id ? product : updatedProduct
        )
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <main>
        <ProductListing
          products={products}
          setProducts={setProducts}
          onUpdateProductSubmit={handleUpdateProductSubmit}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <AddProductForm products={products} setProducts={setProducts} />
      </main>
    </div>
  );
};

export default App;
