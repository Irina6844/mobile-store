import React, { useContext, useRef } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";
import { productContext } from "../../app/provider/provider";

import './Products.css'

const Products = () => {
  const { products, addToCart } = useContext(productContext);

  const Line1Ref = useRef(null);
  const Line2Ref = useRef(null);
  const Line3Ref = useRef(null);

  const scrolling = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <button onClick={() => scrolling(Line1Ref)} className="lineBtn">Line 1</button>
        <button onClick={() => scrolling(Line2Ref)} className="lineBtn">Line 2</button>
        <button onClick={() => scrolling(Line3Ref)} className="lineBtn">Line 3</button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Products;
