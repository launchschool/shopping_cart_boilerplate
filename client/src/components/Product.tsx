import type {Product as ProductType} from "../types/Product";

interface ProductProps {
  product: ProductType;
}

const Product = ({product}: ProductProps) => {
  return (
    <>
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
    </>
  );
}

export default Product;