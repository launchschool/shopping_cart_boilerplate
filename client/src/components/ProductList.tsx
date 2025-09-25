import type {Product as ProductType, CartItem} from "../types";
import EditableProduct from "./EditableProduct";

interface ProductsProps {
  products: ProductType[];
  setProductList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ProductList = ({products, setProductList, setCart}: ProductsProps) => {
  return (  
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product">
            <EditableProduct product={product} setProductList={setProductList} setCart={setCart}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;