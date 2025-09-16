import React from 'react';
import { Calendar } from 'lucide-react';

const TransferHistory = () => {
  const history = [
    { date: '2025-09-16', id: 'TX-001', details: '100kg Tomatoes', fromTo: 'FROM: Farm-Kumar', status: 'Completed' },
    { date: '2025-09-16', id: 'TX-002', details: '50kg Mangoes', fromTo: 'TO: Retailer FreshMart', status: 'Completed' },
  ];

  return (
    <div>
      <h2 className="page-title">Transfer History</h2>
      <div className="card">
        <div className="filter-bar">
            <div className="date-filter">
                <Calendar size={18} />
                <select>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Custom Range</option>
                </select>
            </div>
        </div>
        <div className="table-responsive">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction ID</th>
                        <th>Product Details</th>
                        <th>From / To</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(item => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.id}</td>
                            <td>{item.details}</td>
                            <td>{item.fromTo}</td>
                            <td><span className="status-badge status-completed">{item.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
export default TransferHistory;