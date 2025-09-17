import React, { useState } from "react";

const TransactionExplorer = () => {
  const [query, setQuery] = useState("");
  const [transaction, setTransaction] = useState(null);

  // Mock transaction data (for demo)
  const mockData = {
    tx123: {
      transactionId: "tx123",
      timestamp: "2024-02-15 10:32:45",
      functionCalled: "CreateAsset",
      arguments: {
        assetId: "ASSET001",
        name: "Organic Wheat",
        location: "Cuttack, Odisha",
      },
      digitalSignature: "0xA12B34C56D78E90F...",
    },
    asset789: {
      transactionId: "tx789",
      timestamp: "2024-02-16 14:20:11",
      functionCalled: "TransferAsset",
      arguments: {
        assetId: "ASSET789",
        from: "Farmer Rajesh",
        to: "Retailer Priya",
      },
      digitalSignature: "0xB98C76A54F32D10E...",
    },
  };

  const handleSearch = () => {
    // Simulate fetching transaction data
    if (mockData[query.toLowerCase()]) {
      setTransaction(mockData[query.toLowerCase()]);
    } else {
      setTransaction(null);
      alert("No transaction found for this ID.");
    }
  };

  return (
    <div style={{ padding: "6rem", maxWidth: "900px", margin: "0 auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>
        Transaction Explorer
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Search for transactions on the blockchain ledger by Transaction ID or Asset ID.
      </p>

      {/* Search Bar */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Enter Transaction ID or Asset ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: "1",
            padding: "0.75rem 1rem",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            background: "#7c3aed",
            color: "white",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Search
        </button>
      </div>

      {/* Results */}
      {transaction && (
        <div
          style={{
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
            Transaction Details
          </h2>
          <p><b>Transaction ID:</b> {transaction.transactionId}</p>
          <p><b>Timestamp:</b> {transaction.timestamp}</p>
          <p><b>Function Called:</b> {transaction.functionCalled}</p>
          <p><b>Arguments:</b></p>
          <pre
            style={{
              background: "#1f2937",
              color: "#d1d5db",
              padding: "1rem",
              borderRadius: "6px",
              overflowX: "auto",
              fontSize: "0.85rem",
            }}
          >
            {JSON.stringify(transaction.arguments, null, 2)}
          </pre>
          <p><b>Digital Signature:</b></p>
          <pre
            style={{
              background: "#f3f4f6",
              padding: "0.75rem",
              borderRadius: "6px",
              fontSize: "0.85rem",
              wordBreak: "break-all",
            }}
          >
            {transaction.digitalSignature}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TransactionExplorer;
