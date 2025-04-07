import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

const OrderTrends = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    loadOrderData();
  }, []);

  const loadOrderData = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const formattedData = orders.reduce((acc, order) => {
      const orderDate = new Date(order.date);
      const day = orderDate.toLocaleDateString();

      if (!acc[day]) {
        acc[day] = 0;
      }
      acc[day] += 1;
      return acc;
    }, {});

    const chartData = Object.keys(formattedData).map((key) => ({
      date: key,
      orders: formattedData[key],
    }));

    setOrderData(chartData);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '80px',marginLeft:'20%',marginBottom:'15%' }}>
      <Typography variant="h5" gutterBottom>
        Order Trends Over Time
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={orderData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default OrderTrends;
