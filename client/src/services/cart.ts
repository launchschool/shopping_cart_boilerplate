import axios from "axios";
import type { NewProduct } from "../types/"

export const getProducts = async () => {
  return await axios.get("/api/products");
}

export const addProduct = async (product: NewProduct) => {
  return await axios.post("/api/products", product);
}

export const updateProduct = async (id: string, product: NewProduct) => {
  return await axios.put(`/api/products/${id}`, product);
}

export const deleteProduct = async (id: string) => {
  return await axios.delete(`/api/products/${id}`);
}

export const getCartItems = async () => {
  return await axios.get("/api/cart");
}

export const deleteCartItems = async () => {
  return await axios.post("/api/checkout");
}

export const addCartItem = async (id: string) => {
  return await axios.post("/api/add-to-cart", id);
}
