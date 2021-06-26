import { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import { prepareCart } from "../utils/cart";
import { Button, Badge } from "react-bootstrap";

function Cart(props) {
  const [productData, setProducData] = useState([]);
  const [cartDisplay, setCartDisplay] = useState(false);
  useEffect(() => {
    setProducData(prepareCart());
  }, []);

  const handleDisplay = () => {
    setCartDisplay(!cartDisplay);
  };

  // return "asdad";
  return (
    <div>
      <Button variant="primary">
        View Cart{" "}
        <Badge variant="light" onClick={() => handleDisplay()}>
          {productData.length}
        </Badge>
        <span className="sr-only">unread messages</span>
      </Button>
      {cartDisplay &&
        productData &&
        productData.map((product) => {
          return <CartCard product={product} key={product.id}></CartCard>;
        })}
    </div>
  );
}

export default Cart;
