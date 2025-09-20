import React, { useState } from 'react';

const RetailerHeader = ({ onSidebarToggle }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: 'linear-gradient(135deg, #ffffff 0%, #fff8f5 100%)',
      borderBottom: '1px solid #ffe1d4',
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.5rem'
    }}>
      {/* Left Section - Logo and Title */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        minWidth: '250px'
      }}>
        <button
          onClick={onSidebarToggle}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            borderRadius: '8px',
            transition: 'all 0.2s ease-in-out'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fff0eb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF521B" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #FF521B, #ff784e)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}>
            R
          </div>
          <div>
            <h1 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#FF521B',
              margin: 0,
              lineHeight: 1
            }}>
              Retailer Dashboard
            </h1>
          </div>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 2rem'
      }}>
        <form onSubmit={handleSearch} style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px'
        }}>
          <input
            type="text"
            placeholder="Search by Product ID, QR Code, Batch ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 3rem',
              border: '1px solid #d1d5db',
              borderRadius: '25px',
              fontSize: '0.875rem',
              background: 'white',
              transition: 'all 0.2s ease-in-out',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#FF521B';
              e.target.style.boxShadow = '0 0 0 3px rgba(255, 82, 27, 0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db';
              e.target.style.boxShadow = 'none';
            }}
          />
          <svg
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#FF521B'
            }}
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </form>
      </div>

      {/* Right Section - Notifications and Profile */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button style={{
          position: 'relative',
          background: 'none',
          border: 'none',
          padding: '0.5rem',
          cursor: 'pointer',
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fff0eb'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF521B" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '8px',
            height: '8px',
            background: '#ef4444',
            borderRadius: '50%'
          }}></span>
        </button>

        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fff0eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={{
              width: '32px', height: '32px', background: 'linear-gradient(135deg, #FF521B, #ff784e)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '0.875rem', fontWeight: '600'
            }}>
              JD
            </div>
            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
              John Doe
            </span>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"
              style={{
                transform: showProfileDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          
          {showProfileDropdown && (
            <div style={{
              position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem',
              width: '200px', background: 'white', borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
              border: '1px solid #e5e7eb', zIndex: 50
            }}>
              <a href="#" style={{display: 'block', textDecoration: 'none', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: '#374151', transition: 'all 0.2s ease-in-out'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Account</a>
              <a href="#" style={{display: 'block', textDecoration: 'none', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: '#374151', transition: 'all 0.2s ease-in-out'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Settings</a>
              <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: 0 }} />
              <button style={{width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '0.5rem 0.75rem', fontSize: '0.875rem', color: '#ef4444', cursor: 'pointer', transition: 'all 0.2s ease-in-out', fontWeight: '500'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default RetailerHeader;
