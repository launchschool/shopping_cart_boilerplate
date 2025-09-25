import Product from "./Product";
import type {Product as ProductType, CartItem} from "../types";
import ToggleableEditForm from "./ToggleableEditForm";
import AddToCartButton from "./AddToCartButton";
import DeleteButton from "./DeleteButton";

interface ProductsProps {
  product: ProductType;
  setProductList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const EditableProduct = ({product, setProductList, setCart}: ProductsProps) => {
  return (
    <div className="product-details">
      <Product product={product}/>
      <div className="actions product-actions">
        <AddToCartButton newProduct={product} setProductList={setProductList} setCart={setCart}/>
        <ToggleableEditForm product={product} setProductList={setProductList}/>
      </div>
      <DeleteButton id={product._id} setProductList={setProductList}/>
    </div>
  );
}

export default EditableProduct;