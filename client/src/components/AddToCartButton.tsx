import { addCartItem } from "../services/cart";
import type {Product} from "../types";

interface AddToCartButtonProps {
  product: Product;
  fetchCartItems: () => Promise<void>;
}

const AddToCartButton = ({product, fetchCartItems}: AddToCartButtonProps) => {
  const handleClick = async () => {
    try {
      await addCartItem({productId: product._id});
      await fetchCartItems();
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <button className="add-to-cart" disabled={product.quantity === 0} onClick={handleClick}>Add to Cart</button>
  );
}

export default AddToCartButton;