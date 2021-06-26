import products from "../database/products.json";

export function setCart(productId) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  if (productId) {
    const getIndex = cartData.findIndex((item) => item.id === productId);
    if (getIndex > -1) {
      cartData[getIndex] = {
        id: productId,
        counter: cartData[getIndex].counter + 1,
      };
    } else {
      cartData.push({ id: productId, counter: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
  }
  return cartData;
}

export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function prepareCart() {
  let cartData = getCart();
  let cartProducts = [];
  cartData.map((item) => {
    const findProduct = products.find((product) => product.id === item.id);
    if (findProduct) {
      cartProducts.push({
        ...findProduct,
        counter: item.counter,
      });
    }
  });
  return cartProducts;
}
