import React from 'react'
import { Typography} from '@mui/material';
const Footer = () => {
  return (
    <div>
       {/* Footer Section */}
       <footer style={{ backgroundColor:'#063970', padding: '10px', color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Online Medicine Ordering System. All Rights Reserved.
        </Typography>
        {/* <Typography variant="body2">
         Developer by Sylvie.
        </Typography> */}
      </footer>
    </div>
  )
}

export default Footer
