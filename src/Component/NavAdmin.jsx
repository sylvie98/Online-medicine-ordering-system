import React, { useState } from 'react'
import { AppBar,Button,Tab,Tabs,Toolbar,Typography,useTheme,useMediaQuery} from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link } from "react-router-dom";
import DrawerAdmin from './DrawerAdmin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountMenu from './AccountMenu';


const PAGES=[
//   { name: "Dashboard", path: "/admin" }
];
const NavAdmin = () => {
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
                 <DrawerAdmin/>
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
            <AccountMenu />
            {/* <AccountCircleIcon/>
            <Button sx={{marginLeft:"auto",background:"white",color:'#063970','&:hover': { backgroundColor: '#e74c3c ' }}} variant='contained' component={Link} to="/login">Logout</Button> */}
                </>
              )
            }
            
          </Toolbar>
          
        </AppBar>
      </React.Fragment>
    </div>
  )
}

export default NavAdmin
