import React from 'react';
import '../styles/Retailerpages.css';

const RetailerAnalyticsPage = () => {
  return (
    <div className="ret-page-container">
      <div className="ret-page-header">
        <h2>Analytics & Insights</h2>
      </div>
       <div className="ret-filter-panel">
        <input type="date" className="ret-date-input"/>
        <span>to</span>
        <input type="date" className="ret-date-input"/>
        <select><option>Category: All</option></select>
        <select><option>District: All</option></select>
        <button className="ret-btn ret-btn-primary">Apply Filters</button>
      </div>

      <div className="ret-analytics-grid">
          <div className="ret-analytics-card">
              <h3>Consumer Scan Trends</h3>
              <div className="ret-chart-placeholder">[Line chart of scans over time]</div>
          </div>
          <div className="ret-analytics-card">
              <h3>Top Verified Crops by Volume</h3>
              <div className="ret-chart-placeholder">[Bar chart]</div>
          </div>
          <div className="ret-analytics-card">
              <h3>Blockchain Integrity Score</h3>
              <div className="ret-main-metric">98.5%</div>
              <p>Successfully verified batches.</p>
          </div>
          <div className="ret-analytics-card">
              <h3>Revenue vs Verified Produce</h3>
              <div className="ret-chart-placeholder">[Comparison chart]</div>
          </div>
      </div>

      <div className="ret-reports-generator">
        <h3>Reports Generator</h3>
        <p>Export monthly summaries of your operations.</p>
        <select>
            <option>Monthly Verified Inventory Report</option>
            <option>Consumer Trust Engagement Report</option>
        </select>
        <button className="ret-btn ret-btn-secondary">Export as PDF</button>
        <button className="ret-btn ret-btn-tertiary">Export as CSV</button>
      </div>
    </div>
  );
};

export default RetailerAnalyticsPage;