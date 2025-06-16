import React from 'react';
import { PM7TabSelector } from '../src/components/tab-selector';

const ExampleTabSelectorExamples = ({ theme }: { theme: 'light' | 'dark' }) => {
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

  const sectionStyle = {
    marginBottom: '1.5rem'
  };

  const containerStyle = {
    border: `1px solid ${theme === 'dark' ? '#525252' : '#d1d5db'}`,
    borderRadius: '0.375rem',
    padding: '1rem'
  };

  const contentStyle = {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    borderRadius: '0.375rem',
    color: theme === 'dark' ? '#d1d5db' : '#374151'
  };

  return (
    <div>
      <h3 style={titleStyle}>Examples</h3>
      
      <div style={sectionStyle}>
        <h4 style={subTitleStyle}>Basic Tabs</h4>
        <div style={containerStyle}>
          <PM7TabSelector
            tabs={[
              { id: 'tab1', label: 'Home' },
              { id: 'tab2', label: 'Profile' },
              { id: 'tab3', label: 'Settings' }
            ]}
            activeTab="tab1"
            onTabChange={(id) => console.log(`Tab ${id} clicked`)}
            initialTheme={theme}
          />
          <div style={contentStyle}>
            <p>Content for the Home tab would appear here</p>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h4 style={subTitleStyle}>With Disabled Tab</h4>
        <div style={containerStyle}>
          <PM7TabSelector
            tabs={[
              { id: 'tab1', label: 'Available' },
              { id: 'tab2', label: 'Disabled', disabled: true },
              { id: 'tab3', label: 'Available' }
            ]}
            activeTab="tab1"
            onTabChange={(id) => console.log(`Tab ${id} clicked`)}
            initialTheme={theme}
          />
          <div style={contentStyle}>
            <p>Notice how the middle tab is disabled and cannot be selected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleTabSelectorExamples;