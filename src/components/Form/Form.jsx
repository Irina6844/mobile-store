import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Form = () => {
  return (
    <div>
        <h2>Առաքման տվյալներ</h2>
     <Box
      component="form"
      sx={{ 
    display: 'flex',
    flexDirection: 'column',
    gap: 2,    
    width: '300px' 
  }}
      noValidate
      autoComplete="off"
    >
     
      <TextField label="Անուն" variant="standard" />
      <TextField label="Ազգանուն" variant="standard" />
      <TextField label="Էլ․ հասցե" variant="standard" />
      <TextField label="Մարզ" variant="standard" />
      <TextField label="Քաղաք" variant="standard" />
      <TextField label="Փողոց, տուն" variant="standard" />
      
      
      <Button variant="contained" color="success">
        Success
      </Button>
    </Box>
    </div>
  )
}

export default Form







