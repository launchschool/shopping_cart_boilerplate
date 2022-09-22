import EditableProduct from "./EditableProduct";

const ProductListing = ({
  products,
  setProducts,
  cartItems,
  setCartItems,
  onUpdateProductSubmit,
}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <EditableProduct
          key={product._id}
          {...product}
          products={products}
          setProducts={setProducts}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onUpdateProductSubmit={onUpdateProductSubmit}
        ></EditableProduct>
      ))}
    </div>
  );
};

export default ProductListing;
