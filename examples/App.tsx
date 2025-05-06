// Enhancement: Added a Button section to the examples app and integrated ButtonExample component into navigation and rendering logic.
import React, { useState, useRef, useEffect } from 'react';

// Import example components
import MenuExample from './menu-example';
import ButtonExample from './button-example';
import { Menu, PM7MenuItemType } from '../src/components/menu/pm7-menu';

// Import CSS
import './examples.css';

// Constants
const SIDEBAR_WIDTH_KEY = 'pm7-ui-style-guide-sidebar-width';
const MIN_SIDEBAR_WIDTH = 150;

// SVG Components
const SidebarCollapseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.75">
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"/>
    <path d="m15 10-2 2 2 2"/>
  </svg>
);

const SidebarExpandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.75">
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"/>
    <path d="m14 10 2 2-2 2"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1.75">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

// Main App
const App = () => {
  const [activeComponent, setActiveComponent] = useState('menu');
  // Initialize sidebar width from localStorage or default to 165px
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    const savedWidth = localStorage.getItem(SIDEBAR_WIDTH_KEY);
    return savedWidth ? parseInt(savedWidth, 10) : 165;
  });
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const sidebarRef = useRef(null);
  const resizingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  // Save sidebar width to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(SIDEBAR_WIDTH_KEY, sidebarWidth.toString());
  }, [sidebarWidth]);

  const handleMouseDown = (e) => {
    resizingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = sidebarWidth;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!resizingRef.current) return;
    const newWidth = startWidthRef.current + (e.clientX - startXRef.current);
    if (newWidth >= MIN_SIDEBAR_WIDTH) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    resizingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'menu':
        return <MenuExample />;
      case 'button':
        return <ButtonExample />;
      default:
        return <div>Select a component from the sidebar</div>;
    }
  };

  // Define menu items
  const menuItems = [
    {
      id: 'menu-component',
      label: 'Menu Component',
      type: 'item' as PM7MenuItemType,
      onClick: () => setActiveComponent('menu')
    },
    {
      id: 'button-component',
      label: 'Button Component',
      type: 'item' as PM7MenuItemType,
      onClick: () => setActiveComponent('button')
    },
    {
      id: 'divider-1',
      type: 'separator' as PM7MenuItemType
    },
    {
      id: 'sidebar-toggle',
      label: sidebarVisible ? 'Hide sidebar' : 'Show sidebar',
      type: 'switch' as PM7MenuItemType,
      checked: sidebarVisible,
      onChange: (checked) => setSidebarVisible(checked)
    },
    {
      id: 'divider-2',
      type: 'separator' as PM7MenuItemType
    },
    {
      id: 'version-info',
      label: 'Version Info',
      type: 'item' as PM7MenuItemType,
      onClick: () => alert('PM7 UI Style Guide v1.0.0')
    }
  ];

  return (
    <div className="app-container">
      <header>
        <div className="header-controls">
          <button className="sidebar-toggle" onClick={toggleSidebar} aria-label={sidebarVisible ? "Hide sidebar" : "Show sidebar"}>
            {sidebarVisible ? <SidebarCollapseIcon /> : <SidebarExpandIcon />}
          </button>
          <div className="menu-wrapper">
            <Menu menuItems={menuItems} menuAlignment="start" menuIconColor="white" />
          </div>
        </div>
        <h1>Winfakt UI Style Guide</h1>
      </header>
      <div className="content-wrapper">
        {sidebarVisible && (
          <aside 
            className="sidebar" 
            ref={sidebarRef} 
            style={{ width: `${sidebarWidth}px` }}
          >
            <div className="sidebar-title">Components</div>
            <ul className="sidebar-nav">
              <li className={`sidebar-nav-item ${activeComponent === 'menu' ? 'active' : ''}`}>
                <a 
                  href="#menu" 
                  className="sidebar-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveComponent('menu');
                  }}
                >
                  Menu
                </a>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'button' ? 'active' : ''}`}>
                <a
                  href="#button"
                  className="sidebar-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveComponent('button');
                  }}
                >
                  Button
                </a>
              </li>
            </ul>
          </aside>
        )}
        {sidebarVisible && (
          <div 
            className="resize-handle"
            onMouseDown={handleMouseDown}
            style={{ left: `${sidebarWidth}px` }}
          ></div>
        )}
        <main style={{ marginLeft: sidebarVisible ? undefined : '0' }}>
          {renderComponent()}
        </main>
      </div>
      <footer>
        <p>Winfakt UI Style Guide - A collection of reusable UI components</p>
      </footer>
    </div>
  );
};

export default App;
