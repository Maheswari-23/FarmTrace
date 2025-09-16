import React from 'react';
import RegisterHarvestScreen from './RegisterHarvestScreen';

const HomeScreen = ({ setActiveScreen }) => {
  const [showRegisterFlow, setShowRegisterFlow] = React.useState(false);

  if (showRegisterFlow) {
    return <RegisterHarvestScreen onBack={() => setShowRegisterFlow(false)} />;
  }

  return (
    <div className="screen">
      <header className="screen-header">
        <h1>Hello, Rajesh Kumar!</h1>
      </header>
      <div className="screen-body">
        <button className="btn-action primary-action" onClick={() => setShowRegisterFlow(true)}>
          <span className="action-icon">[+]</span>
          <span>Register New Harvest</span>
        </button>
        <button className="btn-action secondary-action" onClick={() => setActiveScreen('My Produce')}>
          View My Produce
        </button>
        <div className="widget price-advisor">
          <h3>AI Price Advisor 📈</h3>
          <p>Tomatoes: Fair Price is <strong>₹18 - ₹22 / kg</strong> today.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;