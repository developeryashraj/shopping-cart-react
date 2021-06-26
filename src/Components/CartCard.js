import { Button, Card } from "react-bootstrap";

function CartCard(props) {
  const product = { ...props.product };
  const prductImagePath = `${process.env.PUBLIC_URL}/products/${product.image}_2.${product.imageExtension}`;
  const { updateCart } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="left" src={prductImagePath} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          $ {product.price}
          <br />
          {product.size} | {product.description}
          <br />
          Quantity : {product.quantity}
        </Card.Text>
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
      </Card.Body>
    </Card>
  );
}

export default CartCard;
