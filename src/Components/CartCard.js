import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";

function CartCard(props) {
  const product = { ...props.product };
  const prductImagePath = `${process.env.PUBLIC_URL}/products/${product.image}_2.${product.imageExtension}`;
  const { updateCart } = props;
  return (
    <Row>
      <Col xs={6} md={4}>
        <Image src={prductImagePath} rounded />
      </Col>
      <Col xs={6} md={4}>
        {product.name}$ {product.price}
        <br />
        {product.size} | {product.description}
        <br />
        Quantity : {product.quantity}
      </Col>
      <Col xs={6} md={4}>
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
      </Col>
    </Row>
  );
}

export default CartCard;
