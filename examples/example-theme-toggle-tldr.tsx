import React from 'react';

const ExampleThemeToggleTLDR = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      {/* AI-Agent Friendly Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>TL;DR - Complete Integration Guide</h2>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
          Everything you need to integrate PM7ThemeToggle in your application
        </p>
      </div>

      {/* Quick Start Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Quick Start</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`# 1. Install the package
npm install pm7-ui-style-guide

# 2. Import the component and CSS
import { PM7ThemeToggle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/theme-toggle/pm7-theme-toggle.css';

# 3. Use in your component
function App() {
  return <PM7ThemeToggle />;
}`}</code></pre>
        </div>
      </section>

      {/* Complete Implementation Examples */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Implementation Examples</h3>
        
        <h4>Basic Usage (Uncontrolled)</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7ThemeToggle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/theme-toggle/pm7-theme-toggle.css';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <PM7ThemeToggle />
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Controlled Usage with State Management</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';
import 'pm7-ui-style-guide/dist/components/theme-toggle/pm7-theme-toggle.css';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <PM7ThemeToggle 
        theme={theme} 
        onThemeChange={setTheme} 
      />
    </div>
  );
}`}</code></pre>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>API Reference</h3>
        
        <h4>Props</h4>
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
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>theme</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'light' | 'dark'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Controlled theme value</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>onThemeChange</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>(theme: ThemeType) =&gt; void</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Callback when theme changes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>size</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'small' | 'medium' | 'large'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'medium'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Size variant</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>className</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>''</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Additional CSS classes</td>
            </tr>
          </tbody>
        </table>

        <h4>TypeScript Types</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`export type ThemeType = 'light' | 'dark';

export interface PM7ThemeToggleProps {
  theme?: ThemeType;
  onThemeChange?: (theme: ThemeType) => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  'data-component-name'?: string;
}`}</code></pre>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Important Notes</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}` }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>CSS Import Required:</strong> You must import the CSS file for proper styling</li>
            <li><strong>Theme Persistence:</strong> The component automatically saves theme preference to localStorage</li>
            <li><strong>System Preference:</strong> Detects system dark mode preference on first load</li>
            <li><strong>Accessibility:</strong> Fully keyboard accessible with proper ARIA labels</li>
            <li><strong>SSR Safe:</strong> Handles server-side rendering gracefully</li>
          </ul>
        </div>
      </section>

      {/* Common Issues */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Common Issues & Solutions</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4>Styles not appearing</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <code>import 'pm7-ui-style-guide/dist/components/theme-toggle/pm7-theme-toggle.css';</code>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Theme not applying to application</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);`}</code></pre>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section>
        <h3>Package Information</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>NPM:</strong> pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7ThemeToggle</p>
        </div>
      </section>
    </div>
  );
};

export default ExampleThemeToggleTLDR;