import React from "react";
import './App.css';
import { mockCart, mockProducts } from './mockData/data';
import type {Product} from "./types/Product";
import type {CartItem} from "./types/CartItem";
import ShoppingCart from './components/ShoppingCart';
import ProductList from "./components/ProductList";
import ToggleableAddForm from "./components/ToggleableAddForm";

function App() {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [productList, setProductList] = React.useState<Product[]>([]);

  React.useEffect(() => {
    setCart(mockCart);
    setProductList(mockProducts);
  }, [])

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart cartItems={cart}/>
      </header>

      <main>
        <ProductList products={productList}/>
        <ToggleableAddForm />
      </main>
    </div>
  )
}

export default App
