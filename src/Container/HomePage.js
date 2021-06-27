import React from "react";
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
        size: [],
      },
      sort: {
        key: "",
        value: "",
      },
    };
  }

  prepareProducts = () => {
    const {
      filter: { size: sizeFilter },
      sort,
    } = this.state;
    let prepareData = [...products];
    if (sort.key) {
      sort.value &&
        prepareData.sort((a, b) =>
          sort.value === "asc"
            ? a[sort.key] - b[sort.key]
            : b[sort.key] - a[sort.key]
        );
    }
    if (sizeFilter.length > 0) {
      prepareData = prepareData.filter((product) =>
        sizeFilter.includes(product["size"].toLowerCase())
      );
    }
    this.setState({ products: prepareData });
  };

  filterProducts = (criteria = "") => {
    const { key, value } = criteria;
    if (key && value) {
      const { filter } = this.state;
      const filterObj = filter[key];
      const itemIndex = filterObj.findIndex(
        (item) => item === value.toLowerCase()
      );
      if (itemIndex > -1) {
        filterObj.splice(itemIndex, 1);
      } else {
        filterObj.push(value.toLowerCase());
      }

      const finalObj = { ...filter };
      finalObj[key] = filterObj;
      this.setState(
        {
          filter: finalObj,
        },
        this.prepareProducts
      );
    }
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
    const { products, filter } = this.state;
    return (
      <div className="row col-md-12">
        <div className="col-md-3 row">
          <SideBar
            filterProducts={this.filterProducts}
            filters={filters}
            currentFilter={filter}
          ></SideBar>
        </div>
        <div className="col-md-9">
          <ProductListing
            products={products}
            filters={filters}
            sortProducts={this.sortProducts}
          ></ProductListing>
        </div>
      </div>
    );
  }
}

export default HomePage;
