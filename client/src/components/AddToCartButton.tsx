import { addCartItem } from "../services/cart";
import type {Product, CartItem} from "../types";

interface AddToCartButtonProps {
  newProduct: Product;
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const AddToCartButton = ({newProduct, setProductList, setCart}: AddToCartButtonProps) => {
  const handleClick = async () => {
    try {
      const {product, item} = await addCartItem({productId: newProduct._id});
      setProductList(previousProductList => {
        return previousProductList.map(previousProduct => {
          return previousProduct._id === product._id
          ? product
          : previousProduct;
        })
      });
      setCart(previousCart => {
        if (previousCart.find(prevCartItem => prevCartItem.productId === item.productId)) {
          return previousCart.map(previousCartItem => {
            return previousCartItem.productId === item.productId
            ? item
            : previousCartItem;
          });
        } else {
          return previousCart.concat(item);
        }
      });
    } catch (error: unknown) {
      console.log(error);
    }
  }

  return (
    <button className="add-to-cart" disabled={newProduct.quantity === 0} onClick={handleClick}>Add to Cart</button>
  );
}

export default AddToCartButton;