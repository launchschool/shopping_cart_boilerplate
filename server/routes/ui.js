const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
  console.log("in ui");
  res.sendFile(path.join(__dirname, "../assets/ui/index.html"));
});

router.get("/page_with_add_form", (req, res, next) => {
  console.log("here");
  res.sendFile(path.join(__dirname, "../assets/ui/page_with_add_form.html"));
});

router.get("/page_with_edit_form", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../assets/ui/page_with_edit_form.html"));
});

router.get("/page_without_cart_items", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../assets/ui/page_without_cart_items.html")
  );
});

module.exports = router;
