import React, { useState } from 'react';
import './styles/FarmersPortal.css'; // Path to the new CSS file

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MyProduceScreen from './screens/MyProduceScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import ProfileScreen from './screens/ProfileScreen';

import { Home, Package, IndianRupee, User } from 'lucide-react';

const BottomNavBar = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { name: 'Home', icon: <Home /> },
    { name: 'My Produce', icon: <Package /> },
    { name: 'Payments', icon: <IndianRupee /> },
    { name: 'Profile', icon: <User /> },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button 
          key={item.name} 
          className={`nav-item ${activeScreen === item.name ? 'active' : ''}`}
          onClick={() => setActiveScreen(item.name)}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

const FarmersPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('Home');

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen setActiveScreen={setActiveScreen} />;
      case 'My Produce':
        return <MyProduceScreen />;
      case 'Payments':
        return <PaymentsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen setActiveScreen={setActiveScreen} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="farmers-portal">
      <main className="screen-content">
        {renderActiveScreen()}
      </main>
      <BottomNavBar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
};

export default FarmersPortal;