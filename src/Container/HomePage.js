import React, { Fragment } from "react";
import ProductListing from "./ProductListing";
import SideBar from "./SideBar";
import products from "../database/products.json";
import filters from "../database/filters.json";

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
  sortProducts = (criteria = "") => {
    if (criteria.key) {
      const { key, value = "" } = criteria;
      const sortData = [...products];
      console.log(sortData, "=====");
      value &&
        sortData.sort((a, b) =>
          value == "asc" ? a[key] - b[key] : b[key] - a[key]
        );
      this.setState({ products: sortData });
    }
  };
  render() {
    const { products } = this.state;
    return (
      <Fragment>
        <SideBar
          filterProducts={this.filterProducts}
          filters={filters}
        ></SideBar>
        <ProductListing
          products={products}
          filters={filters}
          sortProducts={this.sortProducts}
        ></ProductListing>
      </Fragment>
    );
  }
}

export default HomePage;
