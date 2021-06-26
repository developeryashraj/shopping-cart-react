import { useContext, useEffect, useState, useCallback } from "react";
import CartCard from "../Components/CartCard";
import { prepareCart, updateCart as updateCardUtil } from "../utils/cart";
import { Button, Badge } from "react-bootstrap";
import { CounterContext } from "../App";

function Cart(props) {
  const { count } = useContext(CounterContext);
  const [productData, setProducData] = useState([]);
  const [cartData, setCartData] = useState({});
  const [cartDisplay, setCartDisplay] = useState(false);

  useEffect(() => {
    const { cartProducts, otherData } = prepareCart();
    setProducData(cartProducts);
    setCartData(otherData);
  }, [count]);

  const handleDisplay = () => {
    setCartDisplay(!cartDisplay);
  };

  const updateCart = useCallback((action) => {
    const { cartProducts, otherData } = updateCardUtil(action);
    setProducData(cartProducts);
    setCartData(otherData);
  });

  // return "asdad";
  return (
    <div>
      <Button variant="primary" onClick={() => handleDisplay()}>
        View Cart <Badge variant="light">{cartData.totalQuantity || 0}</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
      {cartDisplay &&
        productData &&
        productData.map((product) => {
          return (
            <CartCard
              product={product}
              key={product.id}
              updateCart={updateCart}
            ></CartCard>
          );
        })}
    </div>
  );
}

export default Cart;
