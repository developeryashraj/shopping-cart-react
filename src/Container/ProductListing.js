import products from "../database/products.json";
import ProductCard from "../Components/ProductCard";
import { CounterContext } from "../App";
import { setCartData } from "../utils/cart";
import { useContext } from "react";

function ProductListing() {
  const { updateCounter } = useContext(CounterContext);

  const addToCart = (productId = "") => {
    setCartData(productId);
    updateCounter();
  };
  return (
    <div>
      {products.map((product, index) => {
        return (
          <ProductCard
            addToCart={addToCart}
            product={product}
            key={product.id}
          ></ProductCard>
        );
      })}
    </div>
  );
}

export default ProductListing;
