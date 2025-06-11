import React, { useState, useEffect } from 'react';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleThemeToggleOverview from './example-theme-toggle-overview';
import ExampleThemeToggleUsage from './example-theme-toggle-usage';
import ExampleThemeToggleAPI from './example-theme-toggle-api';
import ExampleThemeToggleExamples from './example-theme-toggle-examples';
import ExampleThemeToggleTLDR from './example-theme-toggle-tldr';

// Type definitions for tabs and theme
type TabType = 'Overview' | 'Usage' | 'API' | 'Examples' | 'TL;DR';
type ThemeType = 'light' | 'dark';

const ExampleThemeToggle = ({ theme }: { theme: ThemeType }) => {
  // Tab state - check URL for direct navigation to TL;DR
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    if (window.location.pathname.includes('/docs/PM7ThemeToggle')) {
      return 'TL;DR';
    }
    return 'Overview';
  });

  // Function to handle tab changes
  const handleTabChange = (tabId: string) => {
    if (tabId === 'Overview' || tabId === 'Usage' || tabId === 'API' || tabId === 'Examples' || tabId === 'TL;DR') {
      setActiveTab(tabId as TabType);
    }
  };

  return (
    <>
      <PM7TabSelector
        tabs={[
          { id: 'Overview', label: 'Overview' },
          { id: 'Usage', label: 'Usage' },
          { id: 'API', label: 'API' },
          { id: 'Examples', label: 'Examples' },
          { id: 'TL;DR', label: 'TL;DR' }
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        initialTheme={theme}
        className="mb-4"
      />

      {activeTab === 'Overview' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleOverview theme={theme} />
        </div>
      )}
      {activeTab === 'Usage' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleUsage theme={theme} />
        </div>
      )}
      {activeTab === 'API' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleAPI theme={theme} />
        </div>
      )}
      {activeTab === 'Examples' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleExamples theme={theme} />
        </div>
      )}
      {activeTab === 'TL;DR' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleTLDR theme={theme} />
        </div>
      )}
    </>
  );
};

export default ExampleThemeToggle;