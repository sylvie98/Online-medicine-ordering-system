import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function View() {
  const { id } = useParams();  // Extract 'id' from URL
  const { medicines } = useContext(MedicineContext);  // Get medicines from context

  // Find the medicine with the specific ID
  const medicine = medicines.find((med) => med.id === parseInt(id));

  // If no medicine is found, show a message
  if (!medicine) {
    return <Typography variant="h6">Medicine not found!</Typography>;
  }

  return (
    <div style={{ padding: '20px',marginTop:'80px',marginLeft: '30%', width: '55%' }}>
      <Typography variant="h4" gutterBottom>
        Medicine Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>Name:</strong> {medicine.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <strong>Price:</strong> {medicine.price}
      </Typography>

      <Button variant="contained" color="primary" href="/admin">
        Back to Admin Panel
      </Button>
    </div>
  );
}

export default View;
