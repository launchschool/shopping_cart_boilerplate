import type {Product as ProductType} from "../types";
import EditableProduct from "./EditableProduct";

interface ProductsProps {
  products: ProductType[];
  fetchProductList: () => Promise<void>;
  fetchCartItems: () => Promise<void>;
}

const ProductList = ({products, fetchProductList, fetchCartItems}: ProductsProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product">
            <EditableProduct product={product} fetchProductList={fetchProductList} fetchCartItems={fetchCartItems}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;