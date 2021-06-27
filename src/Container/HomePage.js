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
      filter: {
        key: "",
        value: "",
      },
      sort: {
        key: "",
        value: "",
      },
    };
  }

  prepareProducts = () => {
    const { filter, sort } = this.state;
    let prepareData = [...products];
    if (sort.key) {
      sort.value &&
        prepareData.sort((a, b) =>
          sort.value == "asc"
            ? a[sort.key] - b[sort.key]
            : b[sort.key] - a[sort.key]
        );
    }
    if (filter.key && filter.value) {
      prepareData = prepareData.filter(
        (product) => product[filter.key] === filter.value.toLowerCase()
      );
    }
    this.setState({ products: prepareData });
  };
  filterProducts = (criteria = "") => {
    const filterObj = {
      key: criteria.key || "",
      value: criteria.value || "",
    };
    this.setState(
      {
        filter: filterObj,
      },
      this.prepareProducts
    );
  };
  sortProducts = (criteria = "") => {
    const sortObj = {
      key: criteria.key || "",
      value: criteria.value || "",
    };
    this.setState(
      {
        sort: sortObj,
      },
      this.prepareProducts
    );
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
