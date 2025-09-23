import type {Product as ProductType} from "../types/Product";
import EditableProduct from "./EditableProduct";

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
            <EditableProduct product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;