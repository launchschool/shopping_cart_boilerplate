import { useState } from "react";

const AddProductForm = () => {
  const [formHidden, setFormHidden] = useState(true);

  const handleAddProductClick = () => {
    setFormHidden(!formHidden);
  };

  return (
    <div className="add-form">
      <p hidden={!formHidden}>
        <a
          className="button add-product-button"
          onClick={handleAddProductClick}
        >
          Add A Product
        </a>
      </p>
      <h3 hidden={formHidden}>Add Product</h3>
      <form hidden={formHidden}>
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
          <a className="button" onClick={handleAddProductClick}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
