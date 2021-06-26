import { Fragment, useContext } from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";
import { setCart, getCart } from "../utils/cart";
import { CounterContext } from "../App";

function HomePage(props) {
  const setCount = useContext(CounterContext);
  const addToCart = (productId = "") => {
    setCart(productId);
    props.updateCounter();
  };

  return (
    <Fragment>
      <SideBar></SideBar>
      <ProductListing addToCart={addToCart}></ProductListing>
    </Fragment>
  );
}

export default HomePage;
