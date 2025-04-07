import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: 'Allergan', price: '5000 Frw', image: '/Allergan.jpg' },
  { id: 2, name: 'Fluoxetine', price: '8000 Frw', image: '/Fluoxetine.jpg' },
  { id: 3, name: 'German', price: '1000 Frw', image: '/german.jpg' },
  { id: 4, name: "Antihistamine", price: 3500, image: "/Antihistamine.jpg" },
  { id: 5, name: "Capsules", price: 8500, image: "/capsules.jpg" },
];

function Home() {
  return (
    <div>
      {/* Welcome Section */}
      <Container sx={{ pt: 5, textAlign: 'center', marginTop: '80px' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Online Medicine Store
        </Typography>
        <Typography variant="body1">
          Browse our catalog and order medicines from the comfort of your home.
        </Typography>
        <Button variant="contained" component={Link} to="/medicine" sx={{ mt: 2, backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }}>
          Browse Catalog
        </Button>
      </Container>

      {/* Featured Products Section */}
      <Container sx={{ pt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Button variant="contained" fullWidth sx={{ backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Container sx={{ pt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: 'Wide Range of Products', description: 'We offer a variety of medicines and healthcare products to meet your needs.' },
            { title: 'Fast Delivery', description: 'Get your medicines delivered to your doorstep quickly and reliably.' },
            { title: 'Secure Payments', description: 'Enjoy safe and secure payment options for a hassle-free experience.' },
            { title: '24/7 Customer Support', description: 'Our team is available round the clock to assist you with any questions or issues.' },
            { title: 'User-Friendly Interface', description: 'Enjoy a seamless shopping experience with our easy-to-navigate website.' },
            { title: 'Expert Advice', description: 'Get expert recommendations on the best healthcare products tailored to your needs.' }
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Card sx={{ boxShadow: 3, borderRadius: 2, width: '100%', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#063970' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
