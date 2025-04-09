import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavClient from '../../Component/NavClient';

function Order() {
  const [cart, setCart] = useState([]);
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, phone, email } = clientInfo;

    if (!name || !phone || !email) {
      alert("Please fill in all the fields");
      return;
    }

    // Phone number must start with 0 and be exactly 10 digits
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must start with 0 and be exactly 10 digits.");
      return;
    }

    if (cart.length === 0) {
      alert("No products in cart to order.");
      return;
    }

    const orderDetails = {
      clientName: name,
      clientPhone: phone,
      clientEmail: email,
      products: cart,
    };

    const previousOrders = JSON.parse(localStorage.getItem('orders')) || [];
    previousOrders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(previousOrders));

    localStorage.removeItem('cart');

    alert(`${name} ordered ${cart.map((item) => `${item.name} (${item.price * item.quantity} Frw)`).join(", ")}`);

    navigate("/catalog");
  };

  const handleCancelOrder = () => {
    localStorage.removeItem('cart');
    setCart([]);
    navigate("/catalog");
  };

  return (
    <>
      <NavClient />
      <Container sx={{ pt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Complete Your Order
        </Typography>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          <TextField
            label="Full Name"
            name="name"
            value={clientInfo.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={clientInfo.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            value={clientInfo.email}
            onChange={handleChange}
            required
          />

          <Typography variant="h5" gutterBottom>
            Ordered Products
          </Typography>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia component="img" height="160" image={item.image} alt={item.name} />
                  <CardContent>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography>{item.quantity} × {item.price} Frw</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Button
            variant="contained"
            sx={{
              width: '200px',
              backgroundColor: '#063970',
              '&:hover': { backgroundColor: '#05599d' },
              marginTop: 2
            }}
            onClick={handleSubmit}
          >
            Confirm Order
          </Button>

          <Button
            variant="outlined"
            sx={{
              width: '200px',
              color: 'white',
              backgroundColor: '#17202a',
              '&:hover': { backgroundColor: '#05599d' },
              marginTop: 2
            }}
            onClick={handleCancelOrder}
          >
            Cancel Order
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Order;
