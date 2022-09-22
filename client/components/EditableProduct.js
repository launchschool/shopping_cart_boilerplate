import { useState } from "react";

const EditableProduct = ({
  _id,
  title,
  price,
  quantity,
  products,
  setProducts,
  cartItems,
  setCartItems,
  onUpdateProductSubmit,
}) => {
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleEditButtonLinkClick = (event) => {
    event.preventDefault();
    setEditFormVisible(!editFormVisible);
  };

  const handleUpdateSubmit = async () => {
    await onUpdateProductSubmit({
      _id,
      title: newTitle,
      price: newPrice,
      quantity: newQuantity,
    });
    setEditFormVisible(false);
  };

  const handleDeleteClick = async () => {
    try {
      await fetch(`/api/products/${_id}`, {
        method: "DELETE",
      });

      setProducts(products.filter((product) => product._id != _id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await fetch(`/api/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: _id }),
      });
      console.log(JSON.stringify(_id));
      console.log(response);
      const { product: newProduct, item: newCartItem } = await response.json();

      setProducts(
        products.map((product) => (product._id !== _id ? product : newProduct))
      );

      if (cartItems.find((items) => items._id === newCartItem._id)) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.productId !== _id ? cartItem : newCartItem
          )
        );
      } else {
        setCartItems(cartItems.concat(newCartItem));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a onClick={handleAddToCart} className="button add-to-cart">
            Add to Cart
          </a>
          <a onClick={handleEditButtonLinkClick} className="button edit">
            Edit
          </a>
        </div>
        <a className="delete-button" onClick={handleDeleteClick}>
          <span>X</span>
        </a>
      </div>
      {editFormVisible ? (
        <div className="edit-form">
          <h3>Edit Product</h3>
          <form>
            <div className="input-group">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="product-price">Price</label>
              <input
                type="number"
                id="product-price"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              ></input>
            </div>

            <div className="input-group">
              <label htmlFor="product-quantity">Quantity</label>
              <input
                type="number"
                id="product-quantity"
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
              ></input>
            </div>

            <div className="actions form-actions">
              <a onClick={handleUpdateSubmit} className="button">
                Update
              </a>
              <a onClick={() => setEditFormVisible(false)} className="button">
                Cancel
              </a>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default EditableProduct;
