import React from "react";
import AddProductForm from "./AddProductForm";
import AddProductButton from "./AddProductButton";
import { addProduct } from "../services/cart";
import type { NewProduct } from "../types/"

interface ToggleableAddFormProps {
  fetchProductList: () => Promise<void>;
}

const ToggleableAddForm = ({fetchProductList}: ToggleableAddFormProps) => {
  const [isClickedAddForm, setIsClickedAddForm] = React.useState<boolean>(false);

  const handleAddProductForm = async (product: NewProduct) => {
    try {
      await addProduct(product);
      await fetchProductList();
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <>
      {isClickedAddForm 
      ? <AddProductForm setIsClickedAddForm={setIsClickedAddForm} onAddProductForm={handleAddProductForm}/>
      : <AddProductButton setIsClickedAddForm={setIsClickedAddForm} />}
    </>
  )
}

export default ToggleableAddForm;