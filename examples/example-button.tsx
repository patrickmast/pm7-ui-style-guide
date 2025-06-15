import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleButtonOverview from './example-button-overview';
import ExampleButtonUsage from './example-button-usage';
import ExampleButtonAPI from './example-button-api';
import ExampleButtonExamples from './example-button-examples';
import ExampleButtonTLDR from './example-button-tldr';

// Type definitions for tabs and theme
type TabType = 'demo' | 'overview' | 'usage' | 'tldr';
type ThemeType = 'light' | 'dark';

const ButtonExample = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('demo')) as TabType;

  // Function to handle tab changes
  const handleTabChange = (tabId: string) => {
    saveActiveTab(tabId);
    navigate(`/button/${tabId}`);
  };

  return (
    <>
      <PM7TabSelector
        tabs={[
          { id: 'demo', label: 'Demo' },
          { id: 'overview', label: 'Overview' },
          { id: 'usage', label: 'Usage' },
          { id: 'tldr', label: 'TL;DR' }
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        initialTheme={theme}
        className="mb-4"
      />

      {activeTab === 'demo' && (
        <div style={{ padding: '1rem' }}>
          <ExampleButtonExamples theme={theme} />
        </div>
      )}
      {activeTab === 'overview' && (
        <div style={{ padding: '1rem' }}>
          <ExampleButtonOverview theme={theme} />
        </div>
      )}
      {activeTab === 'usage' && (
        <div style={{ padding: '1rem' }}>
          <ExampleButtonUsage theme={theme} />
        </div>
      )}
      {activeTab === 'tldr' && (
        <div style={{ padding: '1rem' }}>
          <ExampleButtonTLDR theme={theme} />
        </div>
      )}

    </>
  );
};

export default ButtonExample;