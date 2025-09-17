import React from 'react';

const AdminSidebar = ({ activeSection, onSectionChange, isCollapsed }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      id: 'user-management',
      label: 'User Management',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 'transaction-explorer',
      label: 'Transaction Explorer',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
        </svg>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics & Reports',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      id: 'dispute-center',
      label: 'Dispute Center',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      )
    }
  ];

  return (
    <aside style={{
      position: 'fixed',
      top: '80px',
      left: 0,
      height: 'calc(100vh - 80px)',
      width: isCollapsed ? '80px' : '250px',
      background: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)',
      borderRight: '1px solid #e9d5ff',
      transition: 'all 0.3s ease-in-out',
      zIndex: 900,
      overflow: 'hidden',
      boxShadow: '4px 0 6px -1px rgb(0 0 0 / 0.1)'
    }}>
      {/* Navigation Menu */}
      <nav style={{
        padding: '1rem 0',
        height: '100%',
        overflow: 'hidden'
      }}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {menuItems.map((item) => (
            <li key={item.id} style={{ margin: '0.25rem 0' }}>
              <button
                onClick={() => onSectionChange(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: isCollapsed ? '0.75rem' : '0.75rem 1.5rem',
                  background: activeSection === item.id 
                    ? 'linear-gradient(135deg, #7c3aed, #a855f7)' 
                    : 'transparent',
                  color: activeSection === item.id ? '#ffffff' : '#374151',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: activeSection === item.id ? '600' : '500',
                  transition: 'all 0.2s ease-in-out',
                  textAlign: 'left',
                  borderRadius: 0,
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.backgroundColor = '#f3e8ff';
                    e.target.style.color = '#7c3aed';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== item.id) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: '#ffffff',
                    borderRadius: '0 4px 4px 0'
                  }}></div>
                )}
                
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '20px'
                }}>
                  {item.icon}
                </span>
                
                {!isCollapsed && (
                  <span style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                  }}>
                    {item.label}
                  </span>
                )}
              </button>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div style={{
                  position: 'absolute',
                  left: '80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#1f2937',
                  color: 'white',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.2s ease-in-out',
                  zIndex: 1000,
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                className="sidebar-tooltip"
                >
                  {item.label}
                  <div style={{
                    position: 'absolute',
                    left: '-4px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderRight: '4px solid #1f2937'
                  }}></div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Bottom section - System Status */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: isCollapsed ? '50%' : '1.5rem',
          right: isCollapsed ? 'auto' : '1.5rem',
          transform: isCollapsed ? 'translateX(-50%)' : 'none'
        }}>
          {!isCollapsed ? (
            <div style={{
              padding: '0.75rem',
              background: 'rgba(124, 58, 237, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(124, 58, 237, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#10b981',
                  borderRadius: '50%'
                }}></div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#374151'
                }}>
                  System Status
                </span>
              </div>
              <div style={{
                fontSize: '0.625rem',
                color: '#6b7280',
                lineHeight: 1.4
              }}>
                All systems operational
                <br />
                Last updated: 2 min ago
              </div>
            </div>
          ) : (
            <div style={{
              width: '32px',
              height: '32px',
              background: 'rgba(124, 58, 237, 0.05)',
              borderRadius: '50%',
              border: '1px solid rgba(124, 58, 237, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10b981',
                borderRadius: '50%'
              }}></div>
            </div>
          )}
        </div>
      </nav>

      {/* Add hover styles for tooltips */}
      <style>
        {`
          .sidebar-tooltip:hover {
            opacity: 1 !important;
          }
          li:hover .sidebar-tooltip {
            opacity: 1 !important;
          }
        `}
      </style>
    </aside>
  );
};

export default AdminSidebar;