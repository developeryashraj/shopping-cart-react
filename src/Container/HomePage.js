import React, { Fragment } from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";
import products from "../database/products.json";

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
    };
  }
  filterProducts = (criteria = "") => {
    if (criteria.key && criteria.value) {
      const { key, value } = criteria;
      console.log(products);
      const filteredProducts = products.filter(
        (product) => product[key] === value.toLowerCase()
      );
      this.setState({ products: filteredProducts });
    }
  };
  sortProducts = () => {};
  render() {
    const { products } = this.state;
    return (
      <Fragment>
        <SideBar filterProducts={this.filterProducts}></SideBar>
        <ProductListing products={products}></ProductListing>
      </Fragment>
    );
  }
}

export default HomePage;
