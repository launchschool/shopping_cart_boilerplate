const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const CartItem = require("../models/cartItem");

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
          price: price === undefined ? product.price : price,
          quantity: quantity === undefined ? product.quantity : quantity,
        },
        { new: true }
      );
    })
    .then((updatedProduct) => {
      req.body.product = updatedProduct;
      return CartItem.findOneAndUpdate(
        { productId: updatedProduct._id },
        {
          title: updatedProduct.title,
          price: updatedProduct.price,
        },
        { new: true }
      );
    })
    .then((_) => {
      res.json(req.body.product);
    });
});

router.delete("/products/:id", (req, res, next) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId)
    .then((_) => {
      return CartItem.deleteMany({ productId });
    })
    .then(() => {
      res.json();
    })
    .catch((err) => next(err));
});

router.post("/cart", (req, res) => {
  const { productId, product } = req.body;

  Product.findByIdAndUpdate(
    productId,
    {
      quantity: product.quantity,
    },
    { new: true }
  ).then((updatedProduct) => {
    CartItem.findOne({
      productId: productId,
    })
      .then((item) => {
        if (!item) {
          return CartItem.create({
            title: updatedProduct.title,
            price: updatedProduct.price,
            quantity: 1,
            productId,
          });
        } else {
          return CartItem.findOneAndUpdate(
            { productId: updatedProduct._id },
            {
              quantity: item.quantity + 1,
            },
            { new: true }
          );
        }
      })
      .then((item) => {
        res.json(item);
      });
  });
});

router.get("/checkout", (req, res) => {
  CartItem.deleteMany({}).then(() => {
    res.json();
  });
});

router.get("/cart", (req, res, next) => {
  CartItem.find({})
    .then((cartItems) => res.json(cartItems))
    .catch(next);
});

module.exports = router;
