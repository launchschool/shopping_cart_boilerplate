import CartItem from "./CartItem";

const Cart = ({ cartItems, setCartItems }) => {
  const cartTotal = cartItems
    .reduce((acc, current) => acc + current.price * current.quantity, 0)
    .toFixed(2);

  const handleCheckoutClick = async (event) => {
    event.preventDefault();
    await fetch("/api/checkout", {
      method: "POST",
    });
    setCartItems([]);
  };

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td>Your cart is empty</td>
              </tr>
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
              <td>Total: ${cartTotal}</td>
            </tr>
          </tbody>
        </table>
        <a onClick={handleCheckoutClick} className="button checkout">
          Checkout
        </a>
      </div>
    </header>
  );
};

export default Cart;
