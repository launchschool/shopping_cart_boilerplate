import React from "react";
import './App.css';
import { mockCart, mockProducts } from './mockData/data';
import ShoppingCart from './components/ShoppingCart';
import ProductList from "./components/ProductList";

function App() {

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <ShoppingCart cartItems={mockCart}/>
      </header>

      <main>
        <ProductList products={mockProducts}/>
        <p>
          <button className="add-product-button">Add A Product</button>
        </p>
      </main>
    </div>
  )
}

export default App
