import React from "react";
import './App.css';
import type { Product, CartItem } from "./types";
import ShoppingCart from './components/ShoppingCart';
import ProductList from "./components/ProductList";
import ToggleableAddProductForm from "./components/ToggleableAddProductForm";
import { getCartItems, getProducts } from "./services/cart";

function App() {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [productList, setProductList] = React.useState<Product[]>([]);

  React.useEffect(() => {
    fetchProductList();
    fetchCartItems();
  }, [])

  const fetchProductList = async (): Promise<void> => {
    try {
      const {data} = await getProducts();
      setProductList(data);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  const fetchCartItems = async (): Promise<void> => {
    try {
      const {data} = await getCartItems();
      setCart(data);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart cartItems={cart} fetchCartItems={fetchCartItems}/>
      </header>

      <main>
        <ProductList products={productList} fetchProductList={fetchProductList} fetchCartItems={fetchCartItems}/>
        <ToggleableAddProductForm fetchProductList={fetchProductList}/>
      </main>
    </div>
  )
}

export default App
