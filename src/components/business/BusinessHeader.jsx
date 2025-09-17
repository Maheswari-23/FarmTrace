import React, { useState } from 'react';

const BusinessHeader = ({ onSidebarToggle }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Helper styles for consistency
  const buttonStyle = {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'background 0.2s ease',
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={onSidebarToggle}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px' }}
          title="Toggle Sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          B
        </div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>
          Business Portal
        </h1>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {/* Notification Bell */}
        <button
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span style={{
            position: 'absolute', top: '4px', right: '4px', width: '8px', height: '8px',
            background: '#ef4444', borderRadius: '50%', border: '1.5px solid white'
          }}></span>
        </button>

        {/* Profile Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            style={{ ...buttonStyle, gap: '0.75rem', padding: '6px 12px' }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontWeight: '600',
            }}>
              CR
            </div>
            <span>Company Retailer</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ transform: showProfileDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          {showProfileDropdown && (
            <div style={{
              position: 'absolute', top: '120%', right: 0, background: 'white', color: '#1f2937',
              borderRadius: '8px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)', minWidth: '220px',
              zIndex: 200, border: '1px solid #e5e7eb', overflow: 'hidden'
            }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontWeight: '600' }}>Company Retailer</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '4px' }}>distributor@company.com</div>
              </div>
              <div style={{ padding: '0.5rem' }}>
                <a href="#settings" style={{ textDecoration: 'none', color: '#1f2937', display: 'block', padding: '0.75rem', borderRadius: '6px', fontSize: '0.875rem' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Settings</a>
                <a href="#logout" style={{ textDecoration: 'none', color: '#ef4444', display: 'block', padding: '0.75rem', borderRadius: '6px', fontSize: '0.875rem', fontWeight: '500' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Logout</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default BusinessHeader;