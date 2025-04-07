import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    // Simulate message submission
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } else {
      setError(true);
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        padding: '20px', 
        backgroundColor: '#F8F8FF', 
        borderRadius: '8px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
        marginTop: '80px' 
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: '#063970' }}
        >
          Contact Us
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ color: '#555', lineHeight: 1.8 }}
        >
          Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box 
        component="form" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px' 
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField 
          label="Your Name" 
          variant="outlined" 
          fullWidth 
          required 
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField 
          label="Your Email" 
          variant="outlined" 
          fullWidth 
          required 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField 
          label="Your Message" 
          variant="outlined" 
          fullWidth 
          required 
          multiline 
          rows={4} 
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {/* Success/Error Alerts */}
       {success && <Alert severity="success">Message sent successfully!</Alert>}
      {error && <Alert severity="error">Please fill out all fields before submitting.</Alert>}
        <Button 
          type="submit"
          variant="contained"  
         sx={{ padding: '10px 20px', backgroundColor: '#063970'}}
        >
          Send Message
        </Button>
      </Box>       
    </Container>
  );
};

export default Contact;
