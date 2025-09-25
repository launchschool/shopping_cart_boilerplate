import React from "react";
import AddProductForm from "./AddProductForm";
import AddProductButton from "./AddProductButton";
import type { Product } from "../types"

interface ToggleableAddFormProductProps {
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ToggleableAddProductForm = ({setProductList}: ToggleableAddFormProductProps) => {
  const [isClickedAddForm, setIsClickedAddForm] = React.useState<boolean>(false);

  return (
    <>
      {isClickedAddForm 
      ? <AddProductForm setIsClickedAddForm={setIsClickedAddForm} setProductList={setProductList}/>
      : <AddProductButton setIsClickedAddForm={setIsClickedAddForm} />}
    </>
  )
}

export default ToggleableAddProductForm;