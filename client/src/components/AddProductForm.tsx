import React from "react";
import type { NewProduct } from "../types/";

interface AddProductFormProps {
  setIsClickedAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  onAddProductForm: (product: NewProduct) => void;
}


const AddProductForm = ({setIsClickedAddForm, onAddProductForm}: AddProductFormProps) => {
  const emptyProduct = {
    title: "",
    quantity: -1,
    price: -1
  }
  const [values, setValues] = React.useState(emptyProduct);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await onAddProductForm(values);
      setValues(emptyProduct);
    } catch (error: unknown) {
      console.log(error)
    }
    
  }

  return (
    <div className="add-form">
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={values.title}
            onChange={(e) => setValues({...values, title: e.target.value})}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={values.price < 0 ? "" : values.price}
            onChange={(e) => setValues({...values, price: Number(e.target.value)})}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={values.quantity < 0 ? "" : values.quantity}
            onChange={(e) => setValues({...values, quantity: Number(e.target.value)})}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit" onClick={handleSubmit}>Add</button>
          <button type="button" onClick={() => setIsClickedAddForm(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;