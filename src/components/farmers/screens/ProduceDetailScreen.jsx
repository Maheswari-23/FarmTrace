import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ProduceDetailScreen = ({ produce, onBack }) => {
    return (
        <div className="screen">
            <header className="screen-header-nav">
                <button onClick={onBack} className="back-button"><ArrowLeft /></button>
                <h1>Produce Details</h1>
            </header>
            <div className="screen-body">
                <img src={produce.photo} alt={produce.name} className="detail-photo" />
                
                <div className="detail-card qr-card">
                    <h2>QR Code</h2>
                    <div className="qr-code-placeholder">[QR Code Image for Batch #{produce.id}]</div>
                    <p className="help-text">Show this to the distributor for scanning.</p>
                </div>

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
                    <h2>Journey Timeline</h2>
                    <ul className="timeline">
                        <li className="timeline-item complete">
                            <div className="timeline-icon"><CheckCircle size={16}/></div>
                            Harvested by you on {produce.date}
                        </li>
                        {produce.status !== 'On Farm' && (
                           <li className="timeline-item complete">
                                <div className="timeline-icon"><CheckCircle size={16}/></div>
                                Picked up by Distributor Fresh Veggies Inc. on 2025-09-16
                           </li>
                        )}
                         {produce.status === 'Sold' && (
                           <li className="timeline-item complete">
                                <div className="timeline-icon"><CheckCircle size={16}/></div>
                                Sold to Retailer Daily Needs on 2025-09-16
                           </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProduceDetailScreen;