import { Fragment } from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";

function HomePage() {
  return (
    <Fragment>
      <SideBar></SideBar>
      <ProductListing></ProductListing>
    </Fragment>
  );
}

export default HomePage;
