import {
  Button,
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
        <Image
          src={prductImagePath}
          className="rounded img-fluid"
          alt="product"
        />
      </Col>
      <Col xs={12} md={6}>
        <span className="dark-text">{product.name}</span>
        <span>
          {product.size} | {product.description}
        </span>
        <span>Quantity : {product.quantity}</span>
      </Col>
      <Col xs={12} md={3}>
        <div className="dark-text d-flex">
          <span className="">${product.price}</span>
          <ButtonGroup
            className="m-auto"
            aria-label="Second group"
            size="sm"
            as="span"
          >
            <Button
              variant="outline-danger"
              className="close-cart"
              title="Remove item"
              onClick={() => updateCart({ id: product.id, type: "remove" })}
            >
              {" "}
              X{" "}
            </Button>
          </ButtonGroup>
        </div>
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
