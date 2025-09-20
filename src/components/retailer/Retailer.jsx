import React, { useState } from 'react';

// Import Layout Components
import RetailerHeader from './RetailerHeader';
import RetailerSidebar from './RetailerSidebar';

// Import Page Components
import RetailerDashboardPage from './pages/retailerDashboardPage';
import RetailerInventoryPage from './pages/retailerInventoryPage';
import RetailerOrdersPage from './pages/retailerOrdersPage';
import RetailerAnalyticsPage from './pages/retailerAnalyticsPage';
import RetailerQRHubPage from './pages/retailerQRHubPage';
import RetailerSupportPage from './pages/retailerSupportPage';


function Retailer() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderActivePage = () => {
    switch (activeSection) {
      case 'dashboard': return <RetailerDashboardPage />;
      case 'inventory-provenance': return <RetailerInventoryPage />;
      case 'orders-payments': return <RetailerOrdersPage />;
      case 'analytics-insights': return <RetailerAnalyticsPage />;
      case 'qr-verification': return <RetailerQRHubPage />;
      case 'dispute-support': return <RetailerSupportPage />;
      default: return <RetailerDashboardPage />;
    }
  };

  return (
    <div className="app-container">
      <RetailerHeader onSidebarToggle={toggleSidebar} />
      <div className="main-layout">
        <RetailerSidebar 
          isCollapsed={isSidebarCollapsed}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main
          className="main-content"
          style={{
            marginLeft: isSidebarCollapsed ? '80px' : '250px',
            transition: 'margin-left 0.3s ease-in-out'
          }}
        >
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
}

export default Retailer;
