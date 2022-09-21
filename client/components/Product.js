const Product = ({ title, price, quantity }) => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button">
          <span>X</span>
        </a>
      </div>
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value={title}></input>
          </div>
          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value={price}></input>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={quantity}></input>
          </div>

          <div className="actions form-actions">
            <a className="button">Update</a>
            <a className="button">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
