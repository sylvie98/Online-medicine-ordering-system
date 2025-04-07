import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Paper,
  Typography,
  Box,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null); // Set initial value as null for safe check

  useEffect(() => {
    try {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      console.log('Orders from localStorage:', orders);

      const medicineCount = orders.reduce((acc, order) => {
        if (order.products && Array.isArray(order.products)) {
          order.products.forEach((product) => {
            if (!acc[product.productName]) {
              acc[product.productName] = 0;
            }
            acc[product.productName] += product.quantity;
          });
        }
        return acc;
      }, {});

      const labels = Object.keys(medicineCount);
      const data = Object.values(medicineCount);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Medicines Ordered',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error('Error processing orders from localStorage:', error);
    }
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ordered Medicines by Quantity',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box sx={{ padding: 3, mt: 10, mx: 'auto', width: '80%' }}>
      <Typography variant="h4" gutterBottom>
        Medicine Orders Overview
      </Typography>
      <Paper sx={{ padding: 3 }}>
        {chartData && chartData.labels?.length > 0 && chartData.datasets?.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <Typography>No data available to display the chart.</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ChartComponent;
