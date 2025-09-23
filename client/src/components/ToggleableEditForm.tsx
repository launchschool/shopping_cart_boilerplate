import React from "react";
import type {Product as ProductType} from "../types/Product";
import EditProductForm from "./EditProductForm";
import EditProductButton from "./EditProductButton";

interface ProductProps {
  product: ProductType;
}

const ToggleableEditForm = ({product}: ProductProps) => {
  const [isClickedEditForm, setIsClickedEditForm] = React.useState<boolean>(false);
  
  return (
    <>
      {isClickedEditForm
      ? <EditProductForm product={product} setIsClickedEditForm={setIsClickedEditForm} />
      : <EditProductButton setIsClickedEditForm={setIsClickedEditForm} />
      }
    </>
  )
}

export default ToggleableEditForm;