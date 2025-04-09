//this page help make responsive on navabar when 
import { List, ListItemButton, ListItemIcon, ListItemText ,Drawer, IconButton} from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
const PAGES=[
  { name: "Medicine", path: "/admin" },
  { name: "Clients", path: "/admin/clients" },
  { name: "popularMedicine", path: "/admin/popularMedicine" },
  { name: "Logout", path: "/login" },
//   { name: "Register", path: "/register" },
  // { name: "Catalog", path: "/catalog" },
  // {name:"Cart", path:"/cart"},
  // { name: "Admin", path: "/admin" },
  // { name: "Logout", path: "/login" }
];
const DrawerAdmin = () => {
  const [openDrawer,setOpenDrawer]= useState(false);
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
          <List>
            {
              PAGES.map((page,index) =>(
               <ListItemButton onClick={() => setOpenDrawer(false)} key={index} component={Link} to={page.path}>
                 <ListItemIcon>
                    <ListItemText>{page.name}</ListItemText>
                </ListItemIcon>
               </ListItemButton>
              ))
            }
          </List>
        </Drawer>
        <IconButton sx={{color:'white',marginLeft:'auto'}}  onClick={()=>setOpenDrawer(!openDrawer)}>
          <DensityMediumIcon/>
        </IconButton>
    </React.Fragment>
  ); 
};

export default DrawerAdmin 
