import { useState } from "react";

const AddProductForm = ({ products, setProducts }) => {
  const [formHidden, setFormHidden] = useState(true);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleFormToggleVisibleClick = () => {
    setFormHidden(!formHidden);
  };

  const handleAddProductClick = async () => {
    try {
      const newProduct = { title, price, quantity }

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });
  
      const addedProduct = await response.json();
      setTitle("");
      setPrice(0);
      setQuantity(0);
      setFormHidden(!formHidden);
      setProducts(products.concat(addedProduct));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={formHidden ? "add-form" : "add-form visible"}>
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
          <input type="text" id="product-name" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Product Price</label>
          <input type="number" id="product-name" onChange={(e) => setPrice(e.target.value)} value={price}/>
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="number" id="product-quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
        </div>
        <div className="actions form-actions">
          <a className="button" onClick={handleAddProductClick}>Add</a>
          <a className="button" onClick={handleFormToggleVisibleClick}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
