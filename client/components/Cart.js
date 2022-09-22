import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  const cartTotal = cartItems.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  ).toFixed(2);

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          )}
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} {...cartItem} />
          ))}
          <tr colSpan="3" className="total">
            Total: ${cartTotal}
          </tr>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
    </header>
  );
};

export default Cart;
