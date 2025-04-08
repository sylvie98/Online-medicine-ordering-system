import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Button, Box } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NavClient from "../../Component/NavClient";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    updateCart(updated);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    navigate("/order", { state: { cart } });
  };

  return (
    <>
    <NavClient/>
    <Container sx={{ pt: 10 ,marginBottom:'17%'}}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cart.map(item => (
            <Grid item xs={12} key={item.id}>
              <Card sx={{ display: "flex", alignItems: "center", p: 2 ,background:'#f0f3f4 '}}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name || "Product image"}
                  sx={{ width: 100, height: 100, objectFit: "cover", mr: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>Unit Price: {item.price.toLocaleString()} Frw</Typography>
                  <Typography>
                    Total: {(item.price * item.quantity).toLocaleString()} Frw
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <IconButton onClick={() => decreaseQty(item.id)} aria-label="Decrease quantity">
                      <Remove />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton onClick={() => increaseQty(item.id)} aria-label="Increase quantity">
                      <Add />
                    </IconButton>
                    <IconButton
                      onClick={() => removeItem(item.id)}
                      color="error"
                      aria-label="Remove item"
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography variant="h6">
              Grand Total: {getTotal().toLocaleString()} Frw
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2 ,backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' }}}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
    </>
  );
}

export default Cart;
