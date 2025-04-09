import React, { useState, useContext, useEffect } from 'react';
import { MedicineContext } from './MedicineContext';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';

function Update() {
  const { id } = useParams();
  const { medicines, updateMedicine } = useContext(MedicineContext);
  const navigate = useNavigate();

  const medicine = medicines.find((med) => med.id === parseInt(id));

  const [name, setName] = useState(medicine?.name || '');
  const [price, setPrice] = useState(medicine?.price || '');
  const [image, setImage] = useState(medicine?.image || '');
  const [imagePreview, setImagePreview] = useState(medicine?.image || '');

  useEffect(() => {
    if (medicine) {
      setName(medicine.name);
      setPrice(medicine.price);
      setImage(medicine.image);
      setImagePreview(medicine.image);
    }
  }, [medicine]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validImageTypes.includes(file.type)) {
        alert('Invalid file type. Please upload an image (jpg, png, gif, or webp).');
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!name || !price) {
      alert('Please fill in both name and price.');
      return;
    }

    const updatedMedicine = {
      name,
      price,
      image: typeof image === 'string' ? image : imagePreview, // keep old image or use new one
    };

    updateMedicine(id, updatedMedicine);
    navigate('/admin');
  };

  if (!medicine) return <Typography variant="h6">Medicine not found!</Typography>;

  return (
    <div style={{ padding: '20px', marginTop: '80px', marginLeft: '30%', width: '55%', marginBottom: '14%' }}>
      <Typography variant="h4" gutterBottom>
        Update Medicine
      </Typography>

      <TextField
        label="Medicine Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        label="Price"
        fullWidth
        margin="normal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      {/* Image Upload */}
      <Box sx={{ marginBottom: 2 }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button
            variant="contained"
            component="span"
            sx={{
              backgroundColor: '#063970',
              '&:hover': { backgroundColor: '#05599d' },
            }}
          >
            Change Image
          </Button>
        </label>
        {image && typeof image !== 'string' && (
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {image.name}
          </Typography>
        )}
      </Box>

      {/* Image Preview */}
      {imagePreview && (
        <Box sx={{ marginBottom: 2 }}>
          <img
            src={imagePreview}
            alt="Preview"
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
        </Box>
      )}

      <Button
        variant="contained"
        sx={{ backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }}
        onClick={handleSubmit}
      >
        Update Medicine
      </Button>
    </div>
  );
}

export default Update;
