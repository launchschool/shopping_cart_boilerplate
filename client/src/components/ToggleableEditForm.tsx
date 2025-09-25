import React from "react";
import type {Product as ProductType} from "../types";
import EditProductForm from "./EditProductForm";
import EditProductButton from "./EditProductButton";

interface ProductProps {
  product: ProductType;
  setProductList: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const ToggleableEditForm = ({product, setProductList}: ProductProps) => {
  const [isClickedEditForm, setIsClickedEditForm] = React.useState<boolean>(false);
  
  return (
    <>
      {isClickedEditForm
      ? <EditProductForm product={product} setIsClickedEditForm={setIsClickedEditForm} setProductList={setProductList}/>
      : <EditProductButton setIsClickedEditForm={setIsClickedEditForm} />
      }
    </>
  )
}

export default ToggleableEditForm;