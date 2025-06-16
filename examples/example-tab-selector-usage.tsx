import React from 'react';

const ExampleTabSelectorUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const subTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '500',
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const textStyle = {
    marginBottom: '1rem',
    color: theme === 'dark' ? '#d1d5db' : '#374151',
    lineHeight: '1.6'
  };

  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem',
    overflowX: 'auto' as const
  };

  const codeStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    color: theme === 'dark' ? '#d1d5db' : '#111827',
    fontSize: '0.875rem'
  };

  const inlineCodeStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem'
  };

  return (
    <div>
      <h3 style={titleStyle}>Basic Usage</h3>
      <p style={textStyle}>Here's how to use the PM7TabSelector component in your React application:</p>
      <div style={codeBlockStyle}>
        <code style={codeStyle}>{`import { useState } from 'react';
import { PM7TabSelector } from 'pm7-ui-style-guide';

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'First Tab' },
    { id: 'tab2', label: 'Second Tab' },
    { id: 'tab3', label: 'Third Tab' }
  ];

  return (
    <div>
      <PM7TabSelector
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        initialTheme="light" // Optional: defaults to 'light'
      />

      {/* Content based on active tab */}
      {activeTab === 'tab1' && <div>Content for first tab</div>}
      {activeTab === 'tab2' && <div>Content for second tab</div>}
      {activeTab === 'tab3' && <div>Content for third tab</div>}
    </div>
  );
};`}</code>
      </div>
      <h4 style={subTitleStyle}>Theme Support</h4>
      <p style={textStyle}>
        The component automatically detects theme changes by listening to the{' '}
        <code style={inlineCodeStyle}>pm7-theme</code> value in localStorage. It will update its appearance when the theme changes between 'light' and 'dark'.
      </p>
    </div>
  );
};

export default ExampleTabSelectorUsage;