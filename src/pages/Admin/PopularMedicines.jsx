// PopularMedicines.jsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography, Box } from '@mui/material';

const PopularMedicines = () => {
  const [medData, setMedData] = useState([]);

  useEffect(() => {
    loadPopularMedicines();
  }, []);

  const loadPopularMedicines = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const medicineCounts = orders.reduce((acc, order) => {
      if (Array.isArray(order.products)) {
        order.products.forEach((product) => {
          // Assuming each product has a "name" and "quantity" property
          if (!acc[product.name]) {
            acc[product.name] = 0;
          }
          acc[product.name] += product.quantity;
        });
      }
      return acc;
    }, {});

    const chartData = Object.keys(medicineCounts).map((name) => ({
      name,
      quantity: medicineCounts[name],
    }));

    setMedData(chartData);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', marginTop: '80px', marginBottom:'14%', marginLeft:'20%' }}>
      <Typography variant="h5" gutterBottom>
        Popular Medicines Ordered
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={medData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PopularMedicines;
