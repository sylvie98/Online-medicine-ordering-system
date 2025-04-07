import React, { useEffect, useState } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Card, CardContent, CardMedia } from '@mui/material';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Group orders by clientName
    const groupedClients = orders.reduce((acc, order) => {
      if (!acc[order.clientName]) {
        acc[order.clientName] = [];
      }
      acc[order.clientName].push(order);
      return acc;
    }, {});

    // Convert the grouped data into a list of client objects
    const clientList = Object.keys(groupedClients).map((clientName, index) => ({
      id: index + 1,
      name: clientName,
      orders: groupedClients[clientName],
    }));

    setClients(clientList);
  }, []);

  return (
    <div style={{ padding: '20px', marginTop: '80px', marginLeft: '30%', width: '55%' }}>
      <Typography variant="h4">Client List</Typography>
      <Paper style={{ padding: '10px', marginTop: '10px' }}>
        <List>
          {clients.length === 0 ? (
            <Typography>No clients found.</Typography>
          ) : (
            clients.map(client => (
              <div key={client.id}>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>
                  {client.name}
                </Typography>
                <ListItem>
                  <ListItemText primary={`Phone: ${client.orders[0]?.phone || 'N/A'}`} />
                  <ListItemText primary={`Email: ${client.orders[0]?.email || 'N/A'}`} />
                </ListItem>

                <Typography variant="h6" style={{ marginTop: '20px' }}>
                  Products Ordered:
                </Typography>
                {client.orders.map((order, index) => (
                  <Card key={index} style={{ marginBottom: '10px' }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={order.productImage}
                      alt={order.productName}
                    />
                    <CardContent>
                      <Typography variant="subtitle1">{order.productName}</Typography>
                      <Typography>
                        {order.quantity} × {order.price} Frw
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))
          )}
        </List>
      </Paper>
    </div>
  );
};

export default Clients;
