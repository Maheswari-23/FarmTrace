import React, { useState } from "react";
import "../styles/ReceiveGoods.css";

const ReceiveGoods = () => {
  const [assetId, setAssetId] = useState("");
  const [batchDetails, setBatchDetails] = useState(null);

  // Simulated QR Scan (in a real app, integrate a QR library like react-qr-reader)
  const handleScanQR = () => {
    // Simulated result
    const scannedId = "ASSET-2025-001";
    setAssetId(scannedId);

    // Simulated fetch from blockchain
    setBatchDetails({
      id: scannedId,
      product: "Roma Tomatoes",
      quantity: "100kg",
      source: "Distributor Ramesh",
      photo: "https://via.placeholder.com/200" // placeholder harvest photo
    });
  };

  const handleVerify = () => {
    if (assetId.trim() === "") {
      alert("Please enter or scan an Asset ID");
      return;
    }

    // Simulated blockchain check
    setBatchDetails({
      id: assetId,
      product: "Roma Tomatoes",
      quantity: "100kg",
      source: "Farmer Priya",
      photo: "https://via.placeholder.com/200"
    });
  };

  const handleConfirm = () => {
    alert(`Delivery ${batchDetails.id} confirmed & recorded on blockchain ✅`);
    // Reset form after confirmation
    setAssetId("");
    setBatchDetails(null);
  };

  return (
    <div className="receive-container">
      {/* Page Title */}
      <h1 className="page-title">Receive a New Delivery</h1>

      {/* QR Scanner + Manual Entry */}
      <div className="scanner-section">
        <button className="scan-btn" onClick={handleScanQR}>
          [+] Scan QR Code via Camera
        </button>
        <p className="or-text">OR</p>
        <input
          type="text"
          placeholder="Enter Asset ID manually"
          value={assetId}
          onChange={(e) => setAssetId(e.target.value)}
        />
        <button className="verify-btn" onClick={handleVerify}>
          Verify Asset
        </button>
      </div>

      {/* Verification Step */}
      {batchDetails && (
        <div className="verification-section">
          <h2>Verification</h2>
          <p>
            You are about to receive:{" "}
            <strong>
              {batchDetails.quantity} of {batchDetails.product}
            </strong>{" "}
            from <strong>{batchDetails.source}</strong>.
          </p>
          <img
            src={batchDetails.photo}
            alt="Harvest"
            className="harvest-photo"
          />

          {/* Confirmation */}
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm & Accept Delivery
          </button>
        </div>
      )}
    </div>
  );
};

export default ReceiveGoods;
