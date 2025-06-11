import React from 'react';

const ExampleThemeToggleAPI = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      <h2>API Reference</h2>
      
      <h3>PM7ThemeToggle</h3>
      <p>The main theme toggle component.</p>

      <h4>Props</h4>
      <div className="example-code">
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Default</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>theme</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>'light' | 'dark'</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>-</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Controlled theme value. When provided, component operates in controlled mode.</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>onThemeChange</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>(theme: ThemeType) =&gt; void</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>-</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Callback function called when theme changes. Required for controlled mode.</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>size</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>'small' | 'medium' | 'large'</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>'medium'</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Size variant of the toggle switch.</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>className</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>string</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>''</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Additional CSS classes to apply to the component.</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>data-component-name</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>string</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>-</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Data attribute for component identification in testing or analytics.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Types</h4>
      <div className="example-code">
        <pre><code>{`// Theme type definition
export type ThemeType = 'light' | 'dark';

// Component props interface
export interface PM7ThemeToggleProps {
  theme?: ThemeType;
  onThemeChange?: (theme: ThemeType) =&gt; void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  'data-component-name'?: string;
}`}</code></pre>
      </div>

      <h3>CSS Custom Properties</h3>
      <p>The component uses CSS custom properties for theming that can be overridden:</p>
      <div className="example-code">
        <pre><code>{`:root {
  --pm7-theme-switch-bg: white;
  --pm7-theme-switch-dark-icon: white;
  --pm7-theme-switch-dark-thumb-bg: #6E6E6E;
  --pm7-theme-switch-light-icon: black;
  --pm7-theme-switch-thumb-bg: #FFD43B;
}`}</code></pre>
      </div>

      <h3>Size Specifications</h3>
      <div className="example-code">
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Size</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Switch Dimensions</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Thumb Size</th>
              <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Icon Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>small</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>42px × 21px</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>17px</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>12px</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>medium</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>56px × 28px</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>24px</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>16px</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}><code>large</code></td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>70px × 35px</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>31px</td>
              <td style={{ padding: '0.75rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>20px</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Accessibility Attributes</h3>
      <p>The component automatically includes proper accessibility attributes:</p>
      <ul>
        <li><code>role="button"</code> - Identifies the element as a button</li>
        <li><code>tabIndex={0}</code> - Makes the element keyboard focusable</li>
        <li><code>aria-label</code> - Descriptive label indicating the action (e.g., "Switch to dark mode")</li>
      </ul>

      <h3>Browser Support</h3>
      <p>The component supports all modern browsers that support:</p>
      <ul>
        <li>CSS custom properties (CSS variables)</li>
        <li>CSS transforms</li>
        <li>ES6+ JavaScript features</li>
        <li>React 18+</li>
      </ul>
    </div>
  );
};

export default ExampleThemeToggleAPI;