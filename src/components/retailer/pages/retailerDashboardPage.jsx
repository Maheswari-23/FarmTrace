import React from 'react';
import '../styles/Retailerpages.css';

// Simple SVG Icons for the dashboard
const KpiIcon = () => <svg viewBox="0 0 24 24"><path fill="currentColor" d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" /></svg>;
const ActivityIcon = ({type}) => {
    if (type === 'verify') return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>;
    if (type === 'payment') return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 13.5H16.5V10.5H13.5M13.5 19.5H16.5V16.5H13.5M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M7.5 16.5H10.5V19.5H7.5V16.5M7.5 10.5H10.5V13.5H7.5V10.5M7.5 4.5H10.5V7.5H7.5V4.5Z" /></svg>;
    return <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>;
}

const RetailerDashboardPage = () => {
  return (
    <div className="ret-page-container">
      <div className="ret-page-header">
        <h2>Dashboard</h2>
        <p>Welcome back! Here's a summary of your operations.</p>
      </div>

      <div className="ret-kpi-grid">
        <div className="ret-kpi-card">
          <div className="ret-kpi-icon"><KpiIcon /></div>
          <div className="ret-kpi-value">42</div>
          <div className="ret-kpi-label">Verified Batches Received</div>
        </div>
        <div className="ret-kpi-card">
          <div className="ret-kpi-icon"><KpiIcon /></div>
          <div className="ret-kpi-value">15</div>
          <div className="ret-kpi-label">Active Orders in Progress</div>
        </div>
        <div className="ret-kpi-card">
          <div className="ret-kpi-icon"><KpiIcon /></div>
          <div className="ret-kpi-value">1,284</div>
          <div className="ret-kpi-label">Consumer QR Scans (This Month)</div>
        </div>
        <div className="ret-kpi-card">
          <div className="ret-kpi-icon"><KpiIcon /></div>
          <div className="ret-kpi-value">₹85,400</div>
          <div className="ret-kpi-label">Pending Payments (Escrow/UPI)</div>
        </div>
      </div>

      <div className="ret-content-grid">
        <div className="ret-grid-card ret-recent-activity">
          <h3>Recent Activity Feed</h3>
          <ul>
            <li><ActivityIcon type="verify" /> Batch #B123 verified from Farmer [Name].</li>
            <li><ActivityIcon type="payment" /> Payment of ₹25,000 released via smart contract.</li>
            <li><ActivityIcon type="scan" /> Consumer scan data updated: 120 QR scans today.</li>
            <li><ActivityIcon type="verify" /> Batch #B124 (Apples) received and pending verification.</li>
          </ul>
        </div>
        <div className="ret-grid-card ret-chart-container">
          <h3>Verified Produce by Category</h3>
          <div className="ret-chart-placeholder">[Pie Chart]</div>
        </div>
        <div className="ret-grid-card ret-chart-container ret-full-width">
           <h3>Regional Sourcing Map</h3>
           <div className="ret-chart-placeholder">[Heatmap of where produce is coming from]</div>
        </div>
         <div className="ret-grid-card ret-chart-container ret-full-width">
           <h3>Consumer Trust Index (QR Scans Over Time)</h3>
           <div className="ret-chart-placeholder">[Line Chart]</div>
        </div>
      </div>
    </div>
  );
};

export default RetailerDashboardPage;