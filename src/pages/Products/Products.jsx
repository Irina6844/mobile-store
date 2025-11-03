import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import {Box} from '@mui/material'
const Products = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => setProducts(res))
  }, [])

  return (
<Box >
  <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>

  {
    products.map((product) => <ProductCard key={product.id} product={product}/>)
  }

  </Box>
  
</Box>


  )
   
};

export default Products;
