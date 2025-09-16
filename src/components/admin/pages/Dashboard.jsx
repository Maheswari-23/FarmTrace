import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const KpiCard = ({ title, value, change }) => (
  <div className="kpi-card">
    <div className="kpi-content">
      <h3 className="kpi-title">{title}</h3>
      <p className="kpi-value">{value}</p>
    </div>
    <div className="kpi-change">
      <ArrowUpRight size={16} color="#10b981" />
      <span>{change}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="page-title">Dashboard Overview</h2>
      <div className="dashboard-grid">
        <KpiCard title="Total Registered Farmers" value="1,284" change="+12 today" />
        <KpiCard title="Total Businesses" value="309" change="+2 today" />
        <KpiCard title="Batches Tracked (Today)" value="76" change="+5 this hour" />
        <KpiCard title="Pending Verifications" value="15" change="High Priority" />

        <div className="chart-container large-chart">
          <h3 className="chart-title">Produce Volume (Last 30 Days)</h3>
          {/* Chart library component (e.g., Recharts, Chart.js) would go here */}
          <div className="chart-placeholder">Line Chart Placeholder</div>
        </div>

        <div className="chart-container activity-feed">
          <h3 className="chart-title">Recent Activity</h3>
          <ul className="feed-list">
            <li>Farmer 'Rajesh Kumar' from 'Cuttack' has registered.</li>
            <li>Business 'Fresh Veggies Inc.' was approved.</li>
            <li>Dispute #2025-09-16A has been opened.</li>
            <li>Report 'Monthly Produce Volume' was generated.</li>
            <li>Farmer 'Anita Das' from 'Puri' has registered.</li>
          </ul>
        </div>
        
        <div className="chart-container">
          <h3 className="chart-title">Regional Activity</h3>
          <div className="chart-placeholder">Map of Odisha Placeholder</div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Top Crops by Volume</h3>
          <div className="chart-placeholder">Bar Chart Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;