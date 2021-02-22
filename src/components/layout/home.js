import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import Navbar from "./navbar";
import Product from "../layout/product";
import { products } from "./productList";

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col xl={3} md={4} sm={6}>
                <Product key={product.id} product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
