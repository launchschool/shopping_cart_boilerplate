import Product from "./Product";
import type {Product as ProductType} from "../types/Product";
import ToggleableEditForm from "./ToggleableEditForm";
import AddToCartButton from "./AddToCartButton";

interface ProductsProps {
  product: ProductType;
}

const EditableProduct = ({product}: ProductsProps) => {
  return (
    <div className="product-details">
      <Product product={product}/>
      <div className="actions product-actions">
        <AddToCartButton product={product} />
        <ToggleableEditForm product={product}/>
      </div>
      <button className="delete-button"><span>X</span></button>
    </div>
  );
}

export default EditableProduct;