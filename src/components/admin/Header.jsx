import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
// Note: Adjust the path to your logo based on your project structure.
// This path assumes 'assets' is a sibling of the 'components' folder.
import Logo from '../../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="header-logo" />
        <h1 className="header-title">Administrator Portal</h1>
      </div>
      <div className="header-center">
        <div className="global-search-wrapper">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search for a user, asset, or transaction..." className="global-search-input" />
        </div>
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/40" alt="Admin" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">Admin Name</span>
            <span className="user-role">Government Official</span>
          </div>
          <ChevronDown size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;