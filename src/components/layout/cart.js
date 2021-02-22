import React from "react";

import { Row, Col } from "react-bootstrap";
import CartItem from "./cartItem";
import Navbar from "./navbar";
import { useCart } from "../stateManagement/provider";

function Cart() {
  const items = useCart();

  let totalPrice = items.reduce((acc, cv) => acc + cv.price, 0);

  return (
    <div>
      <Navbar />
      <br />
      <h2>Cart component</h2>
      <h5>{items.length === 0 ? 0 : items.length} items in the cart</h5>
      {items.map((items) => {
        return (
          <Col>
            <Row>
              <CartItem key={items.id} item={items} />
            </Row>
          </Col>
        );
      })}
      <h4>Total Price =${totalPrice}</h4>
    </div>
  );
}

export default Cart;
