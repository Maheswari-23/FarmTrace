import React from 'react';
import '../styles/Retailerpages.css';

const RetailerQRHubPage = () => {
  return (
    <div className="ret-page-container">
       <div className="ret-page-header">
        <h2>QR Verification Hub</h2>
      </div>
      <div className="ret-qr-hub-layout">
        <div className="ret-qr-scanner-container">
            <h3>Scan Incoming Produce</h3>
            <div className="ret-qr-scanner-box">[Camera Feed Placeholder]</div>
            <button className="ret-btn ret-btn-primary">Initiate Scan</button>
        </div>
        <div className="ret-batch-history">
            <h3>Batch History Timeline</h3>
            <ul className="ret-timeline">
                <li className="ret-timeline-item">
                    <strong>Retailer (You)</strong>
                    <span>Scanned & Verified</span>
                    <small>20 Sep, 2025</small>
                </li>
                 <li className="ret-timeline-item">
                    <strong>Distributor</strong>
                    <span>Handover confirmed</span>
                    <small>19 Sep, 2025</small>
                </li>
                 <li className="ret-timeline-item">
                    <strong>Harvest</strong>
                    <span>Logged by Farmer A</span>
                    <small>15 Sep, 2025</small>
                </li>
            </ul>
        </div>
        <div className="ret-consumer-preview">
            <h3>Consumer View Preview</h3>
            <div className="ret-mobile-preview">
                <div className="ret-mobile-header"></div>
                <div className="ret-mobile-content">
                    <img src="https://i.pravatar.cc/80?u=1" alt="farmer preview" />
                    <h4>Himalayan Apples</h4>
                    <p><strong>Farmer:</strong> Farmer A</p>
                    <p><strong>Origin:</strong> District A</p>
                    <p className="ret-verified-tag">✓ Blockchain Verified</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerQRHubPage;