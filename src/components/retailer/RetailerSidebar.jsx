import React from 'react';

const RetailerSidebar = ({ activeSection, onSectionChange, isCollapsed }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
        </svg>
      )
    },
    {
      id: 'inventory-provenance',
      label: 'Inventory & Provenance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      id: 'orders-payments',
      label: 'Orders & Payments',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="2"></rect>
          <line x1="8" y1="10" x2="16" y2="10"></line>
          <line x1="8" y1="14" x2="16" y2="14"></line>
        </svg>
      )
    },
    {
      id: 'analytics-insights',
      label: 'Analytics & Insights',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      id: 'qr-verification',
      label: 'QR Verification Hub',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"></rect>
          <rect x="14" y="3" width="7" height="7" rx="1"></rect>
          <rect x="14" y="14" width="7" height="7" rx="1"></rect>
          <rect x="3" y="14" width="7" height="7" rx="1"></rect>
        </svg>
      )
    },
    {
      id: 'dispute-support',
      label: 'Dispute & Support',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      background: 'linear-gradient(180deg, #fff 0%, #FFF4EE 100%)',
      borderRight: '1px solid #FFD6C2',
      transition: 'all 0.3s ease-in-out',
      zIndex: 900,
      overflow: 'hidden',
      boxShadow: '4px 0 6px -1px rgba(0,0,0,0.1)'
    }}>
      <nav style={{ padding: '1rem 0', height: '100%' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {menuItems.map((item) => (
            <li key={item.id} style={{ margin: '0.25rem 0', position: 'relative' }}>
              <button
                onClick={() => onSectionChange(item.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  gap: '0.75rem', padding: isCollapsed ? '0.75rem' : '0.75rem 1.5rem',
                  background: activeSection === item.id ? 'linear-gradient(135deg, #FF521B, #FF7C52)' : 'transparent',
                  color: activeSection === item.id ? '#ffffff' : '#374151',
                  border: 'none', cursor: 'pointer', fontSize: '0.875rem',
                  fontWeight: activeSection === item.id ? '600' : '500',
                  transition: 'all 0.2s ease-in-out', textAlign: 'left', borderRadius: 0,
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = '#FFE6DD';
                    e.currentTarget.style.color = '#FF521B';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                {activeSection === item.id && (
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: '4px', background: '#ffffff'
                  }}></div>
                )}
                <span style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', minWidth: '20px'
                }}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span style={{ whiteSpace: 'nowrap' }}>
                    {item.label}
                  </span>
                )}
              </button>

              {isCollapsed && (
                <div className="sidebar-tooltip" style={{
                  position: 'absolute', left: '80px', top: '50%', transform: 'translateY(-50%)',
                  background: '#FF521B', color: 'white', padding: '0.5rem 0.75rem',
                  borderRadius: '4px', fontSize: '0.75rem', whiteSpace: 'nowrap',
                  opacity: 0, pointerEvents: 'none', transition: 'opacity 0.2s ease-in-out',
                  zIndex: 1000, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}>
                  {item.label}
                  <div style={{
                    position: 'absolute', left: '-4px', top: '50%',
                    transform: 'translateY(-50%)', width: 0, height: 0,
                    borderTop: '4px solid transparent', borderBottom: '4px solid transparent',
                    borderRight: '4px solid #FF521B'
                  }}></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default RetailerSidebar;
