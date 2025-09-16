import React, { useState } from 'react';
import { Search, SlidersHorizontal, MoreVertical } from 'lucide-react';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('Farmers');
  
  const users = [
    { id: 'FARM-001', name: 'Rajesh Kumar', type: 'Farmer', location: 'Cuttack', date: '2025-09-15', status: 'Active' },
    { id: 'DIST-001', name: 'Odisha Fresh', type: 'Distributor', location: 'Bhubaneswar', date: '2025-09-14', status: 'Active' },
    { id: 'FARM-002', name: 'Anita Das', type: 'Farmer', location: 'Puri', date: '2025-09-13', status: 'Suspended' },
    { id: 'RETL-001', name: 'Local Grocers', type: 'Retailer', location: 'Berhampur', date: '2025-09-12', status: 'Active' },
  ];

  return (
    <div>
      <h2 className="page-title">User Management</h2>
      <div className="card">
        <div className="card-header">
          <div className="tabs">
            <button className={activeTab === 'Farmers' ? 'active' : ''} onClick={() => setActiveTab('Farmers')}>Farmers</button>
            <button className={activeTab === 'Distributors' ? 'active' : ''} onClick={() => setActiveTab('Distributors')}>Distributors</button>
            <button className={activeTab === 'Retailers' ? 'active' : ''} onClick={() => setActiveTab('Retailers')}>Retailers</button>
            <button className={activeTab === 'Pending' ? 'active pending' : ''} onClick={() => setActiveTab('Pending')}>Pending Approval</button>
          </div>
        </div>

        <div className="filter-bar">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search by Name, ID, or Location..." />
          </div>
          <select>
            <option>Status: All</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
          <button className="btn btn-secondary">
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Registration Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.type}</td>
                  <td>{user.location}</td>
                  <td>{user.date}</td>
                  <td><span className={`status-badge status-${user.status.toLowerCase()}`}>{user.status}</span></td>
                  <td>
                    <button className="action-btn"><MoreVertical size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UserManagement;