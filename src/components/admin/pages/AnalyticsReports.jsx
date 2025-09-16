import React from 'react';
import { Download, FileText, Calendar, MapPin, Leaf as LeafIcon, ListFilter } from 'lucide-react';

const AnalyticsReports = () => {
  return (
    <div>
      <h2 className="page-title">Analytics & Reports</h2>
      <div className="analytics-layout">
        <div className="filters-panel card">
          <h3 className="panel-title">Advanced Filters</h3>
          <div className="filter-group">
            <label><Calendar size={14} /> Date Range</label>
            <input type="date" />
            <input type="date" />
          </div>
          <div className="filter-group">
            <label><MapPin size={14} /> Region/District</label>
            <select>
              <option>All Regions</option>
              <option>Cuttack</option>
              <option>Puri</option>
              <option>Bhubaneswar</option>
            </select>
          </div>
          <div className="filter-group">
            <label><LeafIcon size={14} /> Crop Type</label>
            <select>
              <option>All Crops</option>
              <option>Paddy Rice</option>
              <option>Mango</option>
              <option>Turmeric</option>
            </select>
          </div>
           <div className="filter-group">
            <label><ListFilter size={14} /> Transaction Type</label>
            <select>
              <option>All Transactions</option>
              <option>Asset Creation</option>
              <option>Ownership Transfer</option>
            </select>
          </div>
          <button className="btn btn-primary filter-apply-btn">Apply Filters</button>
        </div>

        <div className="dashboard-panel">
          <div className="card">
            <h3 className="chart-title">Price Volatility Analysis</h3>
            <div className="chart-placeholder">Interactive chart placeholder...</div>
          </div>
          <div className="card">
            <h3 className="chart-title">Average Farm-to-Shelf Time</h3>
            <div className="chart-placeholder">Interactive chart placeholder...</div>
          </div>
          <div className="card">
            <h3 className="chart-title">Supply Chain Bottleneck Identifier</h3>
            <div className="chart-placeholder">Interactive chart placeholder...</div>
          </div>
        </div>

        <div className="reports-panel card">
          <h3 className="panel-title">Report Generation</h3>
          <p className="panel-description">Select parameters using the filters, then generate your report.</p>
          <select>
            <option>Select Report Type</option>
            <option>Monthly Produce Volume</option>
            <option>ESG Compliance Summary</option>
            <option>Regional Activity Report</option>
          </select>
          <div className="report-buttons">
            <button className="btn btn-primary"><Download size={16}/> Download PDF</button>
            <button className="btn btn-secondary"><FileText size={16}/> Export to CSV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;