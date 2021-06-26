import products from "../database/products.json";

export function setCart(productId) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  if (productId) {
    const getIndex = cartData.findIndex((item) => item.id === productId);
    if (getIndex > -1) {
      cartData[getIndex] = {
        id: productId,
        quantity: cartData[getIndex].quantity + 1,
      };
    } else {
      cartData.push({ id: productId, quantity: 1 });
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
  const otherData = {
    totalQuantity: 0,
    subTotal: 0,
    maxInstallment: 0,
  };
  cartData.map((item) => {
    const findProduct = products.find((product) => product.id === item.id);
    if (findProduct) {
      cartProducts.push({
        ...findProduct,
        quantity: item.quantity,
      });

      otherData.totalQuantity = otherData.totalQuantity + item.quantity;
      otherData.subTotal = otherData.subTotal + findProduct.price;
      otherData.maxInstallment =
        findProduct.installments > otherData.maxInstallment
          ? findProduct.installments
          : otherData.maxInstallment;
    }
  });
  return { cartProducts, otherData };
}
