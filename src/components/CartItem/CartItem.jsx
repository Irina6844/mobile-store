import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import "../../pages/Cart/Cart.css";


const CartItem = ({ cart, updateCart }) => {
  let [count, setCount] = useState(cart.count);

  const plus = () => {
    if (count < 10){
        setCount(++count);
updateCart(count, cart.id)
    }
  };
  const minus = () => {
    if(count > 1){
        setCount(--count);
updateCart(count, cart.id)
    }
  };
  return (
    <Box className="main">
      <div className="cartProduct">
        <h2 className="productTitle">{cart.title}</h2>
        <img src={cart.image} width="120px" />
        <p className="descrip">{cart.description}</p>
        <p className="price">{cart.price}$</p>
      </div>
      <div className="button">
        <Button onClick={plus} variant="contained" color="success">
          +
        </Button>
        <span className="pricee">{count}</span>
        <Button onClick={minus} variant="contained" color="error">
          -
        </Button>
      </div>
      <div className="initPrice">
        <h5>{cart.initPrice.toFixed(2)}$</h5>
      </div>
       
    </Box>
   
  );
};

export default CartItem;
