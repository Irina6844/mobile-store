import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cartParent">
      {cart.map((c) => (
        <div className="cartProduct">
          <h2 className="productTitle">{c.title}</h2>
          <img src={c.image} width="180px" />
          <p>{c.description}</p>
          <p className="price">{c.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
