const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const CartItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    productId: {
      type: ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const CartItem = mongoose.model("cartItem", CartItemSchema);

module.exports = CartItem;
