import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart, data, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  // getting data from api
  const item = data.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center shadow-sm p-3 mb-1 bg-white rounded"
    >
      <img
        src={item.image}
        style={{ width: "100px", height: "80px", objectFit: "contain" }}
        alt=""
      />
      <div className="me-auto">
        <div className="text-sm">
          {item.title} <br />
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x {quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          $ {item.price}
        </div>
      </div>

      <Button size="sm" onClick={() => decreaseCartQuantity(id)}>
        -
      </Button>
      <div>
        <span className="fs-5">{quantity}</span>
      </div>
      <Button
        size="sm"
        onClick={() => increaseCartQuantity(id)}
        className="me-2"
      >
        +
      </Button>

      <div>$ {item.price * quantity}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
