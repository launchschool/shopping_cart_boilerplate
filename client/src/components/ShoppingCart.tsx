import type {CartItem} from "../types/CartItem";

interface ShoppingCartProps {
  cartItems: CartItem[];
}

const ShoppingCart = ({cartItems}: ShoppingCartProps) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0
      ? (<>
        <p>Your cart is empty</p>
        </>)
      : (<>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(cartItem => (
            <tr key={cartItem._id}>
              <td>{cartItem.title}</td>
              <td>{cartItem.quantity}</td>
              <td>${cartItem.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">Total: ${cartItems.reduce((total, cartItem) => 
              (total + cartItem.price * cartItem.quantity), 0)}</td>
          </tr>
        </tfoot>
      </table>
      </>)}
      <div className="checkout-button">
        <button className="checkout" disabled={cartItems.length === 0}>Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;