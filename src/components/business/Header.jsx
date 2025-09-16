import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import Logo from '../../assets/logo.png'; // Adjust path if needed

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">Business Portal</h1>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">1</span>
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/40?u=business" alt="User" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">Fresh Veggies Inc.</span>
            <span className="user-role">Distributor</span>
          </div>
          <ChevronDown size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;