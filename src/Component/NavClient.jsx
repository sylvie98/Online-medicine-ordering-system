import React, { useState } from 'react'
import { AppBar,Button,Tab,Tabs,Toolbar,Typography,useTheme,useMediaQuery} from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from "react-router-dom";
import DrawerClient from './DrawerClient';
import AccountMenu from './AccountMenu';
import DarkModeToggle from './DarkModeToggle';
const PAGES=[
  { name: "Catalog", path: "/catalog" },
  {name:"Cart", path:"/cart"},
  {name:"Order", path:"/order"},
];
const NavClient = () => {
  const [value, setValue]=useState();
  const theme= useTheme();
  console.log(theme);
  const isMatch =useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{background:"#063970"}}>
          <Toolbar>
            <LocalHospitalIcon/>
            {
              isMatch ? (
                <>
                 <Typography sx={{paddingLeft:'5%'}}>
                   MEDICINE
                 </Typography>
                 <DrawerClient/>
                </>
              ):(
                <>
                <Tabs sx={{marginLeft:'auto'}} textColor='inherit' value={value} onChange={(e,value) => setValue(value)} indicatorColor='secondary'>
                  {
                    PAGES.map((page,index) =>(
                      <Tab key={index} label= {page.name} component={Link} to={page.path}/>
                    ))
                  }
            </Tabs>
            <DarkModeToggle/>
            <AccountMenu/>
                </>
              )
            }
            
          </Toolbar>
          
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default NavClient
