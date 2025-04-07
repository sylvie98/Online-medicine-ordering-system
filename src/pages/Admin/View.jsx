import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import { useParams } from 'react-router-dom';
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box
} from '@mui/material';

function View() {
  const { id } = useParams(); // Extract 'id' from URL
  const { medicines } = useContext(MedicineContext); // Get medicines from context

  // Find the medicine with the specific ID
  const medicine = medicines.find((med) => med.id === parseInt(id));

  // If no medicine is found, show a message
  if (!medicine) {
    return (
      <Box mt={10} display="flex" justifyContent="center">
        <Typography variant="h6" color="error">
          Medicine not found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
      marginBottom={14}
    >
      <Card
        sx={{
          width: 500,
          padding: 3,
          boxShadow: 5,
          borderRadius: 3,
          backgroundColor: '#f9f9f9'
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Medicine Details
          </Typography>
          <Typography variant="h6" gutterBottom>
           Name: {medicine.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Price: {medicine.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#063970',
              '&:hover': { backgroundColor: '#05599d' }
            }}
            href="/admin"
          >
            Back to Admin Panel
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default View;
