import React from 'react';
import '../styles/Retailerpages.css';

const RetailerSupportPage = () => {
  return (
    <div className="ret-page-container">
       <div className="ret-page-header">
        <h2>Dispute & Support</h2>
      </div>
      <div className="ret-support-layout">
        <div className="ret-support-card">
            <h3>Raise a New Dispute</h3>
            <form className="ret-dispute-form">
                <label>Batch ID (Optional)</label>
                <input type="text" placeholder="e.g., #B123" />
                <label>Subject</label>
                <input type="text" placeholder="e.g., Mismatch in batch details" />
                <label>Details</label>
                <textarea rows="5" placeholder="Please provide all relevant details..."></textarea>
                <button type="submit" className="ret-btn ret-btn-primary">Submit Dispute</button>
            </form>
        </div>
        <div className="ret-support-card">
            <h3>Support Center</h3>
            <p>Find answers or get in touch with our team.</p>
            <div className="ret-support-actions">
                <div className="ret-support-action-item">FAQs</div>
                <div className="ret-support-action-item">Live Chat</div>
                <div className="ret-support-action-item">Track Tickets</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerSupportPage;