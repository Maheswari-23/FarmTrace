import React, { useState } from 'react';
import './styles/AdminPortal.css'; // Updated CSS path

import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import TransactionExplorer from './pages/TransactionExplorer';
import AnalyticsReports from './pages/AnalyticsReports';

const Admin = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'User Management':
        return <UserManagement />;
      case 'Transaction Explorer':
        return <TransactionExplorer />;
      case 'Analytics & Reports':
        return <AnalyticsReports />;
      // Add other pages like 'Dispute Center' here
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`admin-portal ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
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

export default Admin;