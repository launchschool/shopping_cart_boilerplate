import type {Product as ProductType} from "../types/Product";

interface ProductProps {
  product: ProductType;
}

const Product = ({product}: ProductProps) => {
  return (
    <li className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
      </div>
    </li>
  );
}

export default Product;