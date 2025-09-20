import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ProduceDetailScreen = ({ produce, onBack }) => {
  // Farmer’s timeline
  const timelineData = [
    {
      role: "Harvest",
      action: "Logged by You (Farmer)",
      date: produce.date
    },
    {
      role: "Distributor",
      action: "Handover confirmed",
      date: "19 Sep, 2025"
    },
    {
      role: "Retailer",
      action: "Scanned & Verified",
      date: "20 Sep, 2025"
    }
  ];

  return (
    <div className="screen">
      <header className="screen-header-nav">
        <button onClick={onBack} className="back-button">
          <ArrowLeft />
        </button>
        <h1>Produce Details</h1>
      </header>

      <div className="screen-body">
        <div className="detail-card">
          <h2>Details</h2>
          <ul className="details-list">
            <li><strong>Crop:</strong> {produce.name}</li>
            <li><strong>Quantity:</strong> {produce.qty}</li>
            <li><strong>Harvest Date:</strong> {produce.date}</li>
            <li><strong>Status:</strong> {produce.status}</li>
          </ul>
        </div>

        <div className="detail-card">
          <h2>Batch History Timeline</h2>
          <ul className="timeline">
            {timelineData.map((step, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-circle" />
                <div className="timeline-content">
                  <h3>{step.role}</h3>
                  <p>{step.action}</p>
                  <span className="timeline-date">{step.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .screen {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 16px;
          background: #f9fafb;
          min-height: 100vh;
        }
        .screen-header-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .back-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          padding: 6px;
          color: #333;
        }
        .screen-body {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .detail-card {
          background: white;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
        .details-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .details-list li {
          padding: 8px 0;
          font-size: 15px;
          border-bottom: 1px solid #eee;
        }
        .details-list li:last-child {
          border-bottom: none;
        }
        /* Timeline Styling */
        .timeline {
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
        }
        .timeline:before {
          content: '';
          position: absolute;
          top: 0;
          left: 12px;
          width: 2px;
          height: 100%;
          background: #16a34a; /* green line */
        }
        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          margin-bottom: 24px;
          padding-left: 36px;
        }
        .timeline-circle {
          position: absolute;
          left: 4px;
          top: 2px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          border: 2px solid #16a34a; /* green border */
        }
        .timeline-content {
          font-size: 14px;
          color: #333;
        }
        .timeline-content h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #111;
        }
        .timeline-content p {
          margin: 2px 0;
          color: #555;
        }
        .timeline-date {
          display: block;
          margin-top: 2px;
          font-size: 13px;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default ProduceDetailScreen;
