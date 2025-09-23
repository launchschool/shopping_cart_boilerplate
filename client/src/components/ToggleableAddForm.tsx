import React from "react";
import AddProductForm from "./AddProductForm";
import AddProductButton from "./AddProductButton";

const ToggleableAddForm = () => {
  const [isClickedAddForm, setIsClickedAddForm] = React.useState<boolean>(false);

  return (
    <>
      {isClickedAddForm 
      ? <AddProductForm setIsClickedAddForm={setIsClickedAddForm}/>
      : <AddProductButton setIsClickedAddForm={setIsClickedAddForm} />}
    </>
  )
}

export default ToggleableAddForm;