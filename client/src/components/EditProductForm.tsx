import type {Product as ProductType} from "../types/Product";

interface EditProductFormProps {
  product: ProductType;
  setIsClickedEditForm: React.Dispatch<React.SetStateAction<boolean>>;
}


const EditProductForm = ({product, setIsClickedEditForm}: EditProductFormProps) => {
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={product.title}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={product.price}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={product.quantity}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={() => setIsClickedEditForm(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;