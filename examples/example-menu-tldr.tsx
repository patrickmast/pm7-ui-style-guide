import React from 'react';

const ExampleMenuTLDR = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      {/* AI-Agent Friendly Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>TL;DR - Complete Integration Guide</h2>
        <div style={{ backgroundColor: '#e8f5e8', padding: '1rem', borderRadius: '8px', border: '1px solid #4caf50', marginBottom: '1rem' }}>
          <h3 style={{ color: '#2e7d32', margin: '0 0 0.5rem 0' }}>✅ FIXED - Production Ready</h3>
          <p style={{ margin: 0, color: '#2e7d32' }}>
            PM7Menu styling issues have been resolved! Separators now render correctly, rounded corners work, and shadow flickering has been eliminated.
          </p>
        </div>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
          Everything you need to integrate PM7Menu in your application
        </p>
      </div>

      {/* Quick Start Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Quick Start</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`# 1. Install the package
npm install pm7-ui-style-guide

# 2. Import the component and its styles
import { PM7Menu } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

# Note: Also import the base styles once in your app's entry point
# import 'pm7-ui-style-guide/dist/style.css';

# 4. Use the component with menuItems array
function App() {
  return (
    <PM7Menu>
      <PM7Menu.Trigger className="h-9 w-9">
        <Menu className="h-5 w-5" />
      </PM7Menu.Trigger>
      <PM7Menu.Content>
        <PM7Menu.Item onClick={() => console.log('Home')}>Home</PM7Menu.Item>
        <PM7Menu.Item onClick={() => console.log('About')}>About</PM7Menu.Item>
      </PM7Menu.Content>
    </PM7Menu>
  );
}

# Alternative: All-in-one approach (if supported)
function App() {
  const menuItems = [
    { id: 'home', label: 'Home', onClick: () => console.log('Home') },
    { id: 'about', label: 'About', onClick: () => console.log('About') }
  ];

  return <PM7Menu menuItems={menuItems} />;
}`}</code></pre>
        </div>
      </section>

      {/* Complete Implementation Examples */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Implementation Examples</h3>
        
        <h4>Basic Menu (All-in-One)</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Menu } from 'pm7-ui-style-guide';

function App() {
  const menuItems = [
    { 
      id: 'profile', 
      label: 'Profile', 
      onClick: () => console.log('Profile clicked') 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      onClick: () => console.log('Settings clicked') 
    },
    { 
      id: 'sep1', 
      type: 'separator' 
    },
    { 
      id: 'logout', 
      label: 'Logout', 
      onClick: () => console.log('Logout clicked') 
    }
  ];

  return (
    <PM7Menu 
      menuItems={menuItems}
      menuAlignment="start"
    />
  );
}`}</code></pre>
        </div>

        <h4>Menu with Custom Trigger and Icons</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Menu } from 'pm7-ui-style-guide';
import { User, Settings, LogOut } from 'lucide-react';

function App() {
  const menuItems = [
    { 
      id: 'profile', 
      label: 'My Profile', 
      icon: <User size={16} />,
      onClick: () => navigate('/profile') 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <Settings size={16} />,
      onClick: () => navigate('/settings') 
    },
    { 
      id: 'sep1', 
      type: 'separator' 
    },
    { 
      id: 'logout', 
      label: 'Sign Out', 
      icon: <LogOut size={16} />,
      onClick: () => handleLogout() 
    }
  ];

  return (
    <PM7Menu 
      menuItems={menuItems}
      menuAlignment="end"
      menuTriggerIconColorLight="#1C86EF"
      menuTriggerIconColorDark="#FFDD00"
      menuTriggerText="Account"
    />
  );
}`}</code></pre>
        </div>

        <h4>Compound Components Pattern (Recommended)</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Menu } from 'pm7-ui-style-guide';
import { Menu, Plus, Save, Download, Trash2 } from 'lucide-react';

function App() {
  return (
    <PM7Menu>
      <PM7Menu.Trigger className="h-9 w-9">
        <Menu className="h-5 w-5" />
      </PM7Menu.Trigger>
      
      <PM7Menu.Content>
        <PM7Menu.Item onClick={() => console.log('New')}>
          <Plus className="mr-2 h-4 w-4" />
          New
        </PM7Menu.Item>
        <PM7Menu.Item onClick={() => console.log('Save')} disabled={false}>
          <Save className="mr-2 h-4 w-4" />
          Save
        </PM7Menu.Item>
        <PM7Menu.Separator />
        <PM7Menu.Item onClick={() => console.log('Delete')}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </PM7Menu.Item>
      </PM7Menu.Content>
    </PM7Menu>
  );
}`}</code></pre>
        </div>

        <h4>Context Menu / Right-Click Menu</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Menu, PM7MenuContent, PM7MenuItem } from 'pm7-ui-style-guide';
import { useState } from 'react';

function App() {
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setContextMenuOpen(true);
  };

  return (
    <div onContextMenu={handleContextMenu} className="w-full h-64 bg-gray-100 dark:bg-gray-800">
      <p>Right-click anywhere in this area</p>
      
      <PM7Menu open={contextMenuOpen} onOpenChange={setContextMenuOpen}>
        <PM7MenuContent 
          style={{ 
            position: 'fixed', 
            left: position.x, 
            top: position.y 
          }}
        >
          <PM7MenuItem onClick={() => console.log('Copy')}>
            Copy
          </PM7MenuItem>
          <PM7MenuItem onClick={() => console.log('Paste')}>
            Paste
          </PM7MenuItem>
          <PM7MenuItem onClick={() => console.log('Delete')}>
            Delete
          </PM7MenuItem>
        </PM7MenuContent>
      </PM7Menu>
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Navigation Menu</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Menu } from 'pm7-ui-style-guide';
import { useNavigate } from 'react-router-dom';

function NavigationMenu() {
  const navigate = useNavigate();

  const navigationItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      onClick: () => navigate('/dashboard') 
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      onClick: () => navigate('/projects') 
    },
    { 
      id: 'reports', 
      label: 'Reports', 
      onClick: () => navigate('/reports') 
    },
    { 
      id: 'sep1', 
      type: 'separator' 
    },
    { 
      id: 'help', 
      label: 'Help & Support', 
      onClick: () => navigate('/help') 
    }
  ];

  return (
    <PM7Menu 
      menuItems={navigationItems}
      menuTriggerText="Navigation"
      menuAlignment="center"
    />
  );
}`}</code></pre>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>API Reference</h3>
        
        <h4>PM7Menu (All-in-One) Props</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Default</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>menuItems</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>MenuItem[]</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>[]</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Array of menu items</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>menuAlignment</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'start' | 'center' | 'end'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'end'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Menu content alignment</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>menuTriggerText</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Custom trigger text</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>menuTriggerIconColorLight</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'#1C86EF'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Trigger icon color in light mode</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>menuTriggerIconColorDark</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'#FFDD00'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Trigger icon color in dark mode</td>
            </tr>
          </tbody>
        </table>

        <h4>MenuItem Interface</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`interface MenuItem {
  id: string;
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'item' | 'separator';
  disabled?: boolean;
  className?: string;
}`}</code></pre>
        </div>

        <h4>Compound Components (Recommended Pattern)</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>PM7Menu</strong> - Root menu container</li>
            <li><strong>PM7Menu.Trigger</strong> - Button that opens the menu (accepts className prop)</li>
            <li><strong>PM7Menu.Content</strong> - Menu content container</li>
            <li><strong>PM7Menu.Item</strong> - Individual menu item (accepts onClick and disabled props)</li>
            <li><strong>PM7Menu.Separator</strong> - Visual separator between items</li>
            <li><strong>PM7Menu.Label</strong> - Section label for grouping items</li>
          </ul>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Note: These components are accessed as properties of PM7Menu (e.g., PM7Menu.Trigger, PM7Menu.Item)
          </p>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Important Notes</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}` }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>Automatic Styling:</strong> All PM7Menu styles are now bundled automatically - no manual CSS injection needed!</li>
            <li><strong>Built on Radix:</strong> Uses @radix-ui/react-dropdown-menu for accessibility</li>
            <li><strong>PM7 Styling:</strong> Follows PM7 design system with hover states</li>
            <li><strong>Keyboard Support:</strong> Arrow keys, Enter, ESC navigation</li>
            <li><strong>Portal Rendering:</strong> Menu content renders outside normal DOM hierarchy</li>
            <li><strong>Focus Management:</strong> Proper focus trapping and restoration</li>
          </ul>
        </div>
      </section>

      {/* Common Use Cases */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Common Use Cases</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4>User Account Menu</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Profile, settings, logout actions in app header</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Context/Right-Click Menus</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Copy, paste, delete actions on table rows or content areas</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Action Menus</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>More options, bulk actions, or secondary actions</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Navigation Menus</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Page navigation, section switching, or feature access</p>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section>
        <h3>Package Information</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>NPM:</strong> pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7Menu</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Peer Dependency:</strong> @radix-ui/react-dropdown-menu, lucide-react</p>
        </div>
      </section>
    </div>
  );
};

export default ExampleMenuTLDR;