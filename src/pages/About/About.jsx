import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Link, Button } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginTop: '80px' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#063970', fontSize: { xs: '2rem', sm: '2.5rem' } }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, fontSize: { xs: '16px', sm: '18px' } }}>
          Welcome to our Online Medicine Ordering System! Our platform is designed to make healthcare
          more accessible and convenient for everyone. With just a few clicks, you can order
          prescription and over-the-counter medicines from the comfort of your home.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box sx={{ marginBottom: '40px' }}>
        <Card sx={{ boxShadow: 3, borderRadius: 2, width: '100%', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#063970' }}>
              Our Mission
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                lineHeight: 1.8,
                fontSize: '16px',
                backgroundColor: '#e1f5fe',
                padding: '10px',
                borderRadius: '4px',
              }}
            >
              Our mission is to bridge the gap between patients and pharmacies by providing a seamless
              and reliable online service. We aim to ensure that everyone has access to the medications
              they need, when they need them.
            </Typography>
          </CardContent>
        </Card>
      </Box>

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
            <Grid item xs={12} sm={6} md={4} key={index}>
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
    </Container>
  );
};

export default About;
