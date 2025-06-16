import React from 'react';

const ExampleButtonUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem'
  };

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    padding: '0.75rem',
    borderRadius: '0.375rem'
  };

  const tableStyle = {
    width: '100%',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#ffffff',
    border: `1px solid ${theme === 'dark' ? '#525252' : '#ddd'}`,
    borderCollapse: 'collapse' as const
  };

  const thStyle = {
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme === 'dark' ? '#525252' : '#ddd'}`,
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    textAlign: 'left' as const
  };

  const tdStyle = {
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme === 'dark' ? '#525252' : '#ddd'}`,
    color: theme === 'dark' ? '#e0e0e0' : '#333'
  };

  return (
    <>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Button Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The PM7Button component is a customizable button that supports various styles, sizes, and states with automatic theme detection.</p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Import</h4>
        <div style={codeBlockStyle}>
          <p>import {'{ PM7Button as Button, buttonRules }'} from 'pm7-ui-style-guide';</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Button Variants</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>PM7Button supports multiple style variants through CSS classes:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Default Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Use the base button class for the default style.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button"</p>
          </div>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Outline Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Buttons with a border and transparent background.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button pm7-button-outline"</p>
          </div>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Secondary Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Alternative button style with different background color.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button pm7-button-secondary"</p>
          </div>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Ghost Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Transparent button that becomes visible on hover.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button pm7-button-ghost"</p>
          </div>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Link Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Button that appears as a text link with underline.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button pm7-button-link"</p>
          </div>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Button Sizes</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Customize button size using the size classes:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Small Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Reduced size button for compact interfaces.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button pm7-button-small"</p>
          </div>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Default Size</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Standard button size, no additional class needed.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button"</p>
          </div>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Large Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Larger button for emphasis or improved touch targets.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>className="pm7-button pm7-button-large"</p>
          </div>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Button States</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Handle disabled state:</p>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Disabled Button</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Use the disabled attribute to make a button non-interactive.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>disabled={'{true}'}</p>
          </div>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Theme Support</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>PM7Button automatically adapts to light and dark themes:</p>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={cardStyle}>
            <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Theme Prop</h5>
            <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Set the theme prop to 'light' or 'dark' to control the button's appearance.</p>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>theme="light" or theme="dark"</p>
          </div>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Button Rules Object</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The buttonRules object provides CSS classes for styling:</p>
        <div style={codeBlockStyle}>
          <p style={{ marginBottom: '0.5rem' }}>The buttonRules object contains the following properties:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <li><strong>button:</strong> Base button class (required)</li>
            <li><strong>outline:</strong> Outline variant</li>
            <li><strong>secondary:</strong> Secondary variant</li>
            <li><strong>ghost:</strong> Ghost variant</li>
            <li><strong>link:</strong> Link variant</li>
            <li><strong>small:</strong> Small size</li>
            <li><strong>large:</strong> Large size</li>
            <li><strong>disabled:</strong> Disabled state</li>
          </ul>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Props</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>PM7Button accepts the following props:</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Prop</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Default</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><code>theme</code></td>
                <td style={tdStyle}><code>'light' | 'dark'</code></td>
                <td style={tdStyle}><code>'light'</code></td>
                <td style={tdStyle}>Sets the button's theme</td>
              </tr>
              <tr>
                <td style={tdStyle}><code>className</code></td>
                <td style={tdStyle}><code>string</code></td>
                <td style={tdStyle}><code>''</code></td>
                <td style={tdStyle}>Additional CSS classes</td>
              </tr>
              <tr>
                <td style={tdStyle}><code>disabled</code></td>
                <td style={tdStyle}><code>boolean</code></td>
                <td style={tdStyle}><code>false</code></td>
                <td style={tdStyle}>Disables the button</td>
              </tr>
              <tr>
                <td style={tdStyle}><code>...props</code></td>
                <td style={tdStyle}><code>ButtonHTMLAttributes</code></td>
                <td style={tdStyle}>-</td>
                <td style={tdStyle}>All standard button attributes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExampleButtonUsage;