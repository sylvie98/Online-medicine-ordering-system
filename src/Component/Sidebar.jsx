// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box',marginTop:'80px' },
    }}
  >
    <List>
      <ListItem button component={Link} to="/admin">
        <ListItemText primary="Medicine" />
      </ListItem>
      <ListItem button component={Link} to="/admin/clients">
        <ListItemText primary="Clients" />
      </ListItem>
      <ListItem button component={Link} to="/admin/orderTrends">
        <ListItemText primary="OrderTrends" />
      </ListItem>
      <ListItem button component={Link} to="/admin/popularMedicine">
        <ListItemText primary="popularMedicine" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
