import React, { useState } from 'react';
import { PM7ThemeToggle, ThemeType } from '../src/components/theme-toggle';

const ExampleThemeToggleExamples = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [controlledTheme, setControlledTheme] = useState<ThemeType>('light');

  return (
    <div>
      <h2>Interactive Examples</h2>
      
      <div className="example-section">
        <h3>Basic Usage (Uncontrolled)</h3>
        <p>This toggle manages its own state and applies theme to the document automatically.</p>
        <div className="example-preview">
          <PM7ThemeToggle />
        </div>
        <div className="example-code">
          <h4>Code</h4>
          <pre><code>{`import { PM7ThemeToggle } from 'pm7-ui-style-guide';

<PM7ThemeToggle />`}</code></pre>
        </div>
      </div>

      <div className="example-section">
        <h3>Controlled Usage</h3>
        <p>This toggle is controlled by parent component state. Current theme: <strong>{controlledTheme}</strong></p>
        <div className="example-preview">
          <PM7ThemeToggle 
            theme={controlledTheme}
            onThemeChange={setControlledTheme}
          />
        </div>
        <div className="example-code">
          <h4>Code</h4>
          <pre><code>{`import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';
import { useState } from 'react';

const [theme, setTheme] = useState<ThemeType>('light');

<PM7ThemeToggle 
  theme={theme}
  onThemeChange={setTheme}
/>`}</code></pre>
        </div>
      </div>

      <div className="example-section">
        <h3>Size Variants</h3>
        <p>Available in small, medium (default), and large sizes.</p>
        <div className="example-preview" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <PM7ThemeToggle size="small" />
            <span style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#9ca3af' : '#666' }}>Small</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <PM7ThemeToggle size="medium" />
            <span style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#9ca3af' : '#666' }}>Medium</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <PM7ThemeToggle size="large" />
            <span style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#9ca3af' : '#666' }}>Large</span>
          </div>
        </div>
        <div className="example-code">
          <h4>Code</h4>
          <pre><code>{`<PM7ThemeToggle size="small" />
<PM7ThemeToggle size="medium" /> {/* default */}
<PM7ThemeToggle size="large" />`}</code></pre>
        </div>
      </div>

      <div className="example-section">
        <h3>Custom Styling</h3>
        <p>You can add custom CSS classes for additional styling.</p>
        <div className="example-preview">
          <div style={{ padding: '1rem', border: `2px dashed ${theme === 'dark' ? '#555' : '#ccc'}`, borderRadius: '8px' }}>
            <PM7ThemeToggle 
              className="custom-theme-toggle"
              style={{ marginLeft: '2rem' }}
            />
          </div>
        </div>
        <div className="example-code">
          <h4>Code</h4>
          <pre><code>{`<PM7ThemeToggle 
  className="custom-theme-toggle"
  style={{ marginLeft: '2rem' }}
/>`}</code></pre>
        </div>
      </div>

      <div className="example-section">
        <h3>Header Integration Example</h3>
        <p>How the theme toggle looks in a typical application header.</p>
        <div className="example-preview">
          <div style={{ 
            background: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
            padding: '1rem 2rem',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}`
          }}>
            <h3 style={{ margin: 0, color: theme === 'dark' ? '#e0e0e0' : '#333' }}>My Application</h3>
            <PM7ThemeToggle size="medium" />
          </div>
        </div>
        <div className="example-code">
          <h4>Code</h4>
          <pre><code>{`<header style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: '1rem 2rem'
}}>
  <h1>My Application</h1>
  <PM7ThemeToggle />
</header>`}</code></pre>
        </div>
      </div>

      <div className="example-section">
        <h3>Settings Panel Example</h3>
        <p>Theme toggle as part of a settings or preferences panel.</p>
        <div className="example-preview">
          <div style={{ 
            background: theme === 'dark' ? '#1e1e1e' : 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            border: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}`,
            maxWidth: '400px'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Preferences</h4>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div>
                <div style={{ fontWeight: '500', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Theme</div>
                <div style={{ fontSize: '0.9rem', color: theme === 'dark' ? '#9ca3af' : '#666' }}>
                  Choose your preferred color scheme
                </div>
              </div>
              <PM7ThemeToggle size="medium" />
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div>
                <div style={{ fontWeight: '500', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Notifications</div>
                <div style={{ fontSize: '0.9rem', color: theme === 'dark' ? '#9ca3af' : '#666' }}>
                  Enable push notifications
                </div>
              </div>
              <PM7ThemeToggle size="small" />
            </div>
          </div>
        </div>
        <div className="example-code">
          <h4>Code</h4>
          <pre><code>{`<div className="settings-panel">
  <h4>Preferences</h4>
  <div className="setting-item">
    <div>
      <div className="setting-label">Theme</div>
      <div className="setting-description">
        Choose your preferred color scheme
      </div>
    </div>
    <PM7ThemeToggle />
  </div>
</div>`}</code></pre>
        </div>
      </div>

      <div className="example-section">
        <h3>Keyboard Navigation Test</h3>
        <p>Try using Tab to focus and Enter/Space to toggle these switches:</p>
        <div className="example-preview" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <PM7ThemeToggle size="small" data-component-name="test-1" />
          <PM7ThemeToggle size="medium" data-component-name="test-2" />
          <PM7ThemeToggle size="large" data-component-name="test-3" />
        </div>
        <p style={{ fontSize: '0.9rem', color: theme === 'dark' ? '#9ca3af' : '#666', fontStyle: 'italic' }}>
          Use Tab to navigate between toggles, then press Enter or Space to activate them.
        </p>
      </div>
    </div>
  );
};

export default ExampleThemeToggleExamples;