import { Fragment } from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";
import Cart from "./Cart";
import { setCart, getCart } from "../utils/cart";

function HomePage() {
  const addToCart = (productId = "") => {
    setCart(productId);
  };

  return (
    <Fragment>
      <Cart></Cart>
      <SideBar></SideBar>
      <ProductListing addToCart={addToCart}></ProductListing>
    </Fragment>
  );
}

export default HomePage;
