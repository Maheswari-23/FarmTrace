import React from 'react';
import '../styles/Retailerpages.css';

const RetailerInventoryPage = () => {
  return (
    <div className="ret-page-container">
      <div className="ret-page-header">
        <h2>Inventory & Provenance</h2>
      </div>

      <div className="ret-filter-panel">
        <input type="text" placeholder="Search by QR, Batch ID, Product..." className="ret-search-input" />
        <select><option>Status: All</option><option>Verified</option><option>Unverified</option></select>
        <select><option>Origin: All</option><option>District A</option><option>District B</option></select>
        <select><option>Crop: All</option><option>Apples</option><option>Tomatoes</option></select>
      </div>

      <div className="ret-quick-actions">
          <button className="ret-btn ret-btn-primary">Generate QR Labels</button>
          <button className="ret-btn ret-btn-secondary">Mark Batch as Available</button>
          <button className="ret-btn ret-btn-tertiary">Restock Requests</button>
      </div>
      
      <div className="ret-table-container">
        <table className="ret-data-table">
          <thead>
            <tr>
              <th>Batch ID</th>
              <th>Product Name</th>
              <th>Farmer Name</th>
              <th>Harvest Date</th>
              <th>Current Custody</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#B123</td>
              <td>Himalayan Apples</td>
              <td className="ret-farmer-cell"><img src="https://i.pravatar.cc/30?u=1" alt="farmer"/> Farmer A</td>
              <td>15 Sep, 2025</td>
              <td>Retailer (You)</td>
              <td><span className="ret-status ret-status-verified">Verified</span></td>
              <td><button className="ret-btn-link">View Provenance</button></td>
            </tr>
            <tr>
              <td>#B124</td>
              <td>Organic Tomatoes</td>
              <td className="ret-farmer-cell"><img src="https://i.pravatar.cc/30?u=2" alt="farmer"/> Farmer B</td>
              <td>18 Sep, 2025</td>
              <td>Retailer (You)</td>
              <td><span className="ret-status ret-status-pending">Pending</span></td>
              <td><button className="ret-btn-link">Verify Now</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RetailerInventoryPage;