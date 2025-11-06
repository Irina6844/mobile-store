import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../app/App";

import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div className="product">
      <h2 className="productTitle">{product?.title}</h2>
      <img src={product?.image} width="180px" />
      <p>{product?.description}</p>
      <p className="price">{product?.price}$</p>
    </div>
  );
};

export default Product;
