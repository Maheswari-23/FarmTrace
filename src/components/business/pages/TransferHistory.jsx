import React, { useState } from "react";
import "../styles/TransferHistory.css";

const TransferHistory = () => {
  // Sample data
  const transactions = [
    {
      id: "TXN-001",
      date: "2025-09-01",
      product: "Tomatoes - 100kg",
      from: "Farmer Ramesh",
      to: "Business User",
      status: "Completed",
      trace: [
        "Harvested at Farm Ramesh (Geo: 12.9716, 77.5946)",
        "Transported via Distributor Anil",
        "Received at Warehouse #21",
      ],
    },
    {
      id: "TXN-002",
      date: "2025-09-05",
      product: "Mangoes - 50kg",
      from: "Business User",
      to: "Retailer Priya",
      status: "Completed",
      trace: [
        "Transferred from Warehouse #21",
        "Shipped via Logistics Partner",
        "Delivered to Retailer Priya",
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("30"); // default Last 30 Days
  const [selectedTxn, setSelectedTxn] = useState(null);

  // Filter & search
  const filteredTransactions = transactions.filter((txn) =>
    Object.values(txn).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="history-container">
      <h1 className="page-title">Transfer History</h1>

      {/* Date Range Filter */}
      <div className="filter-bar">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
          <option value="custom">Custom Range</option>
        </select>

        {filter === "custom" && (
          <div className="custom-range">
            <input type="date" />
            <span>to</span>
            <input type="date" />
          </div>
        )}

        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Transaction Table */}
      <table className="history-table">
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
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((txn) => (
              <tr
                key={txn.id}
                onClick={() => setSelectedTxn(txn)}
                className="clickable-row"
              >
                <td>{txn.date}</td>
                <td>{txn.id}</td>
                <td>{txn.product}</td>
                <td>
                  {txn.from} ➝ {txn.to}
                </td>
                <td>
                  <span className={`status ${txn.status.toLowerCase()}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {selectedTxn && (
        <div className="modal-overlay" onClick={() => setSelectedTxn(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Traceability Report - {selectedTxn.id}</h2>
            <p>
              <strong>Date:</strong> {selectedTxn.date}
            </p>
            <p>
              <strong>Product:</strong> {selectedTxn.product}
            </p>
            <p>
              <strong>From:</strong> {selectedTxn.from}
            </p>
            <p>
              <strong>To:</strong> {selectedTxn.to}
            </p>

            <h3>Traceability Steps</h3>
            <ul>
              {selectedTxn.trace.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <button
              className="close-btn"
              onClick={() => setSelectedTxn(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferHistory;
