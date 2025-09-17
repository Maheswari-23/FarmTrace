import React, { useState } from "react";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample user data
  const users = [
    {
      id: "USR001",
      name: "Rajesh Kumar",
      type: "Farmer",
      location: "Cuttack, Odisha",
      registrationDate: "2024-01-15",
      status: "Active",
      email: "rajesh@example.com",
      phone: "+91 9876543210",
      documents: "Verified",
    },
    {
      id: "USR002",
      name: "AgriCorp Ltd.",
      type: "Distributor",
      location: "Bhubaneswar, Odisha",
      registrationDate: "2024-01-20",
      status: "Active",
      email: "info@agricorp.com",
      phone: "+91 9876543211",
      documents: "Verified",
    },
    {
      id: "USR003",
      name: "Priya Sharma",
      type: "Retailer",
      location: "Puri, Odisha",
      registrationDate: "2024-02-01",
      status: "Pending",
      email: "priya@example.com",
      phone: "+91 9876543212",
      documents: "Under Review",
    },
    {
      id: "USR004",
      name: "Amit Patel",
      type: "Farmer",
      location: "Rourkela, Odisha",
      registrationDate: "2024-01-28",
      status: "Suspended",
      email: "amit@example.com",
      phone: "+91 9876543213",
      documents: "Verified",
    },
  ];

  const tabs = [
    { id: "all", label: "All Users", count: users.length },
    {
      id: "farmers",
      label: "Farmers",
      count: users.filter((u) => u.type === "Farmer").length,
    },
    {
      id: "distributors",
      label: "Distributors",
      count: users.filter((u) => u.type === "Distributor").length,
    },
    {
      id: "retailers",
      label: "Retailers",
      count: users.filter((u) => u.type === "Retailer").length,
    },
    {
      id: "pending",
      label: "Pending Approval",
      count: users.filter((u) => u.status === "Pending").length,
    },
  ];

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesTab =
      activeTab === "all"
        ? true
        : activeTab === "pending"
        ? user.status === "Pending"
        : user.type.toLowerCase() === activeTab;

    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesTab && matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const styles = {
      Active: { background: "rgba(16, 185, 129, 0.1)", color: "#10b981" },
      Pending: { background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" },
      Suspended: { background: "rgba(239, 68, 68, 0.1)", color: "#ef4444" },
    };

    return (
      <span
        style={{
          padding: "0.25rem 0.75rem",
          borderRadius: "9999px",
          fontSize: "0.75rem",
          fontWeight: "500",
          ...styles[status],
        }}
      >
        {status}
      </span>
    );
  };

  const handleAction = (action, user) => {
    if (action === "view") {
      setSelectedUser(user);
    } else {
      alert(`${action} action for ${user.name}`);
    }
  };

  return (
    <div style={{ padding: "6rem 2rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Page Header */}
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>
        User Management
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Manage and approve users across the agri-supply chain network.
      </p>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              border: "none",
              background: "none",
              fontWeight: "500",
              cursor: "pointer",
              borderBottom: `2px solid ${
                activeTab === tab.id ? "#7c3aed" : "transparent"
              }`,
              color: activeTab === tab.id ? "#7c3aed" : "#6b7280",
            }}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Search + Filter */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search by name, ID, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: "1",
            padding: "0.75rem",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "0.75rem", borderRadius: "8px" }}
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      {/* User Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "8px", overflow: "hidden" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>
            <th style={{ padding: "1rem" }}>User ID</th>
            <th style={{ padding: "1rem" }}>Name</th>
            <th style={{ padding: "1rem" }}>Type</th>
            <th style={{ padding: "1rem" }}>Location</th>
            <th style={{ padding: "1rem" }}>Registration Date</th>
            <th style={{ padding: "1rem" }}>Status</th>
            <th style={{ padding: "1rem" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td style={{ padding: "1rem" }}>{user.id}</td>
              <td style={{ padding: "1rem" }}>{user.name}</td>
              <td style={{ padding: "1rem" }}>{user.type}</td>
              <td style={{ padding: "1rem" }}>{user.location}</td>
              <td style={{ padding: "1rem" }}>{user.registrationDate}</td>
              <td style={{ padding: "1rem" }}>{getStatusBadge(user.status)}</td>
              <td style={{ padding: "1rem", display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={() => handleAction("view", user)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#7c3aed",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  View
                </button>
                <button
                  onClick={() => handleAction("edit", user)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#ebe125ff",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleAction("suspend", user)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "15px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#dc2626d2",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Suspend
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* User Detail Modal */}
      {selectedUser && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setSelectedUser(null)}
        >
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              width: "400px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontWeight: "700", marginBottom: "1rem" }}>
              {selectedUser.name}
            </h2>
            <p><b>User ID:</b> {selectedUser.id}</p>
            <p><b>Type:</b> {selectedUser.type}</p>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Phone:</b> {selectedUser.phone}</p>
            <p><b>Documents:</b> {selectedUser.documents}</p>
            <button
              onClick={() => setSelectedUser(null)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
