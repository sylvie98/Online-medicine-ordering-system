// catalog/Catalog.jsx
import React from "react";
import {Container,Grid,Card,CardContent,CardMedia,Typography,Button} from "@mui/material";
import { Link} from 'react-router-dom';

const medicines = [
  { id: 1, name: "Allergan", price: 5000, image: "/Allergan.jpg" },
  { id: 2, name: "Fluoxetine", price: 8000, image: "/Fluoxetine.jpg" },
  { id: 3, name: "German", price: 1000, image: "/german.jpg" },
  { id: 4, name: "Antihistamine", price: 3500, image: "/Antihistamine.jpg" },
  { id: 5, name: "Capsules", price: 8500, image: "/capsules.jpg" },
  { id: 6, name: "US-HEALTH-MEDICINE", price: 10000, image: "/US-HEALTH-MEDICINE.jpg" },
  { id: 7, name: "Prescription Drug", price: 5500, image: "/Prescription Drug Background.jpg" },
  { id: 8, name: "Advil and ibuprofen", price: 2500, image: "/Advil and ibuprofen.jpg" },
  { id: 9, name: "Getty", price: 4000, image: "/gettyimages-458635887-612x612.jpg" },
  { id: 10, name: "Cialis tablets", price: 7000, image: "/Cialis tablets.jpg" }
];

function Catalog() {
  const handleAddToCart = (medicine) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingCart.findIndex((item) => item.id === medicine.id);

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push({ ...medicine, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${medicine.name} added to cart`);
  };

  return (
    <Container sx={{ paddingTop: 10 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Medicine Catalog
      </Typography>
      <Grid container spacing={3}>
        {medicines.map((med) => (
          <Grid item xs={12} sm={6} md={4} key={med.id}>
            <Card>
              <CardMedia component="img" height="140" image={med.image} alt={med.name} />
              <CardContent>
                <Typography variant="h6">{med.name}</Typography>
                <Typography variant="body1">{med.price} Frw</Typography>
                <Link to={"/cart"}>
                <Button
                  variant="contained"
                  onClick={() => handleAddToCart(med)}
                  sx={{ mt: 1,backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' }  }}
                >
                  Add to Cart
                </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Catalog;
