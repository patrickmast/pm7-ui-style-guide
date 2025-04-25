// Enhancement: Updated the examples app to include a sidebar navigation and use PM7Menu components
import React, { useState } from 'react';

// Import example components
import MenuExample from './menu-example';

// Import CSS
import './examples.css';

// Main App
const App = () => {
  const [activeComponent, setActiveComponent] = useState('menu');

  // Render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'menu':
      default:
        return <MenuExample />;
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Winfakt UI Style Guide</h1>
      </header>
      <div className="content-wrapper">
        <aside className="sidebar">
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
          </ul>
        </aside>
        <main>
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
