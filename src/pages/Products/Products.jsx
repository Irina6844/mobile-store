import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";
import { productContext } from "../../app/provider/provider";

const Products = () => {
  
const { products, addToCart } = useContext(productContext)
  return (
    <Box>
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
