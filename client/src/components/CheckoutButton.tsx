import { checkout } from "../services/cart";
import type {CartItem} from "../types";

interface CheckoutButtonProps {
  cartItemsLength: number;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CheckoutButton = ({cartItemsLength, setCart}: CheckoutButtonProps) => {
  const handleClick = async () => {
    try {
      await checkout();
      setCart([]);
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <div className="checkout-button">
      <button className="checkout" disabled={cartItemsLength === 0} onClick={handleClick}>Checkout</button>
    </div>
  );
}

export default CheckoutButton;