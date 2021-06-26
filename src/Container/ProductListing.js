import products from "../database/products.json";
import ProductCard from "../Components/ProductCard";

function ProductListing(props) {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <ProductCard
            {...props}
            product={product}
            key={product.id}
          ></ProductCard>
        );
      })}
    </div>
  );
}

export default ProductListing;
