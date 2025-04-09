import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu'; // For hamburger menu
import { useMediaQuery } from '@mui/material'; // Hook to check screen size

const Sidebar = () => {
  const [open, setOpen] = useState(false); // For toggle in smaller screens
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Check if screen size is small
  
  const handleDrawerToggle = () => {
    setOpen(!open); // Toggle drawer visibility
  };

  return (
    <>
      {isSmallScreen && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ position: 'absolute', top: 16, left: 16 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isSmallScreen ? 'temporary' : 'permanent'} // Temporary on small screen, permanent on large screen
        open={open}
        onClose={handleDrawerToggle} // Close on small screens
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', marginTop: '80px' },
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ marginLeft: 4, marginTop: 4 }}>
          Dashboard
        </Typography>
        <List sx={{ marginLeft: 2 }}>
          <ListItem button component={Link} to="/admin">
            <LocalHospitalIcon sx={{ marginRight: 2 }} />
            <ListItemText primary="Medicine" />
          </ListItem>
          <ListItem button component={Link} to="/admin/clients">
            <PeopleOutlineIcon sx={{ marginRight: 2 }} />
            <ListItemText primary="Clients" />
          </ListItem>
          {/* <ListItem button component={Link} to="/admin/orderTrends">
            <TrendingUpIcon sx={{ marginRight: 2 }} />
            <ListItemText primary="OrderTrends" />
          </ListItem> */}
          <ListItem button component={Link} to="/admin/popularMedicine">
            <BarChartIcon sx={{ marginRight: 2 }} />
            <ListItemText primary="Popular Medicine" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
