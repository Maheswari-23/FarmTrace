import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all three main components
import LandingPage from './components/landing/pages/LandingPage';
import AdminPortal from './components/admin/Admin';
import BusinessPortal from './components/business/BusinessPortal';
import FarmersPortal from './components/farmers/FarmersPortal';

import './App.css'; 

function App() {
  return (
    <Routes>
      {/* Route for the public-facing landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route for the secure admin portal */}
      <Route path="/admin" element={<AdminPortal />} />

      {/* Route for the secure business portal */}
      <Route path="/business" element={<BusinessPortal />} />

       {/* Add the new route for the Farmers Portal */}
      <Route path="/farmer" element={<FarmersPortal />} />
    </Routes>
  );
}

export default App;