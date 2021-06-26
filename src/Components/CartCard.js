import { Button, Card } from "react-bootstrap";

function CartCard(props) {
  const product = { ...props.product };
  const prductImagePath = `${process.env.PUBLIC_URL}/products/${product.image}_2.${product.imageExtension}`;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prductImagePath} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          $ {product.price}
          {product.installments > 0 && (
            <span>
              <br />
              <span>
                or {product.installments} X{" "}
                {Math.round((product.price / product.installments) * 100) / 100}
              </span>
            </span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
