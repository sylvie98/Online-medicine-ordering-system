import React, { useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from '../../Component/Sidebar'
function Admin() {
  const { medicines, deleteMedicine } = useContext(MedicineContext);

  return (
    <div style={{ padding: '20px', marginTop:'80px'}}>
      <Sidebar/>
      <Link to="/admin/add">
        <Button variant="contained" color="primary" style={{ margin: '10px  0 ',marginLeft: '30%'}}>
          Add New Medicine
        </Button>
      </Link>
      <TableContainer component={Paper} style={{ marginLeft: '30%', width: '55%'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
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
                    <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                      View
                    </Button>
                  </Link>
                  <Link to={`/admin/update/${med.id}`}>
                    <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
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
