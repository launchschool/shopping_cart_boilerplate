import { checkout } from "../services/cart";

interface CheckoutButtonProps {
  cartItemsLength: number;
  fetchCartItems: () => Promise<void>;
}

const CheckoutButton = ({cartItemsLength, fetchCartItems}: CheckoutButtonProps) => {
  const handleClick = async () => {
    try {
      await checkout();
      await fetchCartItems();
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