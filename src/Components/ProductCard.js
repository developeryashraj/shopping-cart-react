import { Button, Card } from "react-bootstrap";

function ProductCard(props) {
  const product = { ...props.product };
  const prductImagePath = `${process.env.PUBLIC_URL}/products/${product.image}_1.${product.imageExtension}`;

  return (
    <Card>
      <Card.Img variant="top" src={prductImagePath} />
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          $ {product.price}
          {product.installments > 0 && (
            <span>
              <br />
              <span>
                or {product.installments} X $
                {Math.round((product.price / product.installments) * 100) / 100}
              </span>
            </span>
          )}
        </Card.Text>
        <Button variant="dark" onClick={() => props.addToCart(product.id)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
