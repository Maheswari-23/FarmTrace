import React from 'react';
import '../styles/BusinessDashboard.css';

// SVG Icon Components for clarity
const BoxIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const TruckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
const TransferIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>;
const AlertIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;


const BusinessDashboard = () => {
  const kpis = [
    { title: "Batches in Inventory", value: "1,245", change: "+5.2%", changeType: 'positive', icon: <BoxIcon /> },
    { title: "Incoming Deliveries", value: "8", change: "+12.0%", changeType: 'positive', icon: <TruckIcon /> },
    { title: "Outgoing Transfers", value: "26", change: "+2.1%", changeType: 'positive', icon: <TransferIcon /> },
    { title: "Stock Alerts", value: "3", change: "-1.5%", changeType: 'negative', icon: <AlertIcon /> },
  ];

  const recentActivities = [
    { id: 1, message: "Received 100kg Tomatoes from Farmer Ramesh.", time: "2 hours ago", icon: <TruckIcon/> },
    { id: 2, message: "Transferred 50kg Mangoes to Retailer Priya.", time: "5 hours ago", icon: <TransferIcon/> }, 
    { id: 3, message: "Low stock warning for 'Organic Onions'.", time: "8 hours ago", icon: <AlertIcon/> },
    { id: 4, message: "Inventory count for 'Basmati Rice' updated.", time: "1 day ago", icon: <BoxIcon/> },
  ];

  return (
    <div className="business-dashboard-container">
      {/* Page Header */}
      <div className="business-dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's a summary of your business activities.</p>
      </div>

      {/* KPI Cards */}
      <div id="business-kpi-grid">
        {kpis.map((kpi, index) => (
          <div className="business-kpi-card" key={index}>
            <div className="business-kpi-card__icon">{kpi.icon}</div>
            <div className="business-kpi-card__info">
              <div className="business-kpi-card__header">
                <span className="business-kpi-card__value">{kpi.value}</span>
                <span className={`business-kpi-card__change business-kpi-card__change--${kpi.changeType}`}>
                  {kpi.change}
                </span>
              </div>
              <p className="business-kpi-card__title">{kpi.title}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Content Grid */}
      <div id="business-main-content-grid">
        {/* Left Column: Chart */}
        <div className="business-dashboard-card">
          <h3 className="business-dashboard-card__title">Inventory Volume Trend (Last 30 Days)</h3>
          <div className="business-chart-placeholder">
            📈 Interactive Chart Component Goes Here
          </div>
        </div>
        
        {/* Right Column: Activity Feed */}
        <div className="business-dashboard-card">
          <h3 className="business-dashboard-card__title">Recent Activity</h3>
          <ul className="business-activity-list">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="business-activity-item">
                <div className="business-activity-item__icon">{activity.icon}</div>
                <div className="business-activity-item__details">
                  <p className="business-activity-item__message">{activity.message}</p>

                  <p className="business-activity-item__time">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;