import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all components
import LandingPage from './components/landing/pages/LandingPage';
import Login from './components/landing/pages/Login';
import AdminPortal from './components/admin/Admin';
import BusinessPortal from './components/business/BusinessPortal';
import FarmersPortal from './components/farmers/FarmersPortal';
import Retailer from './components/retailer/Retailer';


import './App.css';

function App() {
  return (
    <Routes>
      {/* Route for the public-facing landing page */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Route for the login page */}
      <Route path="/login" element={<Login />} />

      {/* Route for the secure admin portal */}
      <Route path="/admin" element={<AdminPortal />} />

      {/* Route for the secure business portal */}
      <Route path="/business" element={<BusinessPortal />} />

      {/* Route for the farmers portal */}
      <Route path="/farmer" element={<FarmersPortal />} />

      
      <Route path="/retailer" element={<Retailer />} />
    </Routes>
  );
}

export default App;