import { useContext, useEffect, useState, useCallback, Fragment } from "react";
import CartCard from "../Components/CartCard";
import { prepareCart, updateCart as updateCardUtil } from "../utils/cart";
import {
  Button,
  Badge,
  OverlayTrigger,
  Popover,
  Row,
  Col,
} from "react-bootstrap";
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
  }, []);

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
              {productData.length > 0 ? (
                <Fragment>
                  <div className="col-md-12">
                    {productData.map((product) => {
                      return (
                        <CartCard
                          product={product}
                          key={product.id}
                          updateCart={updateCart}
                        ></CartCard>
                      );
                    })}
                  </div>
                  <Row className="">
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex justify-content-start"
                    >
                      <strong>SUBTOTAL</strong>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-end">
                      <strong>${cartData.subTotal}</strong>
                      <br />
                      or {cartData.maxInstallment} X $
                      {Math.round(
                        (cartData.subTotal / cartData.maxInstallment) * 100
                      ) / 100}
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-center">
                    <Button variant="dark">Checkout</Button>
                  </Row>
                </Fragment>
              ) : (
                "No items in your cart"
              )}
            </Popover.Content>
          </Popover>
        }
      >
        <Button
          className="btn-drawer btn"
          variant="dark"
          onClick={() => handleDisplay()}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/bag-icon.png`}
            alt="cart"
          />
          <Badge variant="light">{cartData.totalQuantity || 0}</Badge>
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default Cart;
