import React from "react";

const AddProductForm = () => {
  return (
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value="" />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value="" />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value="" />
        </div>

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
