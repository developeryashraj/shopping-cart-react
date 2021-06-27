import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { mount, shallow } from "enzyme";
import ProductListing from "./ProductListing";
import products from "../database/products.json";
import filters from "../database/filters.json";

describe("<ProductListing />", () => {
  const sortProducts = jest.fn();
  it("Validation mounting of component", () => {
    const wrapper = shallow(
      <ProductListing
        products={products}
        filters={filters}
        sortProducts={() => {}}
      />
    );

    expect(wrapper.find("ProductCard").length).toEqual(products.length);
    expect(wrapper.find(".col-md-6").first().text()).toEqual(
      products.length + " product(s) found."
    );
  });

  it("OnChange being called", () => {
    const wrapper = shallow(
      <ProductListing
        products={products}
        filters={filters}
        sortProducts={sortProducts}
      />
    );

    expect(wrapper.find("ProductCard").first().prop("product").id).toEqual(1);
    wrapper.find("select").first().invoke("onChange")({
      target: { value: "desc" },
      preventDefault: () => {},
    });
    expect(sortProducts).toHaveBeenCalled();
  });

  it("Add to cart is a prop", () => {
    const wrapper = shallow(
      <ProductListing
        products={products}
        filters={filters}
        sortProducts={() => {}}
      />
    );

    expect(
      wrapper.find("ProductCard").first().prop("addToCart")
    ).toBeInstanceOf(Function);
  });
});
