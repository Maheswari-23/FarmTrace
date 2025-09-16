import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import FarmerPhoto from '../../../assets/hero-image.jpg'; // Placeholder photo

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inventory = [
    { id: 'PROD-RICE-001', product: 'Paddy Rice', source: 'Farm-Das', date: '2025-09-15', qty: '500 kg' },
    { id: 'PROD-TMT-045', product: 'Tomatoes', source: 'Farm-Kumar', date: '2025-09-16', qty: '100 kg' },
  ];

  return (
    <div>
      <h2 className="page-title">Inventory Management</h2>
      <div className="card">
        <div className="filter-bar">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search by Asset ID, Crop, or Source..." />
          </div>
        </div>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Product</th>
                <th>Source Farm</th>
                <th>Date Received</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.product}</td>
                  <td>{item.source}</td>
                  <td>{item.date}</td>
                  <td>{item.qty}</td>
                  <td><button className="btn btn-secondary btn-sm" onClick={() => setIsModalOpen(true)}>View Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}><X size={24} /></button>
            <h3 className="modal-title">Traceability Report: PROD-TMT-045</h3>
            <div className="trace-details">
              <img src={FarmerPhoto} alt="Harvest" className="trace-photo" />
              <h4>100kg Tomatoes from Farm-Kumar</h4>
              <ul className="trace-history">
                <li><strong>Harvested:</strong> 2025-09-14 | Cuttack, Odisha</li>
                <li><strong>Received By You:</strong> 2025-09-16</li>
                <li><strong>Blockchain TX:</strong> 0xabc...def</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Inventory;