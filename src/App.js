import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Navabar from './Component/Navabar';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';
import Add from './pages/Admin/Add';
import View from './pages/Admin/View';
import Update from './pages/Admin/Update';
import Clients from './pages/Admin/Clients';
import { MedicineProvider } from './pages/Admin/MedicineContext';
import AdminLayout from '../src/pages/Admin/AdminLayout';
import Order from './pages/Order/Order';
import Footer from './Component/Footer';
import Medicine from './pages/Medicine/Medicine';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OrderTrends from './pages/Admin/OrderTrends';
import PopularMedicines from './pages/Admin/PopularMedicines';

function App() {
  return (
    <MedicineProvider>
      <div className="App">
        <BrowserRouter>
          <Navabar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/order' element={<Order/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="add" element={<Add />} />
              <Route path="view/:id" element={<View />} />
              <Route path="update/:id" element={<Update />} />
              <Route path="orderTrends" element={<OrderTrends />} />
              <Route path="popularMedicine" element={<PopularMedicines />} />
              <Route path="clients" element={<Clients />} />
              
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </MedicineProvider>
  );
}

export default App;
