import axios from "axios";
import { productSchema, cartItemSchema, type NewProduct } from "../types/"
import { z } from "zod";

const addCartItemResponseSchema = z.object({
  product: productSchema,
  item: cartItemSchema
})

export const getProducts = async () => {
  return await axios.get("/api/products");
}

export const addProduct = async (product: NewProduct) => {
  const { data } = await axios.post("/api/products", product);
  return productSchema.parse(data);
}

export const updateProduct = async (id: string, product: NewProduct) => {
  const { data } = await axios.put(`/api/products/${id}`, product);
  return productSchema.parse(data);
}

export const deleteProduct = async (id: string) => {
  return await axios.delete(`/api/products/${id}`);
}

export const getCartItems = async () => {
  return await axios.get("/api/cart");
}

export const checkout = async () => {
  return await axios.post("/api/checkout");
}

export const addCartItem = async ({productId: productId}: {productId: string}) => {
  const { data } = await axios.post("/api/add-to-cart", {productId});
  return addCartItemResponseSchema.parse(data);
}
