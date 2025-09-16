import React, { useState } from 'react';
import './styles/BusinessPortal.css'; // Path to the new CSS file

import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import ReceiveGoods from './pages/ReceiveGoods';
import TransferHistory from './pages/TransferHistory';

const BusinessPortal = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard setActivePage={setActivePage} />;
      case 'Inventory':
        return <Inventory />;
      case 'Receive Goods':
        return <ReceiveGoods />;
      case 'Transfer History':
        return <TransferHistory />;
      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div className={`business-portal ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Header />
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className="main-content">
        <div className="page-container">
          {renderActivePage()}
        </div>
      </main>
    </div>
  );
};

export default BusinessPortal;