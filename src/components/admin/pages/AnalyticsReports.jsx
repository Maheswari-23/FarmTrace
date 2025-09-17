import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/AnalyticsReports.css"; // Import external CSS

// Mock Data
const priceVolatilityData = [
  { month: "Jan", volatility: 5 },
  { month: "Feb", volatility: 9 },
  { month: "Mar", volatility: 7 },
  { month: "Apr", volatility: 6 },
  { month: "May", volatility: 11 },
];

const farmToShelfData = [
  { crop: "Wheat", avgDays: 7 },
  { crop: "Rice", avgDays: 12 },
  { crop: "Tomato", avgDays: 4 },
  { crop: "Potato", avgDays: 9 },
];

const AnalyticsReports = () => {
  const [filters, setFilters] = useState({
    dateRange: "",
    region: "",
    cropType: "",
    transactionType: "",
  });

  const [reportType, setReportType] = useState("");
  const [format, setFormat] = useState("");

  const handleDownload = () => {
    if (!reportType || !format) {
      alert("Please select report type and format.");
      return;
    }
    alert(`Report "${reportType}" will be downloaded as ${format.toUpperCase()}`);
  };

  return (
    <div className="analytics-container">
      {/* Header */}
      <h1 className="analytics-header">Analytics & Reports</h1>
      <p className="analytics-subtext">
        Analyze trends, identify bottlenecks, and generate official reports.
      </p>

      {/* Filters Panel */}
      <div className="filters-panel">
        <input
          type="date"
          onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
        />
        <select onChange={(e) => setFilters({ ...filters, region: e.target.value })}>
          <option value="">Select Region</option>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
        <select onChange={(e) => setFilters({ ...filters, cropType: e.target.value })}>
          <option value="">Select Crop Type</option>
          <option>Wheat</option>
          <option>Rice</option>
          <option>Tomato</option>
          <option>Potato</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, transactionType: e.target.value })}
        >
          <option value="">Transaction Type</option>
          <option>CreateAsset</option>
          <option>TransferAsset</option>
          <option>UpdateAsset</option>
        </select>
      </div>

      {/* Interactive Dashboards */}
      <div className="dashboards-grid">
        {/* Price Volatility */}
        <div className="chart-card">
          <h2 className="chart-title">Price Volatility Analysis</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={priceVolatilityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="volatility" stroke="#7c3aed" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Farm-to-Shelf Time */}
        <div className="chart-card">
          <h2 className="chart-title">Average Farm-to-Shelf Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={farmToShelfData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="crop" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgDays" fill="#8ceb4eff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report Generation */}
      <div className="report-generation">
        <h2 className="chart-title">Report Generation</h2>
        <div className="report-controls">
          <select onChange={(e) => setReportType(e.target.value)}>
            <option value="">Select Report Type</option>
            <option>Monthly Produce Volume</option>
            <option>ESG Compliance Summary</option>
            <option>Supply Chain Bottlenecks</option>
          </select>
          <select onChange={(e) => setFormat(e.target.value)}>
            <option value="">Export Format</option>
            <option>pdf</option>
            <option>csv</option>
          </select>
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;
