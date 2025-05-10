import React, { useState } from 'react';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleButtonOverview from './example-button-overview';
import ExampleButtonUsage from './example-button-usage';
import ExampleButtonAPI from './example-button-api';
import ExampleButtonExamples from './example-button-examples';

// Type definitions for tabs and theme
type TabType = 'Overview' | 'Usage' | 'API' | 'Examples';
type ThemeType = 'light' | 'dark';

const ButtonExample = ({ theme }: { theme: ThemeType }) => {
  // Tab state
  const [activeTab, setActiveTab] = useState<TabType>('Overview');

  // Function to handle tab changes
  const handleTabChange = (tabId: string) => {
    if (tabId === 'Overview' || tabId === 'Usage' || tabId === 'API' || tabId === 'Examples') {
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
          { id: 'Examples', label: 'Examples' }
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        initialTheme={theme}
        className="mb-4"
      />

      {activeTab === 'Overview' && <ExampleButtonOverview theme={theme} />}
      {activeTab === 'Usage' && <ExampleButtonUsage theme={theme} />}
      {activeTab === 'API' && <ExampleButtonAPI theme={theme} />}
      {activeTab === 'Examples' && <ExampleButtonExamples theme={theme} />}

    </>
  );
};

export default ButtonExample;
