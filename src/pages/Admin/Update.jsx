import React, { useState, useContext, useEffect } from 'react';
import { MedicineContext } from './MedicineContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

function Update() {
  const { id } = useParams();
  const { medicines, updateMedicine } = useContext(MedicineContext);
  const navigate = useNavigate();

  const medicine = medicines.find((med) => med.id === parseInt(id));

  const [name, setName] = useState(medicine?.name || '');
  const [price, setPrice] = useState(medicine?.price || '');

  useEffect(() => {
    if (medicine) {
      setName(medicine.name);
      setPrice(medicine.price);
    }
  }, [medicine]);

  const handleSubmit = () => {
    if (name && price) {
      updateMedicine(id, { name, price });
      navigate('/admin');  // Redirect back to Admin panel after update
    }
  };

  if (!medicine) return <Typography variant="h6">Medicine not found!</Typography>;

  return (
    <div style={{ padding: '20px',marginTop:'80px',marginLeft: '30%', width: '55%',marginBottom:'14%' }}>
      <Typography variant="h4" gutterBottom>
        Update Medicine
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
      <Button variant="contained" sx={{backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' }}} onClick={handleSubmit}>
        Update Medicine
      </Button>
    </div>
  );
}

export default Update;
