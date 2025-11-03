import React from 'react'

import { Button ,Card,CardContent,CardMedia,Typography,CardActionArea} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard({product}) {
  return (
    <Card sx={{ width: '300px',  border:'4px solid green', padding: '20px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {
            product.title.length <= 20? product.title : `${product.title.slice(0,20)}...`
            }
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <Button 
      sx={{width:'100%'}}
      startIcon={<ShoppingCartIcon/>}
      variant='contained'>
        Buy</Button>
    </Card>
  );
}


