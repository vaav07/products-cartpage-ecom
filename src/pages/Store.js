import React from "react";

import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Store = () => {
  // fetching data from context api
  const { data } = useShoppingCart();

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {/* mapping over all the products from array */}
        {data.map((item) => (
          <Col key={item.id}>
            <StoreItem data={data} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
