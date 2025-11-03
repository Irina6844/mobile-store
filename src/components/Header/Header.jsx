import React from 'react'

import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Avatar,Button,Tooltip,MenuItem} from '@mui/material';

import { NavLink } from 'react-router-dom';


const pages = [
  {
  title: 'Home', 
  path: '/'
},
{
  title: 'Products', 
  path: '/products'
}
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

  return (
    <AppBar sx={{backgroundColor : 'orange', mb: '30px'}}  position="sticky">
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
           to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Motorolla
          </Typography>
      
          <Box sx={{ flexGrow: 1, display: 'flex', gap: '20px'}}>
            {pages.map((page) => (
              <Button
              component={NavLink}
              to={page.path}
               variant='contained'
                key={page.title}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;



