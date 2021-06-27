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

  const renderProducts = () => {
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
  };

  const renderSorting = () => {
    const {
      filters: { price: priceSort },
      sortProducts,
    } = props;

    const handleChange = (e) => {
      e.preventDefault();
      sortProducts({ key: "price", value: e.target.value });
    };
    return (
      <select onChange={(e) => handleChange(e)}>
        {priceSort &&
          priceSort.map((item, index) => {
            return (
              <option key={index} value={item.key}>
                {item.label}
              </option>
            );
          })}
      </select>
    );
  };

  return (
    <div>
      {renderSorting()}
      <br />
      {renderProducts()}
    </div>
  );
}

export default ProductListing;
