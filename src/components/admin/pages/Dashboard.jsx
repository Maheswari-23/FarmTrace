import React from 'react';
import '../styles/Dashboard.css'; // Import the new stylesheet

// Helper components for new SVG icons
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const BoxIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);
const BuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="7" y1="7" x2="7.01" y2="7"></line><line x1="12" y1="7" x2="12.01" y2="7"></line><line x1="17" y1="7" x2="17.01" y2="7"></line><line x1="7" y1="12" x2="7.01" y2="12"></line><line x1="12" y1="12" x2="12.01" y2="12"></line><line x1="17" y1="12" x2="17.01" y2="12"></line><line x1="7" y1="17" x2="7.01" y2="17"></line><line x1="12" y1="17" x2="12.01" y2="17"></line><line x1="17" y1="17" x2="17.01" y2="17"></line></svg>
);
const DashboardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
);


const Dashboard = () => {
  // Sample data for KPI cards
  const kpiData = [
    { title: 'Total Registered Farmers', value: '12,847', change: '+8.2%', changeType: 'positive', icon: <UserIcon /> },
    { title: 'Total Businesses', value: '2,156', change: '+12.5%', changeType: 'positive', icon: <BuildingIcon /> },
    { title: 'Produce Batches (Today)', value: '1,284', change: '+5.1%', changeType: 'positive', icon: <BoxIcon /> },
    { title: 'Pending Verifications', value: '156', change: '-2.3%', changeType: 'negative', icon: <AlertIcon /> }
  ];

  // Sample activity data with new SVG icons
  const recentActivities = [
    { id: 1, message: 'Farmer Rajesh Kumar from Cuttack has registered', time: '2 minutes ago', icon: <UserIcon /> },
    { id: 2, message: 'Dispute #D001234 has been opened', time: '15 minutes ago', icon: <AlertIcon /> },
    { id: 3, message: 'Batch #B445566 verified by quality inspector', time: '32 minutes ago', icon: <CheckIcon /> },
    { id: 4, message: 'New transaction: 500kg Rice from Puri to Bhubaneswar', time: '45 minutes ago', icon: <BoxIcon /> },
    { id: 5, message: 'Distributor AgriCorp Ltd. from Rourkela approved', time: '1 hour ago', icon: <BuildingIcon /> }
  ];

  // Sample chart data
  const topCrops = [
    { name: 'Rice', value: 45, color: '#7c3aed' },
    { name: 'Wheat', value: 25, color: '#a855f7' },
    { name: 'Maize', value: 15, color: '#c084fc' },
    { name: 'Pulses', value: 10, color: '#d8b4fe' },
    { name: 'Others', value: 5, color: '#e9d5ff' }
  ];

  return (
    <div className="dashboard-container">
      {/* Page Header */}
      <div className="dashboard-header">
        <span className="header-icon"><DashboardIcon /></span>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening in your agri-supply chain today.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpiData.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <div className="kpi-card__header">
              <div className="kpi-card__icon">{kpi.icon}</div>
              <div className={`kpi-card__change kpi-card__change--${kpi.changeType}`}>
                {kpi.change}
              </div>
            </div>
            <div className="kpi-card__value">{kpi.value}</div>
            <div className="kpi-card__title">{kpi.title}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="main-content-grid">
        {/* Charts Section */}
        <div>
          <div className="dashboard-card" style={{ marginBottom: '1.5rem' }}>
            <h3 className="dashboard-card__title">Produce Volume Trend (Last 30 Days)</h3>
            <div className="chart-placeholder">
              📈 Interactive Chart Component Would Go Here
            </div>
          </div>

          <div className="dashboard-card">
            <h3 className="dashboard-card__title">Top Crops by Volume</h3>
            <div className="top-crops-list">
              {topCrops.map((crop, index) => (
                <div key={index} className="crop-item">
                  <div className="crop-item__legend" style={{ background: crop.color }}></div>
                  <div className="crop-item__bar-wrapper">
                    <div className="crop-item__info">
                      <span>{crop.name}</span>
                      <span>{crop.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar__inner" style={{ width: `${crop.value}%`, background: crop.color }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="dashboard-card">
          <h3 className="dashboard-card__title">Recent Activity</h3>
          <div className="activity-feed">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-item__icon">{activity.icon}</div>
                <div>
                  <p className="activity-item__message">{activity.message}</p>
                  <p className="activity-item__time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="dashboard-button">View All Activities</button>
        </div>
      </div>

      {/* Regional Activity Map */}
      <div className="dashboard-card map-placeholder">
        <h3 className="dashboard-card__title">Regional Activity Map - Odisha</h3>
        <div className="chart-placeholder">
          🗺️ Interactive Map Component Would Go Here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;