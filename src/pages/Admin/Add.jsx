import React, { useState, useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { addMedicine } = useContext(MedicineContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && price) {
      addMedicine({ name, price });
      navigate('/admin');  // Redirect back to the Admin panel
    }
  };

  return (
    <div style={{ padding: '20px' , marginTop:'80px',marginLeft: '30%', width: '55%'}}>
      <Typography variant="h4" gutterBottom>
        Add New Medicine
      </Typography>
      <TextField
        label="Medicine Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Price"
        fullWidth
        margin="normal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Medicine
      </Button>
    </div>
  );
}

export default Add;
