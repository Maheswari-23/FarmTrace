import React, { useState } from "react";
import "../styles/Inventory.css";

const Inventory = () => {
  // Sample data
  const inventoryData = [
    {
      id: "A101",
      product: "Tomatoes",
      farm: "Farm Ramesh",
      date: "2025-09-15",
      quantity: "100kg",
      photo: "https://via.placeholder.com/150", // placeholder farmer photo
      history: [
        "Harvested at Farm Ramesh (Geo: 12.9716, 77.5946)",
        "Transported to Warehouse #12",
        "Received by Business User"
      ]
    },
    {
      id: "A102",
      product: "Mangoes",
      farm: "Farm Priya",
      date: "2025-09-12",
      quantity: "50kg",
      photo: "https://via.placeholder.com/150",
      history: [
        "Harvested at Farm Priya (Geo: 11.0168, 76.9558)",
        "Quality Check Completed",
        "Stored in Cold Storage Facility"
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Filter inventory
  const filteredData = inventoryData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="inventory-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Asset ID, Crop Type, or Source Farm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Data Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Asset ID</th>
            <th>Product</th>
            <th>Source Farm</th>
            <th>Date Received</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.farm}</td>
                <td>{item.date}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedBatch(item)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {selectedBatch && (
        <div className="modal-overlay" onClick={() => setSelectedBatch(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            <h2>Batch Details - {selectedBatch.id}</h2>
            <p>
              <strong>Product:</strong> {selectedBatch.product}
            </p>
            <p>
              <strong>Source Farm:</strong> {selectedBatch.farm}
            </p>
            <p>
              <strong>Date Received:</strong> {selectedBatch.date}
            </p>
            <p>
              <strong>Quantity:</strong> {selectedBatch.quantity}
            </p>

            <h3>Traceability History</h3>
            <ul>
              {selectedBatch.history.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <h3>Farmer’s Geotagged Photo</h3>
            <img src={selectedBatch.photo} alt="Farmer" className="farmer-photo" />

            <button
              className="close-btn"
              onClick={() => setSelectedBatch(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
