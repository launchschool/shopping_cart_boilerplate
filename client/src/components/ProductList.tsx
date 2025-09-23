import Product from "./Product";
import type {Product as ProductType} from "../types/Product";
import ToggleableEditForm from "./ToggleableEditForm";
import AddToCartButton from "./AddToCartButton";

interface ProductsProps {
  products: ProductType[];
}

const ProductList = ({products}: ProductsProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product">
            <div className="product-details">
              <Product product={product}/>
              <div className="actions product-actions">
                <AddToCartButton product={product} />
                <ToggleableEditForm product={product}/>
              </div>
              <button className="delete-button"><span>X</span></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;