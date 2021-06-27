import ProductCard from "../Components/ProductCard";
import { CounterContext } from "../App";
import { setCartData } from "../utils/cart";
import { useContext } from "react";
import { CardDeck } from "react-bootstrap";

function ProductListing(props) {
  const { updateCounter } = useContext(CounterContext);

  const addToCart = (productId = "") => {
    setCartData(productId);
    updateCounter();
  };
  return props.products && props.products.length > 0 ? (
    <CardDeck>
      {props.products.map((product, index) => {
        return (
          <ProductCard
            addToCart={addToCart}
            product={product}
            key={product.id}
          ></ProductCard>
        );
      })}
    </CardDeck>
  ) : (
    "No Product Found"
  );
}

export default ProductListing;
