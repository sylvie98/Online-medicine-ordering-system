import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: 'Allergan', price: '5000 Frw', image: '/Allergan.jpg' },
  { id: 2, name: 'Fluoxetine', price: '8000 Frw', image: '/Fluoxetine.jpg' },
  { id: 3, name: 'German', price: '1000 Frw', image: '/german.jpg' }
];

function Home() {
  return (
    <div>
      {/* Header Section */}
        <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>
          Online Medicine Ordering System
        </Typography>
   

      {/* Welcome Section */}
      <Container sx={{ pt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Online Medicine Store
        </Typography>
        <Typography variant="body1" paragraph>
          Browse our catalog and order medicines from the comfort of your home.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/catalog">
          Browse Catalog
        </Button>
      </Container>

      {/* Featured Products */}
      <Container sx={{ pt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={4} key={product.id}>
              <Card>
                <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2">{product.price}</Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call-to-Action Section */}
      <Container sx={{ pt: 5, textAlign: 'center' }}>
        <Typography variant="h5" paragraph>
          Want to start shopping now? Head over to our catalog and explore our wide range of medicines.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/catalog">
          Browse Now
        </Button>
      </Container>

     
    </div>
  );
}

export default Home;
