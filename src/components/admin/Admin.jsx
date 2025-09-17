import React, { useState } from 'react';
import './styles/AdminPortal.css'; // Your CSS path

import Header from './AdminHeader';
import Sidebar from './AdminSidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import TransactionExplorer from './pages/TransactionExplorer';
import AnalyticsReports from './pages/AnalyticsReports';
// You can create and import the DisputeCenter page component as well
// import DisputeCenter from './pages/DisputeCenter'; 

const Admin = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // Use the lowercase ID for state management, starting with 'dashboard'
  const [activePage, setActivePage] = useState('dashboard');

  // Function to toggle the sidebar's collapsed state
  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  const renderActivePage = () => {
    // This switch now correctly checks against the lowercase IDs from the sidebar
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'user-management':
        return <UserManagement />;
      case 'transaction-explorer':
        return <TransactionExplorer />;
      case 'analytics':
        return <AnalyticsReports />;
      case 'dispute-center':
        // return <DisputeCenter />; // Render the actual component when ready
        return <h2>Dispute Center</h2>; // Placeholder content
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`admin-portal ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* 1. Pass the sidebar toggle function to the Header */}
      <Header onSidebarToggle={handleSidebarToggle} />
      
      {/* 2. Pass props with the correct names to the Sidebar */}
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        activeSection={activePage}
        onSectionChange={setActivePage}
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