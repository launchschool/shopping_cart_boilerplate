import React from "react";
import type {Product as ProductType} from "../types";
import { updateProduct } from "../services/cart";

interface EditProductFormProps {
  product: ProductType;
  setIsClickedEditForm: React.Dispatch<React.SetStateAction<boolean>>;
  fetchProductList: () => Promise<void>;
}


const EditProductForm = ({product, setIsClickedEditForm, fetchProductList}: EditProductFormProps) => {
  const [values, setValues] = React.useState(product);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const {_id, ...newProduct} = values;
    await updateProduct(_id, newProduct);
    setIsClickedEditForm(false);
    await fetchProductList();
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={values.title}
            onChange={(e) => setValues({...values, title: e.target.value})}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={values.price <= 0 ? "" : values.price}
            onChange={(e) => setValues({...values, price: Number(e.target.value)})}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={values.quantity <= 0 ? "" : values.quantity}
            onChange={(e) => setValues({...values, quantity: Number(e.target.value)})}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={handleSubmit}>Update</button>
          <button type="button" onClick={() => setIsClickedEditForm(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;