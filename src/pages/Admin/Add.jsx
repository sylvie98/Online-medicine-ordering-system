import React, { useState, useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);  
  const [imagePreview, setImagePreview] = useState(null);  
  const { addMedicine } = useContext(MedicineContext);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setImage(file); 
      setImagePreview(URL.createObjectURL(file));  
    }
  };

  const handleSubmit = () => {
    if (name && price && image) {
      // Create a FormData object to send data with image (optional, depends on your backend setup)
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('image', image);
   // Use imagePreview to show in the UI temporarily
      addMedicine({ name, price, image: imagePreview });  
      navigate('/admin');  
    }
  };

  return (
    <div style={{ padding: '20px', marginTop: '80px', marginLeft: '30%', width: '55%', marginBottom: '14%' }}>
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
      
      {/* Image upload input */}
      <Box sx={{ marginBottom: 2 }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}  
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button variant="contained" component="span" sx={{ backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }}>
            Upload Image
          </Button>
        </label>
        {image && <Typography variant="body2" sx={{ marginTop: 1 }}>{image.name}</Typography>} {/* Show selected file name */}
      </Box>

      {/* Show image preview if available */}
      {imagePreview && (
        <Box sx={{ marginBottom: 2 }}>
          <img src={imagePreview} alt="Image Preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
        </Box>
      )}

      <Button variant="contained" sx={{ backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }} onClick={handleSubmit}>
        Add Medicine
      </Button>
    </div>
  );
}

export default Add;
