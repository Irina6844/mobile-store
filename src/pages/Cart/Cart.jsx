import React from "react";
import { Box } from "@mui/material"
import { NavLink } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";
import Form from "../../components/Form/Form";
const Cart = ({ cart , updateCart}) => {
 

  const total = cart.reduce((acc, elm) => acc + elm.initPrice, 0);
    return (
  <Box  className="cartParent">
    {cart.map((c) => (
      <CartItem key={c.id} cart={c} updateCart={updateCart}/>
    ))}
    {cart.length > 0 ? (
      <Box className="total">Total: {total.toFixed(3)}$</Box>
    ) : (
      <p className="empty">Your cart is empty !</p>
    )}
    <Form />
  </Box>
  
    );
};

export default Cart;
