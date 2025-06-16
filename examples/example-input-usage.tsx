import React from 'react';

const ExampleInputUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const containerStyle = {
    marginBottom: '1.5rem',
    padding: '1.5rem',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#ffffff',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    border: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}`
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const subTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const smallSubTitleStyle = {
    fontSize: '1rem',
    fontWeight: '500',
    marginTop: '1rem',
    marginBottom: '0.5rem',
    color: theme === 'dark' ? '#e5e7eb' : '#1f2937'
  };

  const textStyle = {
    marginBottom: '0.75rem',
    color: theme === 'dark' ? '#d1d5db' : '#374151'
  };

  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    padding: '1rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem',
    overflowX: 'auto' as const
  };

  const codeStyle = {
    fontSize: '0.875rem',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    color: theme === 'dark' ? '#d1d5db' : '#1f2937'
  };

  const inlineCodeStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem',
    paddingTop: '0.125rem',
    paddingBottom: '0.125rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
  };

  const tableStyle = {
    width: '100%',
    fontSize: '0.875rem',
    textAlign: 'left' as const,
    color: theme === 'dark' ? '#d1d5db' : '#374151',
    marginBottom: '1rem'
  };

  const thStyle = {
    padding: '0.5rem 1rem',
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    color: theme === 'dark' ? '#9ca3af' : '#6b7280'
  };

  const tdStyle = {
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}`
  };

  const tdBoldStyle = {
    ...tdStyle,
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>PM7Input Components</h3>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={subTitleStyle}>Basic Input</h4>
        <p style={textStyle}>The core input component with theme support:</p>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>{`import { inputRules } from 'pm7-ui-style-guide';

// Basic usage
<PM7Input
  theme="light"
  placeholder="Enter text..."
/>`}</code>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={subTitleStyle}>Input Properties</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Property</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Default</th>
                <th style={thStyle}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdBoldStyle}>theme</td>
                <td style={tdStyle}>'light' | 'dark'</td>
                <td style={tdStyle}>Required</td>
                <td style={tdStyle}>Controls the input's appearance based on theme</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>placeholder</td>
                <td style={tdStyle}>string</td>
                <td style={tdStyle}>''</td>
                <td style={tdStyle}>Placeholder text displayed when input is empty</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>disabled</td>
                <td style={tdStyle}>boolean</td>
                <td style={tdStyle}>false</td>
                <td style={tdStyle}>When true, disables the input and applies disabled styling</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>readOnly</td>
                <td style={tdStyle}>boolean</td>
                <td style={tdStyle}>false</td>
                <td style={tdStyle}>When true, makes the input read-only</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>type</td>
                <td style={tdStyle}>string</td>
                <td style={tdStyle}>'text'</td>
                <td style={tdStyle}>Input type (text, password, email, number, etc.)</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>className</td>
                <td style={tdStyle}>string</td>
                <td style={tdStyle}>''</td>
                <td style={tdStyle}>Additional CSS classes to apply</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>value</td>
                <td style={tdStyle}>string</td>
                <td style={tdStyle}>undefined</td>
                <td style={tdStyle}>Controlled input value</td>
              </tr>
              <tr>
                <td style={tdBoldStyle}>onChange</td>
                <td style={tdStyle}>function</td>
                <td style={tdStyle}>undefined</td>
                <td style={tdStyle}>Handler function for input changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={subTitleStyle}>Input Configuration</h4>
        <p style={textStyle}>
          The PM7Input can be configured using the <code style={inlineCodeStyle}>inputRules</code> object:
        </p>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>{`// Available configuration options
const inputRules = {
  focusBorderColor: 'primary', // Color for border on focus (use 'primary' or a specific color)
  alwaysShowBorder: true,      // Whether to always show border or only on focus
};`}</code>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={subTitleStyle}>Input Variants</h4>
        
        <h5 style={smallSubTitleStyle}>Disabled Input</h5>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>{`<PM7Input
  theme="light"
  disabled={true}
  placeholder="Disabled input"
/>`}</code>
        </div>

        <h5 style={smallSubTitleStyle}>Read-only Input</h5>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>{`<PM7Input
  theme="light"
  readOnly={true}
  value="Read-only content"
/>`}</code>
        </div>

        <h5 style={smallSubTitleStyle}>Input with Custom Type</h5>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>{`<PM7Input
  theme="light"
  type="password"
  placeholder="Enter password"
/>`}</code>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={subTitleStyle}>Controlled Input Example</h4>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>{`import { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <PM7Input
      theme="light"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};`}</code>
        </div>
      </div>
    </div>
  );
};

export default ExampleInputUsage;