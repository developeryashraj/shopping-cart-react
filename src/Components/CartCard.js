import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";

function CartCard(props) {
  const product = { ...props.product };
  const prductImagePath = `${process.env.PUBLIC_URL}/products/${product.image}_2.${product.imageExtension}`;
  const { updateCart } = props;
  return (
    <Row className="cart-items">
      <Col xs={12} md={3}>
        <Image src={prductImagePath} className="rounded img-fluid" />
      </Col>
      <Col xs={12} md={6}>
        <span className="dark-text">{product.name}</span>
        <span>
          {product.size} | {product.description}
        </span>
        <span>Quantity : {product.quantity}</span>
      </Col>
      <Col xs={12} md={3}>
        $ {product.price}
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup
            className="mr-2 mt-3"
            aria-label="Second group"
            size="sm"
          >
            <Button
              variant="outline-secondary"
              onClick={() => updateCart({ id: product.id, type: "decrease" })}
            >
              {" "}
              -{" "}
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => updateCart({ id: product.id, type: "increase" })}
            >
              {" "}
              +{" "}
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>
  );
}

export default CartCard;
