import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Paper, Typography, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ClientLevelChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const clientLevelCount = orders.reduce((acc, order) => {
      if (order.clientName) {
        acc[order.clientName] = (acc[order.clientName] || 0) + 1;
      }
      return acc;
    }, {});

    if (Object.keys(clientLevelCount).length === 0) {
      setChartData({
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: ['#36A2EB', '#FF6384'],
        }],
      });
      return;
    }

    const levels = Object.values(clientLevelCount);
    setChartData({
      labels: ['Frequent', 'Occasional'],
      datasets: [
        {
          data: [
            levels.filter(level => level > 1).length, // Frequent clients
            levels.filter(level => level <= 1).length, // Occasional clients
          ],
          backgroundColor: ['#36A2EB', '#FF6384'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    });
  }, []);

  return (
    <Box style={{ padding: '20px', marginTop: '80px', marginLeft: '30%', width: '55%' }}>
      <Typography variant="h4" gutterBottom>
        Client Levels Overview
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Client Level Distribution',
              },
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default ClientLevelChart;
