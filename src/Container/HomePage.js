import React, { Fragment } from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";

class HomePage extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <SideBar></SideBar>
        <ProductListing></ProductListing>
      </Fragment>
    );
  }
}

export default HomePage;
