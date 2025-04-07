import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from '../../Component/Sidebar'
function Admin() {
  const { medicines, deleteMedicine } = useContext(MedicineContext);

  return (
    <div style={{ padding: '20px', marginTop:'10%',marginBottom:'14%'}}>
      <Sidebar/>
      <TableContainer component={Paper} style={{ marginLeft: '25%', width: '65%'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines.map((med) => (
              <TableRow key={med.id}>
                <TableCell>{med.id}</TableCell>
                <TableCell>{med.name}</TableCell>
                <TableCell>{med.price}</TableCell>
                <TableCell>
                  <Link to={`/admin/view/${med.id}`}>
                    <Button variant="contained" sx={{ marginLeft: '10px',backgroundColor:'#05599d','&:hover': { backgroundColor: '#063970' } }}>
                      View
                    </Button>
                  </Link>
                  <Link to={`/admin/update/${med.id}`}>
                    <Button variant="contained" color="secondary" sx={{ marginLeft: '10px' }}>
                      Update
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteMedicine(med.id)}
                  >
                    Delete
                  </Button>
                  <Link to="/admin/add">
                   <Button variant="contained" sx={{ marginLeft: '5%',backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' }}}>
                     Add New Medicine
                  </Button>
                </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Admin;
