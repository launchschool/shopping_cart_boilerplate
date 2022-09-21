import EditableProduct from "./EditableProduct";

const ProductListing = ({ products, setProducts, onUpdateProductSubmit }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <EditableProduct key={product.id} {...product} products={products} setProducts={setProducts} onUpdateProductSubmit={onUpdateProductSubmit}></EditableProduct>
      ))}
    </div>
  );
};

export default ProductListing;
