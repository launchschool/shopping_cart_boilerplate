import Product from "./Product";
import type {Product as ProductType} from "../types";
import ToggleableEditForm from "./ToggleableEditForm";
import AddToCartButton from "./AddToCartButton";
import DeleteButton from "./DeleteButton";

interface ProductsProps {
  product: ProductType;
  fetchProductList: () => Promise<void>;
  fetchCartItems: () => Promise<void>;
}

const EditableProduct = ({product, fetchProductList, fetchCartItems}: ProductsProps) => {
  return (
    <div className="product-details">
      <Product product={product}/>
      <div className="actions product-actions">
        <AddToCartButton product={product} fetchCartItems={fetchCartItems}/>
        <ToggleableEditForm product={product} fetchProductList={fetchProductList}/>
      </div>
      <DeleteButton id={product._id} fetchProductList={fetchProductList}/>
    </div>
  );
}

export default EditableProduct;