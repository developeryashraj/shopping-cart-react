import { useContext, useEffect, useState, useCallback } from "react";
import CartCard from "../Components/CartCard";
import { prepareCart, updateCart as updateCardUtil } from "../utils/cart";
import { Button, Badge, OverlayTrigger, Popover } from "react-bootstrap";
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
  const className = cartDisplay ? "open" : "close";
  const placement = "left";
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        key={placement}
        placement={placement}
        overlay={
          <Popover id={`popover-positioned-${placement}`}>
            <Popover.Title as="h3">In your cart</Popover.Title>
            <Popover.Content>
              <div className="col-md-12">
                {productData &&
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
            </Popover.Content>
          </Popover>
        }
      >
        <Button
          className="btn-drawer btn"
          variant="dark"
          onClick={() => handleDisplay()}
        >
          <img src={`${process.env.PUBLIC_URL}/assets/bag-icon.png`} />
          <Badge variant="light">{cartData.totalQuantity || 0}</Badge>
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default Cart;
