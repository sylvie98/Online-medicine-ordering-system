// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box',marginTop:'80px' },
    }}
  >
    <Typography variant="h5" gutterBottom sx={{marginLeft:4, marginTop:4}}>
      Dashboard
    </Typography>
    <List sx={{marginLeft:2}}>
      <ListItem button component={Link} to="/admin">
        <LocalHospitalIcon sx={{ marginRight: 2 }} />
        <ListItemText primary="Medicine" />
      </ListItem>
      <ListItem button component={Link} to="/admin/clients">
        <PeopleOutlineIcon sx={{ marginRight: 2 }} />  
        <ListItemText primary="Clients" />
      </ListItem>
      <ListItem button component={Link} to="/admin/orderTrends">
        <TrendingUpIcon sx={{ marginRight: 2 }} />
        <ListItemText primary="OrderTrends" />
      </ListItem>
      <ListItem button component={Link} to="/admin/popularMedicine">
        <BarChartIcon sx={{ marginRight: 2 }} />
        <ListItemText primary="popularMedicine" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
