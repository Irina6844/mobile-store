import React from "react";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <Card
      sx={{
        width: "300px",
        border: "2px solid black",
        padding: "20px",
        boxShadow: "5px 5px 8px black",
      }}
    >
      <Box component={NavLink} to={`/products/${product.id}`}>
        <Typography gutterBottom variant="body1" component="div">
          {product.title.length <= 20
            ? product.title
            : `${product.title.slice(0, 20)}...`}
        </Typography>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body1" component="p" sx={{color: "black", fontSize:"20px"}}>
              {product.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
      <Button
        onClick={() => addToCart(product)}
        sx={{ width: "100%" }}
        startIcon={<ShoppingCartIcon />}
        variant="contained"
      >
        Buy
      </Button>
    </Card>
  );
}
