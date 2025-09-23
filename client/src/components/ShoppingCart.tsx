import type {CartItem} from "../types/Product";

interface ShoppingCartProps {
  cartItems: CartItem[];
}

const ShoppingCart = ({cartItems}: ShoppingCartProps) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length == 0
      ? (<>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>Checkout</button>
        </>)
      : (<>
        <table>
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
        </table>
        <p>Total: ${cartItems.reduce((total, cartItem) =>
          (total + cartItem.price * cartItem.quantity), 0)}
        </p>
        <button className="checkout">Checkout</button>
        </>)}
    </div>
  );
}

export default ShoppingCart;