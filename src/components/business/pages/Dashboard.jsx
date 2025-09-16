import React from 'react';
import { ArrowDownLeft, Package, CheckCircle, ArrowRight } from 'lucide-react';

const KpiCard = ({ title, value, icon }) => (
  <div className="kpi-card">
    <div className="kpi-icon">{icon}</div>
    <div className="kpi-content">
      <h3 className="kpi-title">{title}</h3>
      <p className="kpi-value">{value}</p>
    </div>
  </div>
);

const Dashboard = ({ setActivePage }) => {
  return (
    <div>
      <h2 className="page-title">Welcome, Fresh Veggies Inc.</h2>
      <div className="dashboard-grid">
        <KpiCard title="Batches in Inventory" value="58" icon={<Package />} />
        <KpiCard title="Incoming Deliveries (Today)" value="3" icon={<ArrowDownLeft />} />
        <KpiCard title="Recent Transfers (7 Days)" value="12" icon={<ArrowRight />} />
        
        <div className="card quick-actions">
          <h3 className="card-title">Quick Actions</h3>
          <div className="action-buttons">
            <button className="btn btn-primary" onClick={() => setActivePage('Receive Goods')}>
              [+] Receive Goods
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('Inventory')}>
              View Inventory
            </button>
          </div>
        </div>
        
        <div className="card activity-feed">
          <h3 className="card-title">Recent Activity</h3>
          <ul className="feed-list">
            <li><span><CheckCircle size={16} className="icon-success"/></span> Received: 100kg Tomatoes from Farmer Kumar</li>
            <li><span><ArrowRight size={16} className="icon-transfer"/></span> Transferred: 50kg Mangoes to Retailer FreshMart</li>
            <li><span><ArrowRight size={16} className="icon-transfer"/></span> Transferred: 200kg Potatoes to Retailer Daily Needs</li>
            <li><span><CheckCircle size={16} className="icon-success"/></span> Received: 500kg Paddy Rice from Farmer Das</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;