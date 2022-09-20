import { useState } from "react";

const AddProductForm = () => {
  const [formHidden, setFormHidden] = useState(true);

  const handleFormToggleVisibleClick = () => {
    setFormHidden(!formHidden);
  };

  return (
    <div className={formHidden ? "add-form" : "add-form.visible"}>
      <p>
        <a
          className="button add-product-button"
          onClick={handleFormToggleVisibleClick}
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Product Price</label>
          <input type="text" id="product-name" />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" />
        </div>
        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button" onClick={handleFormToggleVisibleClick}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
