import React, { useState, useContext } from 'react';
import { MedicineContext } from './MedicineContext';
import {Button,Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,TablePagination,TableSortLabel,TextField,Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from '../../Component/Sidebar';

function Admin() {
  const { medicines, deleteMedicine } = useContext(MedicineContext);
  
  const [order, setOrder] = useState('asc'); 
  const [orderBy, setOrderBy] = useState('name'); 
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [openDialog, setOpenDialog] = useState(false); 
  const [medicineToDelete, setMedicineToDelete] = useState(null); 

  // Sorting function
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Sort the data
  const sortData = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const comparator = (a, b) => {
    if (orderBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (orderBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  };

  // Filter the medicines based on search query
  const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate the medicines
  const paginatedMedicines = sortData(filteredMedicines, comparator).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Open delete confirmation dialog
  const handleOpenDialog = (id) => {
    setMedicineToDelete(id);
    setOpenDialog(true);
  };

  // Close delete confirmation dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setMedicineToDelete(null);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    deleteMedicine(medicineToDelete);
    handleCloseDialog(); // Close dialog after confirming deletion
  };

  return (
    <div style={{ padding: '20px', marginTop: '10%', marginBottom: '14%' }}>
      <Sidebar />
      <TextField
        label="Search Medicines"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        sx={{ marginBottom: 3, marginLeft: '20%', width: '30%' }}
      />
      <TableContainer component={Paper} style={{ marginLeft: '20%', width: '75%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === 'id' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleRequestSort('id')}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'name' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === 'price' ? order : false}>
                <TableSortLabel
                  active={orderBy === 'price'}
                  direction={orderBy === 'price' ? order : 'asc'}
                  onClick={() => handleRequestSort('price')}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedMedicines.map((med) => (
              <TableRow key={med.id}>
                <TableCell>{med.id}</TableCell>
                <TableCell>{med.name}</TableCell>
                <TableCell>{med.price}</TableCell>
                <TableCell>
                  <img src={med.image} alt={med.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </TableCell>
                
                <TableCell>
                  <Link to={`/admin/view/${med.id}`}>
                    <Button variant="contained" sx={{ marginLeft: '10px', backgroundColor: '#05599d', '&:hover': { backgroundColor: '#063970' } }}>
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
                    onClick={() => handleOpenDialog(med.id)} 
                  >
                    Delete
                  </Button>
                  <Link to="/admin/add">
                    <Button variant="contained" sx={{ marginLeft: '5%', backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }}>
                      Add 
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredMedicines.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Medicine</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this medicine?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Admin;
