interface AddProductButtonProps {
  setIsClickedAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProductButton = ({setIsClickedAddForm}: AddProductButtonProps) => {
  return (
    <p>
      <button className="add-product-button" onClick={() => setIsClickedAddForm(true)}>Add A Product</button>
    </p>
  )
}

export default AddProductButton;