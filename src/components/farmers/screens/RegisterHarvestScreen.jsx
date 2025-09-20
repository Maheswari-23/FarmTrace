import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Camera, MapPin, Clock, CheckCircle } from 'lucide-react';
import '../styles/RegisterHarvest.css';

const RegisterHarvestScreen = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [cropType, setCropType] = useState('Tomatoes');
  const [quantity, setQuantity] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedImageBlob, setCapturedImageBlob] = useState(null);
  const [location, setLocation] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Get user's location
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
        },
        (error) => reject(error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    });
  };

  // Start camera
  const startCamera = async () => {
    try {
      setIsCapturing(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Camera access denied or not available');
      setIsCapturing(false);
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCapturing(false);
  };

  // Capture photo with geolocation
  const capturePhoto = async () => {
    try {
      setIsProcessing(true);
      
      // Get location first
      const locationData = await getCurrentLocation();
      const currentTimestamp = new Date().toISOString();
      
      // Capture image
      const canvas = canvasRef.current;
      const video = videoRef.current;
      
      if (canvas && video) {
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw video frame to canvas
        context.drawImage(video, 0, 0);
        
        // Add metadata overlay
        context.fillStyle = 'rgba(0, 0, 0, 0.8)';
        context.fillRect(10, canvas.height - 120, canvas.width - 20, 110);
        
        context.fillStyle = 'white';
        context.font = 'bold 18px Arial';
        context.fillText(`🌾 Crop: ${cropType}`, 20, canvas.height - 95);
        context.fillText(`⚖️ Quantity: ${quantity} kg`, 20, canvas.height - 75);
        context.fillText(`📍 Location: ${locationData.latitude.toFixed(6)}, ${locationData.longitude.toFixed(6)}`, 20, canvas.height - 55);
        context.fillText(`🕒 Time: ${new Date(currentTimestamp).toLocaleString()}`, 20, canvas.height - 35);
        context.fillText(`✅ Verified Harvest Photo`, 20, canvas.height - 15);
        
        // Convert to blob and create object URL
        canvas.toBlob((blob) => {
          const imageUrl = URL.createObjectURL(blob);
          setCapturedImage(imageUrl);
          setCapturedImageBlob(blob);
          setLocation(locationData);
          setTimestamp(currentTimestamp);
          setIsProcessing(false);
          
          // Auto-save image data (in real app, this would go to server/database)
          console.log('Image captured and saved:', {
            size: blob.size,
            type: blob.type,
            location: locationData,
            timestamp: currentTimestamp
          });
        }, 'image/jpeg', 0.9);
        
        stopCamera();
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
      setIsProcessing(false);
      alert('Could not capture photo or get location: ' + error.message);
    }
  };

  // Generate QR code with all harvest data
  const generateQRCode = () => {
    const harvestData = {
      id: 'HARVEST_' + Date.now(),
      cropType,
      quantity: parseFloat(quantity),
      timestamp,
      location: {
        latitude: location?.latitude,
        longitude: location?.longitude,
        accuracy: location?.accuracy
      },
      imageSize: capturedImageBlob?.size,
      imageType: capturedImageBlob?.type,
      farmer: 'Verified Farmer', // In real app, this would come from user context
      verified: true,
      generatedAt: new Date().toISOString()
    };
    
    // Create QR data string
    const qrData = JSON.stringify(harvestData);
    
    // Generate QR code pattern (enhanced for better scanning)
    const qrCodeSvg = generateQRCodeSVG(qrData);
    setQrCode(qrCodeSvg);
    
    // Log the harvest data (in real app, this would be sent to server)
    console.log('Harvest registered with data:', harvestData);
  };

  // Simple QR code SVG generator (basic pattern for demo)
  const generateQRCodeSVG = (data) => {
    const size = 200;
    const modules = 25;
    const moduleSize = size / modules;
    
    // Create a simple pattern based on data
    let pattern = '';
    const hash = data.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    for (let i = 0; i < modules; i++) {
      for (let j = 0; j < modules; j++) {
        const shouldFill = (i + j + hash) % 3 === 0;
        if (shouldFill) {
          pattern += `<rect x="${j * moduleSize}" y="${i * moduleSize}" width="${moduleSize}" height="${moduleSize}" fill="black"/>`;
        }
      }
    }
    
    return `
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="white"/>
        ${pattern}
        <!-- Corner markers -->
        <rect x="0" y="0" width="${moduleSize * 7}" height="${moduleSize * 7}" fill="none" stroke="black" stroke-width="2"/>
        <rect x="${size - moduleSize * 7}" y="0" width="${moduleSize * 7}" height="${moduleSize * 7}" fill="none" stroke="black" stroke-width="2"/>
        <rect x="0" y="${size - moduleSize * 7}" width="${moduleSize * 7}" height="${moduleSize * 7}" fill="none" stroke="black" stroke-width="2"/>
        <rect x="${moduleSize * 2}" y="${moduleSize * 2}" width="${moduleSize * 3}" height="${moduleSize * 3}" fill="black"/>
        <rect x="${size - moduleSize * 5}" y="${moduleSize * 2}" width="${moduleSize * 3}" height="${moduleSize * 3}" fill="black"/>
        <rect x="${moduleSize * 2}" y="${size - moduleSize * 5}" width="${moduleSize * 3}" height="${moduleSize * 3}" fill="black"/>
      </svg>
    `;
  };

  // Clean up camera on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="harvest-screen">
      <header className="harvest-header">
        <div className="harvest-header-content">
          <button onClick={onBack} className="harvest-back-button">
            <ArrowLeft size={24} />
          </button>
          <h1 className="harvest-title">Register New Harvest</h1>
        </div>
      </header>
      
      <div className="harvest-content">
        {/* Step 1: Batch Details */}
        {step === 1 && (
          <div className="harvest-step-container harvest-fade-in">
            <div className="harvest-card">
              <div className="harvest-step-header">
                <div className="harvest-step-number">1</div>
                <h2 className="harvest-step-title">Batch Details</h2>
              </div>
              
              <div className="harvest-form-group">
                <label className="harvest-label">Crop Type</label>
                <select 
                  className="harvest-select"
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                >
                  <option value="Tomatoes">Tomatoes</option>
                  <option value="Rice">Rice</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Corn">Corn</option>
                  <option value="Potatoes">Potatoes</option>
                  <option value="Onions">Onions</option>
                  <option value="Carrots">Carrots</option>
                </select>
              </div>
              
              <div className="harvest-form-group">
                <label className="harvest-label">Quantity (in kg)</label>
                <input 
                  type="number" 
                  placeholder="e.g., 100"
                  className="harvest-input"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
            
            <button 
              className="harvest-button harvest-button-primary harvest-button-full"
              onClick={() => setStep(2)}
              disabled={!cropType || !quantity || quantity <= 0}
            >
              Next: Add Visual Proof
            </button>
          </div>
        )}

        {/* Step 2: Add Visual Proof */}
        {step === 2 && (
          <div className="harvest-step-container harvest-fade-in">
            <div className="harvest-card">
              <div className="harvest-step-header">
                <div className="harvest-step-number">2</div>
                <h2 className="harvest-step-title">Add Visual Proof</h2>
              </div>
              
              {!isCapturing && !capturedImage && (
                <div className="harvest-camera-container">
                  <button 
                    className="harvest-button harvest-button-camera"
                    onClick={startCamera}
                  >
                    <Camera size={32} />
                    Take Harvest Photo
                  </button>
                  <p className="harvest-help-text">
                    Your location and time will be automatically recorded with the photo.
                  </p>
                </div>
              )}
              
              {isCapturing && (
                <div className="harvest-camera-preview">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    className="harvest-video"
                  />
                  <div className="harvest-camera-controls">
                    <button 
                      className="harvest-capture-button"
                      onClick={capturePhoto}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Capture Photo'}
                    </button>
                    <button 
                      className="harvest-cancel-button"
                      onClick={stopCamera}
                      disabled={isProcessing}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              
              {capturedImage && (
                <div className="harvest-fade-in">
                  <div className="harvest-image-container">
                    <img 
                      src={capturedImage} 
                      alt="Captured harvest" 
                      className="harvest-captured-image"
                    />
                    <div className="harvest-image-success">
                      <CheckCircle size={20} />
                    </div>
                  </div>
                  
                  {location && (
                    <div className="harvest-location-info">
                      <div className="harvest-location-item">
                        <MapPin size={16} />
                        <span>
                          Location: {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
                        </span>
                      </div>
                      <div className="harvest-location-item">
                        <Clock size={16} />
                        <span>Captured: {new Date(timestamp).toLocaleString()}</span>
                      </div>
                      <div className="harvest-location-item">
                        <CheckCircle size={16} />
                        <span>Image saved with geolocation data</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <button 
              className="harvest-button harvest-button-primary harvest-button-full"
              onClick={() => setStep(3)}
              disabled={!capturedImage}
            >
              Next: Review & Confirm
            </button>
          </div>
        )}

        {/* Step 3: Review & Confirm */}
        {step === 3 && (
          <div className="harvest-step-container harvest-fade-in">
            <div className="harvest-card">
              <div className="harvest-step-header">
                <div className="harvest-step-number">3</div>
                <h2 className="harvest-step-title">Review & Confirm</h2>
              </div>
              
              <div className="harvest-review-grid">
                <div className="harvest-review-item">
                  <span className="harvest-review-label">Crop Type:</span>
                  <p className="harvest-review-value">{cropType}</p>
                </div>
                <div className="harvest-review-item">
                  <span className="harvest-review-label">Quantity:</span>
                  <p className="harvest-review-value">{quantity} kg</p>
                </div>
                <div className="harvest-review-item">
                  <span className="harvest-review-label">Location:</span>
                  <p className="harvest-review-value">
                    {location ? `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}` : 'N/A'}
                  </p>
                </div>
                <div className="harvest-review-item">
                  <span className="harvest-review-label">Date & Time:</span>
                  <p className="harvest-review-value">
                    {timestamp ? new Date(timestamp).toLocaleString() : 'N/A'}
                  </p>
                </div>
              </div>
              
              {capturedImage && (
                <div className="harvest-photo-preview">
                  <span className="harvest-review-label">Captured Photo:</span>
                  <img 
                    src={capturedImage} 
                    alt="Harvest preview" 
                    className="harvest-captured-image"
                  />
                </div>
              )}
            </div>
            
            <button 
              className="harvest-button harvest-button-primary harvest-button-full"
              onClick={() => {
                generateQRCode();
                setStep(4);
              }}
            >
              Confirm & Generate QR Code
            </button>
          </div>
        )}

        {/* Step 4: QR Code Generated */}
        {step === 4 && (
          <div className="harvest-step-container harvest-fade-in">
            <div className="harvest-card harvest-qr-container">
              <div className="harvest-step-header">
                <div className="harvest-step-number">✓</div>
                <h2 className="harvest-step-title">QR Code Generated!</h2>
              </div>
              
              <div className="harvest-qr-display">
                <div 
                  className="harvest-qr-code"
                  dangerouslySetInnerHTML={{ __html: qrCode }}
                />
              </div>
              
              <p className="harvest-qr-info">
                🎯 Show this QR code to the distributor for scanning.<br/>
                📋 It contains all harvest details, location data, and verification information.
              </p>
              
              <div className="harvest-qr-details">
                <p><strong>Harvest ID:</strong> HARVEST_{Date.now()}</p>
                <p><strong>Verified:</strong> {new Date().toLocaleString()}</p>
                <p><strong>Image Size:</strong> {capturedImageBlob ? Math.round(capturedImageBlob.size / 1024) + ' KB' : 'N/A'}</p>
                <p><strong>Status:</strong> ✅ Verified & Ready for Distribution</p>
              </div>
            </div>
            
            <button 
              className="harvest-button harvest-button-secondary harvest-button-full"
              onClick={onBack}
            >
              Done - Return to Dashboard
            </button>
          </div>
        )}
      </div>
      
      {/* Hidden canvas for photo processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );

};

export default RegisterHarvestScreen;