import ProductCard from "../Components/ProductCard";
import { CounterContext } from "../App";
import { setCartData } from "../utils/cart";
import { useContext } from "react";
import { CardColumns } from "react-bootstrap";

function ProductListing(props) {
  const { updateCounter } = useContext(CounterContext);

  const addToCart = (productId = "") => {
    setCartData(productId);
    updateCounter();
  };

  const renderProducts = () => {
    return props.products && props.products.length > 0 ? (
      <CardColumns className="col-md-12">
        {props.products.map((product, index) => {
          return (
            <ProductCard
              addToCart={addToCart}
              product={product}
              key={product.id}
              className="col-md-3"
            ></ProductCard>
          );
        })}
      </CardColumns>
    ) : (
      ""
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
      <div className="row col-md-12 sort-panel">
        <div className="col-md-6">
          {props.products && props.products.length > 0
            ? `${props.products.length} product(s) found.`
            : "No products found."}
        </div>
        <div className="col-md-6 text-right">{renderSorting()}</div>
      </div>
      <div className="row col-md-12">{renderProducts()}</div>
    </div>
  );
}

export default ProductListing;
