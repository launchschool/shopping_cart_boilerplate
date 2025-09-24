import React from "react";
import type {Product as ProductType} from "../types";
import EditProductForm from "./EditProductForm";
import EditProductButton from "./EditProductButton";

interface ProductProps {
  product: ProductType;
  fetchProductList: () => Promise<void>;
}

const ToggleableEditForm = ({product, fetchProductList}: ProductProps) => {
  const [isClickedEditForm, setIsClickedEditForm] = React.useState<boolean>(false);
  
  return (
    <>
      {isClickedEditForm
      ? <EditProductForm product={product} setIsClickedEditForm={setIsClickedEditForm} fetchProductList={fetchProductList}/>
      : <EditProductButton setIsClickedEditForm={setIsClickedEditForm} />
      }
    </>
  )
}

export default ToggleableEditForm;