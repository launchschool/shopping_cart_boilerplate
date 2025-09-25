import { deleteProduct } from "../services/cart";
import type {Product} from "../types/"

interface DeleteButtonProps {
  id: string;
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const DeleteButton = ({id, setProductList}: DeleteButtonProps) => {
  const handleClick = async () => {
    try {
      await deleteProduct(id);
      setProductList(previousProducts => {
        return previousProducts.filter(previousProduct => previousProduct._id !== id);
      });
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <button className="delete-button" onClick={handleClick}><span>X</span></button>
  )
}

export default DeleteButton;