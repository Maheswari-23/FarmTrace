import React from 'react';
import { LayoutDashboard, Package, ArrowDownLeft, History, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed, activePage, setActivePage }) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, name: 'Dashboard' },
    { icon: <Package size={20} />, name: 'Inventory' },
    { icon: <ArrowDownLeft size={20} />, name: 'Receive Goods' },
    { icon: <History size={20} />, name: 'Transfer History' },
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