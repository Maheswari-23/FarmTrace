import React, { useState } from 'react';
import { Camera, CheckCircle } from 'lucide-react';
import FarmerPhoto from '../../../assets/hero-image.jpg'; // Placeholder photo

const ReceiveGoods = () => {
    const [scannedData, setScannedData] = useState(null);

    const handleScan = () => {
        // This would trigger the camera in a real app
        // For now, we'll mock the result of a successful scan
        setScannedData({
            product: '100kg of Roma Tomatoes',
            source: 'Farmer Kumar',
            photo: FarmerPhoto
        });
    };

    return (
        <div>
            <h2 className="page-title">Receive a New Delivery</h2>
            <div className="card receive-goods-card">
                {!scannedData ? (
                    <div className="scanner-interface">
                        <button className="btn-scan" onClick={handleScan}>
                            <Camera size={48} />
                            <span>Scan QR Code via Camera</span>
                        </button>
                        <p className="or-divider"><span>OR</span></p>
                        <div className="manual-entry">
                            <input type="text" placeholder="Manually Enter Asset ID" />
                            <button className="btn btn-secondary">Find</button>
                        </div>
                    </div>
                ) : (
                    <div className="verification-step">
                        <h3 className="verification-title"><CheckCircle size={28} /> Product Verified</h3>
                        <div className="trace-details">
                            <img src={scannedData.photo} alt="Harvest" className="trace-photo" />
                            <p className="verification-text">
                                You are about to receive: <strong>{scannedData.product}</strong> from <strong>{scannedData.source}</strong>.
                            </p>
                        </div>
                        <button className="btn btn-primary btn-confirm">
                            Confirm & Accept Delivery
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ReceiveGoods;