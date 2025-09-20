import React, { useState } from 'react';
import '../styles/retailerPages.css';

const RetailerOrdersPage = () => {
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <div className="ret-page-container">
      <div className="ret-page-header">
        <h2>Orders & Payments</h2>
      </div>

      <div className="ret-tabs">
        <button className={`ret-tab-btn ${activeTab === 'pending' ? 'active' : ''}`} onClick={() => setActiveTab('pending')}>Pending Orders</button>
        <button className={`ret-tab-btn ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => setActiveTab('completed')}>Completed Orders</button>
        <button className={`ret-tab-btn ${activeTab === 'releases' ? 'active' : ''}`} onClick={() => setActiveTab('releases')}>Payment Releases</button>
      </div>

      <div className="ret-table-container">
        <table className="ret-data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Batch ID</th>
              <th>Buyer</th>
              <th>Amount</th>
              <th>Payment Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-001</td>
              <td>#B123</td>
              <td>Distributor Inc.</td>
              <td>₹25,000</td>
              <td>Escrow</td>
              <td><span className="ret-status ret-status-shipped">Shipped</span></td>
              <td><button className="ret-btn-link">View on Blockchain</button></td>
            </tr>
            <tr>
              <td>#ORD-002</td>
              <td>#B124</td>
              <td>Local Cafe</td>
              <td>₹5,500</td>
              <td>UPI</td>
              <td><span className="ret-status ret-status-processing">Processing</span></td>
              <td><button className="ret-btn-link">View on Blockchain</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RetailerOrdersPage;