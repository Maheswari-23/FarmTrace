import React, { useState } from 'react';
import '../business/styles/BusinessPortal.css'; // Adjust path if needed

// Components
import Header from './BusinessHeader';
import Sidebar from './BusinessSidebar';

// Pages
import Dashboard from './pages/BusinessDashboard';
import Inventory from './pages/Inventory';
import ReceiveGoods from './pages/ReceiveGoods';
import TransferHistory from './pages/TransferHistory';

const BusinessPortal = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // FIX 1: Initialize state with the lowercase ID
  const [activePage, setActivePage] = useState('dashboard');

  // Function to toggle the sidebar
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  // Function to render active page dynamically
  const renderActivePage = () => {
    // FIX 2: Use lowercase IDs in the switch statement to match the state
    switch (activePage) {
      case 'dashboard':
        return <Dashboard setActivePage={setActivePage} />;
      case 'inventory':
        return <Inventory />;
      case 'receive':
        return <ReceiveGoods />;
      case 'transfer':
        return <TransferHistory />;
      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div
      className={`business-portal ${
        isSidebarCollapsed ? 'sidebar-collapsed' : ''
      }`}
    >
      {/* FIX 3: Pass the toggle handler to the Header */}
      <Header onSidebarToggle={handleSidebarToggle} />

      {/* FIX 4: Pass props with the correct names to the Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        activeSection={activePage}
        onSectionChange={setActivePage}
      />

      {/* Main Content */}
      <main className="main-content">
        <div className="page-container">{renderActivePage()}</div>
      </main>
    </div>
  );
};

export default BusinessPortal;