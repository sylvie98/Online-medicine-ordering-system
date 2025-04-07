import React, { useState } from 'react'
import { AppBar,Button,Tab,Tabs,Toolbar,Typography,useTheme,useMediaQuery} from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from "react-router-dom";
import DrawerComp from './DrawerComp';
const PAGES=[
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  {name:"Cart", path:"/cart"},
  { name: "Admin", path: "/admin" }
];
const Navabar = () => {
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
                 <DrawerComp/>
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
            <Button sx={{marginLeft:"auto",background:"#8B0000"}} variant='contained' component={Link} to="/login">Login</Button>
            <Button sx={{marginLeft:"15px",background:"#8B0000"}} variant="contained" component={Link} to="/register">Register</Button>
                </>
              )
            }
            
          </Toolbar>
          
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default Navabar
