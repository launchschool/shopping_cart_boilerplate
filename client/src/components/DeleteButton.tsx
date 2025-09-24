import { deleteProduct } from "../services/cart";

interface DeleteButtonProps {
  id: string;
  fetchProductList: () => Promise<void>;
}

const DeleteButton = ({id, fetchProductList}: DeleteButtonProps) => {
  const handleClick = async () => {
    try {
      await deleteProduct(id);
      await fetchProductList();
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <button className="delete-button" onClick={handleClick}><span>X</span></button>
  )
}

export default DeleteButton;