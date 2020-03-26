const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/products", (req, res, next) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch(next);
});

router.post("/products", (req, res, next) => {
  const { title, price, quantity } = req.body;
  Product.create({ title, price, quantity })
    .then((product) => res.json(product))
    .catch((err) => next(err));
});

router.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const { title, price, quantity } = req.body;
  Product.findById(productId)
    .then((product) => {
      return Product.findByIdAndUpdate(
        productId,
        {
          title: title || product.title,
          price: price || product.price,
          quantity: quantity || product.quantity,
        },
        { new: true }
      );
    })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    });
});

router.delete("/products/:id", (req, res, next) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId)
    .then(() => {
      res.json();
    })
    .catch((err) => next(err));
});

module.exports = router;
