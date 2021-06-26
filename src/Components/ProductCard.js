import { Button, Card } from "react-bootstrap";

function ProductCard(props) {
  const product = { ...props.product };
  const prductImagePath = `${process.env.PUBLIC_URL}/products/${product.image}_1.${product.imageExtension}`;

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
        <Button variant="primary" onClick={() => props.addToCart(product.id)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
