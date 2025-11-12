import React from "react";
import { Box } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import Form from "../../components/Form/Form";
import { useContext } from "react";
import { productContext } from "../../app/provider/provider";

import "./Cart.css";


const Cart = () => {
  const { cart, updateCart } = useContext(productContext);

  const total = cart.reduce((acc, elm) => acc + elm.initPrice, 0);
  return (
    <Box className="cartParent">
      {cart.map((c) => (
        <CartItem key={c.id} cart={c} updateCart={updateCart} />
      ))}
      {cart.length > 0 ? (
        <Box className="total">Total: {total.toFixed(2)}$</Box>
      ) : (
        <p className="empty">Your cart is empty !</p>
      )}
      <Form />
    </Box>
  );
};

export default Cart;
