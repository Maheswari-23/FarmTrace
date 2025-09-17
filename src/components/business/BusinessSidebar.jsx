import React from 'react';

// SVG Icon Components for a cleaner look
const IconDashboard = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const IconInventory = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const IconReceive = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const IconTransfer = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>;


const BusinessSidebar = ({ activeSection, onSectionChange, isCollapsed }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <IconDashboard /> },
    { id: 'inventory', label: 'Inventory', icon: <IconInventory /> },
    { id: 'receive', label: 'Receive Goods', icon: <IconReceive /> },
    { id: 'transfer', label: 'Transfer History', icon: <IconTransfer /> },
  ];

  return (
    <aside
      style={{
        position: 'fixed',
        top: '70px',
        left: 0,
        height: 'calc(100vh - 70px)',
        width: isCollapsed ? '80px' : '240px',
        background: 'white',
        color: '#1f2937',
        transition: 'width 0.3s ease-in-out',
        overflow: 'hidden',
        borderRight: '1px solid #e5e7eb',
        boxShadow: '1px 0 8px rgba(0,0,0,0.05)',
      }}
    >
      <nav style={{ padding: '1rem 0.75rem' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} style={{ margin: '0.25rem 0' }}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: isActive ? '#eff6ff' : 'transparent',
                    border: 'none',
                    color: isActive ? '#2563eb' : '#4b5563',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? '600' : '500',
                    textAlign: 'left',
                    borderRadius: '8px',
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default BusinessSidebar;