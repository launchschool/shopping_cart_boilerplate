interface EditProductButtonProps {
  setIsClickedEditForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProductButton = ({setIsClickedEditForm}: EditProductButtonProps) => {
  return (
    <p>
      <button className="edit" onClick={() => setIsClickedEditForm(true)}>Edit A Product</button>
    </p>
  )
}

export default EditProductButton;