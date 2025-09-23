import type {Product} from "../types/Product";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({product}: AddToCartButtonProps) => {
  return (
    <button className="add-to-cart" disabled={product.quantity === 0}>Add to Cart</button>
  );
}

export default AddToCartButton;