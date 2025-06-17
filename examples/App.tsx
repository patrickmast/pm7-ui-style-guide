// Enhancement: Added a Button section to the examples app and integrated ButtonExample component into navigation and rendering logic.
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { getActiveTab } from './utils/tab-persistence';
// Import package.json to access version information
import packageJson from '../package.json';

// Import example components
import MenuExample from './example-menu';
import ButtonExample from './example-button';
import InputExample from './example-input';
import DialogExample from './example-dialog';
import TabSelectorExample from './example-tab-selector';
import ExampleCard from './example-card';
import ExampleThemeToggle from './example-theme-toggle';
import ExampleComponentsTest from './example-components-test';
import { Menu, PM7MenuItemType } from '../src/components/menu';
import { PM7Button } from '../src/components/button/pm7-button';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogSubTitle,
  PM7DialogFooter,
  PM7DialogSeparator
} from '../src/components/dialog';
import '../src/components/dialog/pm7-dialog.css';
import { PM7ThemeToggle, ThemeType } from '../src/components/theme-toggle';

// Import CSS
import './examples.css';
import './examples-sidebar.css';


// Component wrapper that handles routing
const ComponentPage = () => {
  const { component } = useParams<{ component: string }>();
  const navigate = useNavigate();

  const activeComponent = component || 'menu';

  // Initialize sidebar visibility from localStorage or default to true
  // Also consider window width for initial state
  const [sidebarVisible, setSidebarVisible] = useState(() => {
    const savedVisibility = localStorage.getItem('pm7-ui-style-guide-sidebar-visible');
    // If window width is less than 800px, hide sidebar by default
    if (typeof window !== 'undefined' && window.innerWidth < 800) {
      return false;
    }
    return savedVisibility ? savedVisibility === 'true' : true;
  });
  // Initialize theme state from localStorage or system preference
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme as ThemeType;
    }
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light theme
  });

  const [showVersionDialog, setShowVersionDialog] = useState(false);

  // Handle legacy localStorage and redirect if needed
  useEffect(() => {
    const savedComponent = localStorage.getItem('pm7-ui-style-guide-active-component');
    if (savedComponent && !component) {
      navigate(`/${savedComponent}`);
      localStorage.removeItem('pm7-ui-style-guide-active-component');
    }
  }, [component, navigate]);

  // Apply theme to document when component mounts and when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Apply dark mode class to html element
      document.documentElement.classList.toggle('dark', theme === 'dark');
      // Apply dark mode class to body element for component examples
      document.body.classList.toggle('dark', theme === 'dark');
      // Save theme preference to localStorage
      localStorage.setItem('pm7-theme', theme);
    }
  }, [theme]);


  // Add responsive behavior to hide sidebar when window width is less than 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSidebarVisible(false);
      } else {
        // Only restore sidebar if it was previously visible before resizing below 800px
        const savedVisibility = localStorage.getItem('pm7-ui-style-guide-sidebar-visible');
        if (savedVisibility === 'true') {
          setSidebarVisible(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  const renderComponent = () => {
    switch (activeComponent) {
      case 'menu':
        return <MenuExample theme={theme} />;
      case 'button':
        return <ButtonExample theme={theme} />;
      case 'input':
        return <InputExample theme={theme} />;
      case 'dialog':
        return <DialogExample theme={theme} />;
      case 'tabselector':
        return <TabSelectorExample theme={theme} />;
      case 'card':
        return <ExampleCard theme={theme} />;
      case 'themetoggle':
        return <ExampleThemeToggle theme={theme} />;
      case 'all-components':
        return <ExampleComponentsTest theme={theme} onThemeChange={setTheme} />;
      default:
        return <MenuExample theme={theme} />;
    }
  };

  // Define menu items
  const menuItems = [
    {
      id: 'components-submenu',
      label: 'Component',
      type: 'submenu' as PM7MenuItemType,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="m3 12 3 3 3-3-3-3zm12 0 3 3 3-3-3-3zM9 6l3 3 3-3-3-3zm0 12 3 3 3-3-3-3z"/>
      </svg>
      ),
      submenuItems: [
        {
          id: 'menu-component',
          label: 'Menu',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'menu',
          onClick: () => navigate('/menu')
        },
        {
          id: 'button-component',
          label: 'Button',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'button',
          onClick: () => navigate('/button')
        },
        {
          id: 'input-component',
          label: 'Input',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'input',
          onClick: () => navigate('/input')
        },
        {
          id: 'dialog-component',
          label: 'Dialog',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'dialog',
          onClick: () => navigate('/dialog')
        },
        {
          id: 'tab-selector-component',
          label: 'Tab Selector',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'tabselector',
          onClick: () => navigate('/tabselector')
        },
        {
          id: 'card-component',
          label: 'Card',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'card',
          onClick: () => navigate('/card')
        },
        {
          id: 'theme-toggle-component',
          label: 'Theme Toggle',
          type: 'check' as PM7MenuItemType,
          checked: activeComponent === 'themetoggle',
          onClick: () => navigate('/themetoggle')
        }
      ]
    },
    {
      id: 'divider-1',
      type: 'separator' as PM7MenuItemType
    },
    {
      id: 'all-components',
      label: 'All',
      type: 'check' as PM7MenuItemType,
      checked: activeComponent === 'all-components',
      onClick: () => navigate('/all-components'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
        </svg>
      )
    },
    {
      id: 'divider-2',
      type: 'separator' as PM7MenuItemType
    },
    {
      id: 'sidebar-toggle',
      label: sidebarVisible ? 'Hide sidebar' : 'Show sidebar',
      type: 'switch' as PM7MenuItemType,
      checked: sidebarVisible,
      onChange: (checked: boolean) => {
        setSidebarVisible(checked);
        localStorage.setItem('pm7-ui-style-guide-sidebar-visible', checked.toString());
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" strokeWidth="2">
          <path d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM18 5h-8v14h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"/>
        </svg>
      ),
    },
    {
      id: 'divider-2',
      type: 'separator' as PM7MenuItemType
    },
    {
      id: 'version-info',
      label: 'Version Info',
      type: 'item' as PM7MenuItemType,
      onClick: () => setShowVersionDialog(true),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" strokeWidth="2">
          <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0m9-3h.01"/>
          <path d="M11 12h1v4h1"/>
        </svg>
      )
    }
  ];

  return (
    <div className="app-container">
      <header>
        <div className="header-controls">
          <div className="menu-wrapper">
            <Menu menuItems={menuItems}
                  menuAlignment="start"
                  menuTriggerIconColor="#FFFFFF"
                  menuTriggerIconColorDark="#FFFFFF"
                  theme={theme as 'light' | 'dark'}
            />
          </div>
          <div style={{ marginRight: '-5px', position: 'relative', left: '-5px', top: '1px' }}>
            <PM7ThemeToggle
              theme={theme}
              onThemeChange={setTheme}
              size="small"
              data-component-name="App"
            />
          </div>
        </div>
        <h1>PM7 UI Style Guide</h1>
      </header>
      <div className={`content-wrapper ${theme === 'dark' ? 'dark' : ''}`}>
        {sidebarVisible && (
          <aside
            className="sidebar"
            style={{ width: '165px' }}
          >
            <div className="sidebar-title">Components</div>
            <ul className="sidebar-nav">
              <li className={`sidebar-nav-item ${activeComponent === 'menu' ? 'active' : ''}`}>
                <Link
                  to={`/menu/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Menu
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'button' ? 'active' : ''}`}>
                <Link
                  to={`/button/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Button
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'input' ? 'active' : ''}`}>
                <Link
                  to={`/input/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Input
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'dialog' ? 'active' : ''}`}>
                <Link
                  to={`/dialog/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Dialog
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'tabselector' ? 'active' : ''}`}>
                <Link
                  to={`/tabselector/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Tab Selector
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'card' ? 'active' : ''}`}>
                <Link
                  to={`/card/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Card
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'themetoggle' ? 'active' : ''}`}>
                <Link
                  to={`/themetoggle/${getActiveTab('overview')}`}
                  className="sidebar-nav-link"
                >
                  Theme Toggle
                </Link>
              </li>
              <li className={`sidebar-nav-item ${activeComponent === 'all-components' ? 'active' : ''}`} style={{ borderTop: '1px solid #e5e7eb', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                <Link
                  to="/all-components"
                  className="sidebar-nav-link"
                >
                  All
                </Link>
              </li>
            </ul>
          </aside>
        )}
        <main data-theme={theme} className={theme === 'dark' ? 'dark' : ''} style={{ marginLeft: sidebarVisible ? undefined : '0' }}>
          {renderComponent()}
        </main>
      </div>
      <footer className="pm7-footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div 
              className="footer-logo"
              style={{
                width: '32px',
                height: '32px',
                maskImage: 'url(/dancing-patrick-logo.svg)',
                WebkitMaskImage: 'url(/dancing-patrick-logo.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                backgroundColor: theme === 'dark' ? '#3b9eff' : '#1C86EF'
              }}
              aria-label="PM7 Logo"
            />
            <div className="footer-brand">
              <h4 className="footer-title">PM7 UI Style Guide</h4>
              <p className="footer-subtitle">Professional UI Components for Modern Applications</p>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h5 className="footer-section-title">Resources</h5>
              <ul className="footer-link-list">
                <li><a href="/menu/documentation" className="footer-link">Documentation</a></li>
                <li><a href="/menu/usage" className="footer-link">Getting Started</a></li>
                <li><a href="https://github.com/patrickmast/pm7-ui-style-guide" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h5 className="footer-section-title">Components</h5>
              <ul className="footer-link-list">
                <li><a href="/menu/overview" className="footer-link">Menu</a></li>
                <li><a href="/button/overview" className="footer-link">Button</a></li>
                <li><a href="/dialog/overview" className="footer-link">Dialog</a></li>
                <li><a href="/card/overview" className="footer-link">Card</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 PM7. Built with ❤️ for modern web development.
            <span className="footer-version">v{packageJson.version}</span>
          </p>
        </div>
      </footer>
      {/* Version Info Dialog */}
      <PM7Dialog open={showVersionDialog} onOpenChange={setShowVersionDialog}>
        <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
          <PM7DialogHeader>
            <PM7DialogTitle>PM7 UI Style Guide</PM7DialogTitle>
            <PM7DialogSubTitle>
              Version: {packageJson.version}
            </PM7DialogSubTitle>
          </PM7DialogHeader>
          <PM7DialogSeparator className={theme === 'dark' ? 'dark' : ''} marginTop='16px' marginBottom='16px' />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{
                fontWeight: '500',
                minWidth: '100px',
                color: theme === 'dark' ? '#9ca3af' : '#64748b'
              }}>
                Package:
              </span>
              <span>pm7-ui-style-guide</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                fontWeight: '500',
                minWidth: '100px',
                color: theme === 'dark' ? '#9ca3af' : '#64748b'
              }}>
                License:
              </span>
              <a
                href="https://opensource.org/licenses/ISC"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme === 'dark' ? '#3b9eff' : '#1C86EF', textDecoration: 'underline' }}
              >
                https://opensource.org/licenses/ISC
              </a>
            </div>
          </div>
          <PM7DialogFooter>
            <PM7Button
              onClick={() => setShowVersionDialog(false)}
            >
              Close
            </PM7Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </div>
  );
};

// Main App with Router
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/menu/overview" replace />} />
        <Route path="/:component/*" element={<ComponentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;