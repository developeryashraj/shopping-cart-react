import prepareCart from "./cart";

describe("prepareCart scenarios", function () {
  it("Should get cartProducts as blank array", function () {
    expect(prepareCart()).toBe({});
  });
});
