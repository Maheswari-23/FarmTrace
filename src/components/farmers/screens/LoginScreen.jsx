import React from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from '../../../assets/logo.png'; // Adjust path if needed

const LoginScreen = ({ onLogin }) => {
  return (
    <div className="login-container">
      <div className="language-selector">
        <span>English</span>
        <ChevronDown size={20} />
      </div>
      <div className="login-form">
        <img src={Logo} alt="FarmTrace Logo" className="login-logo" />
        <h1 className="login-title">Farmer Login</h1>
        <div className="input-group">
          <label htmlFor="farmer-id">Government Farmer ID</label>
          <input type="text" id="farmer-id" />
        </div>
        <div className="input-group">
          <label htmlFor="pin">4-Digit PIN</label>
          <input type="password" id="pin" maxLength="4" />
        </div>
        <button className="btn btn-primary btn-full" onClick={onLogin}>
          Sign In
        </button>
        <a href="#" className="help-link">Forgot PIN?</a>
      </div>
    </div>
  );
};

export default LoginScreen;