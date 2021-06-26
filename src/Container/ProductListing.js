import products from "../database/products.json";
import ProductCard from "../Components/ProductCard";

function ProductListing(props) {
  const addToCart = (productId = "") => {
    if (productId) {
      let cartData = JSON.parse(localStorage.getItem("cart")) || [];
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
  };
  return (
    <div>
      {products.map((product, index) => {
        return (
          <ProductCard
            product={product}
            addToCart={addToCart}
            key={product.id}
          ></ProductCard>
        );
      })}
    </div>
  );
}

export default ProductListing;
