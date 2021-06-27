import products from "../database/products.json";

export function setCartData(productId) {
  let cartData = getCart();
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
    setCart(cartData);
  }
  return cartData;
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cartData) {
  cartData && localStorage.setItem("cart", JSON.stringify(cartData));
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

export function updateCart(action) {
  if (action.id) {
    let cartData = getCart();
    const itemIndex = cartData.findIndex((item) => item.id === action.id);
    if (itemIndex > -1) {
      switch (action.type) {
        case "increase":
          cartData[itemIndex] = {
            id: cartData[itemIndex].id,
            quantity: cartData[itemIndex].quantity + 1,
          };
          break;
        case "decrease":
          cartData[itemIndex] = {
            id: cartData[itemIndex].id,
            quantity: cartData[itemIndex].quantity - 1,
          };
          break;
        case "remove":
          cartData[itemIndex] = {
            id: cartData[itemIndex].id,
            quantity: 0,
          };
          break;

        default:
          break;
      }
      if (cartData[itemIndex].quantity === 0) {
        cartData.splice(itemIndex, 1);
      }
    }
    setCart(cartData);
    return prepareCart();
  }
}
