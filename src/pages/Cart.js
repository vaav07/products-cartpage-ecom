import React from "react";
import { Stack } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cartItems, data } = useShoppingCart();
  return (
    <Stack gap={3}>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="ms-auto fw-bold fs-5">
        Total $
        {cartItems.reduce((total, cartItem) => {
          const item = data.find((i) => i.id === cartItem.id);
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0)}
      </div>
    </Stack>
  );
};

export default Cart;
