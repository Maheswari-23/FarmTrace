import React, { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';

const RegisterHarvestScreen = ({ onBack }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="screen">
      <header className="screen-header-nav">
        <button onClick={onBack} className="back-button"><ArrowLeft /></button>
        <h1>Register New Harvest</h1>
      </header>
      <div className="screen-body">
        {step === 1 && (
          <div>
            <h2 className="step-title">Step 1: Batch Details</h2>
            <div className="input-group">
              <label>Crop Type</label>
              <select><option>Tomatoes</option><option>Rice</option></select>
            </div>
            <div className="input-group">
              <label>Quantity (in kg)</label>
              <input type="number" placeholder="e.g., 100" />
            </div>
            <button className="btn btn-primary btn-full" onClick={() => setStep(2)}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="step-title">Step 2: Add Visual Proof</h2>
            <button className="btn-action photo-action">
              <Camera size={32} />
              Take Harvest Photo
            </button>
            <p className="help-text">Your location and time will be automatically recorded.</p>
            <button className="btn btn-primary btn-full" onClick={() => setStep(3)}>Next</button>
          </div>
        )}
        {step === 3 && (
            <div>
                <h2 className="step-title">Step 3: Review & Confirm</h2>
                <div className="summary-card">
                    <p><strong>Crop:</strong> Tomatoes</p>
                    <p><strong>Quantity:</strong> 100 kg</p>
                    <p><strong>Photo:</strong> preview_image.jpg</p>
                </div>
                <button className="btn btn-primary btn-full" onClick={() => setStep(4)}>Confirm & Generate QR Code</button>
            </div>
        )}
        {step === 4 && (
            <div className="qr-display">
                <h2 className="step-title">QR Code Generated!</h2>
                <div className="qr-code-placeholder">[QR Code Image]</div>
                <p className="help-text">Show this to the distributor for scanning.</p>
                <button className="btn btn-secondary btn-full" onClick={onBack}>Done</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default RegisterHarvestScreen;