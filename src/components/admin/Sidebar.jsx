import React from 'react';
import { LayoutDashboard, Users, Link, BarChart2, AlertTriangle, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed, activePage, setActivePage }) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, name: 'Dashboard' },
    { icon: <Users size={20} />, name: 'User Management' },
    { icon: <Link size={20} />, name: 'Transaction Explorer' },
    { icon: <BarChart2 size={20} />, name: 'Analytics & Reports' },
    { icon: <AlertTriangle size={20} />, name: 'Dispute Center' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul>
            {navItems.map(item => (
              <li key={item.name}>
                <button 
                  className={`nav-item ${activePage === item.name ? 'active' : ''}`}
                  onClick={() => setActivePage(item.name)}
                >
                  {item.icon}
                  <span className="nav-text">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="sidebar-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
          <span className="nav-text">Collapse</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;