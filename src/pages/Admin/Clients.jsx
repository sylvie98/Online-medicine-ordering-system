import React, { useEffect, useState } from 'react';
import { Typography, Paper, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    const groupedClients = orders.reduce((acc, order) => {
      if (!acc[order.clientName]) {
        acc[order.clientName] = [];
      }
      acc[order.clientName].push(order);
      return acc;
    }, {});

    const clientList = Object.keys(groupedClients).map((clientName, index) => ({
      id: index + 1,
      name: clientName,
      orders: groupedClients[clientName],
    }));

    setClients(clientList);
  };

  const handleDelete = (clientName) => {
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = allOrders.filter(order => order.clientName !== clientName);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    loadClients();
  };

  return (
    <Box sx={{ padding: '20px', marginTop: '80px', marginLeft: '25%', marginRight: 'auto', width: '65%' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Client Orders
      </Typography>
      <Paper sx={{ padding: '20px' }}>
        {clients.map((client) => (
          <Box key={client.id} sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">{client.name}</Typography>
            {client.orders.map((order, index) => (
              <Card sx={{ display: 'flex', marginTop: '10px', backgroundColor: '#f5f5f5' }} key={index}>
                {order.products && order.products.length > 0 ? (
                  <>
                    <CardMedia
                      component="img"
                      sx={{ width: 170}}
                      image={order.products[0].image}
                      alt={order.products[0].name}
                    />
                    <CardContent>
                      <Typography variant="body1">Email: {order.clientEmail}</Typography>
                      <Typography variant="body1">Phone: {order.clientPhone}</Typography>
                      <Typography variant="body1">
                        Products: {order.products.map((item) => `${item.name} (${item.quantity})`).join(', ')}
                      </Typography>
                      <Button
                        variant="contained" 
                        onClick={() => handleDelete(client.name)}
                        sx={{ mt: 2 ,backgroundColor: '#063970','&:hover': { backgroundColor: '#05599d' }}}
                      >
                        Delete Client Order
                      </Button>
                    </CardContent>
                  </>
                ) : (
                  <Typography>No products found for this order.</Typography>
                )}
              </Card>
            ))}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Clients;
