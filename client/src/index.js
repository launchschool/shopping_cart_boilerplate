import React from 'react';
import ReactDOM from 'react-dom/client';
import productData from '../mockData/data';

const Product = ({title, price, quantity }) => {

  const h3title = React.createElement("h3", {key: 1}, title);
  const pPrice = React.createElement("p", {key: 2}, `$${price}`);
  const pQuantity = React.createElement("p", {key: 3}, `${quantity} left in stock`)
  const aAddToCart = React.createElement("a", { className: "button add-to-cart", key: 4 }, "Add to Cart");
  const aEdit = React.createElement("a", { className: "button edit", key: 5 }, "Edit")
  const divActions = React.createElement("div", { className: "actions product-actions", key: 6 }, [
    aAddToCart,
    aEdit
  ])

  return React.createElement('div', {className: "product-details" }, [
    h3title,
    pPrice,
    pQuantity,
    divActions,
  ])
}

const ProductListing = () => {
  const divTitle = React.createElement('h2', {key: '-1'}, "Products");
  const productArray = productData.map(data => {
    return React.createElement(Product, {...data, key: data.id}, null)
  });
  return React.createElement("div", {className: "product-listing"}, [divTitle, ...productArray])
}

const divAddForm = () => {

  const pAddProduct = React.createElement("p", {key: 1}, React.createElement("a", { className: "button add-product-button" }, "Add A Product"));
  const h3AddProduct = React.createElement("h3", {key: 2}, "Add Product");
  const form = React.createElement("form", {key: 3}, [
    React.createElement("div", { key: 0, className: "input-group" }, [
      React.createElement("label", { key: 1, htmlFor: "product-name" }, "Product Name"),
      React.createElement("input", { type: "text", id: "product-name" })
    ]),
    React.createElement("div", { key: 4, className: "input-group" }, [
      React.createElement("label", { key: 5, htmlFor: "product-price" }, "Product Price"),
      React.createElement("input", { type: "text", id: "product-price" })
    ]),
    React.createElement("div", { key: 5, className: "input-group" }, [
      React.createElement("label", { key: 5, htmlFor: "product-quantity" }, "Product Quantity"),
      React.createElement("input", { type: "text", id: "product-quantity" }),
    ]),
  ])

  return React.createElement("div", { className: "add-form" }, [
    pAddProduct,
    h3AddProduct,
    form,
  ]);
}

const App = () => {
  return React.createElement("main", null, [
    React.createElement(ProductListing, {key: 0}, null),
    React.createElement(divAddForm, {key: 1}, null)
  ]
);
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());