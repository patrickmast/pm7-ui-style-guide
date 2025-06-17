import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleButtonOverview from './example-button-overview';
import ExampleButtonUsage from './example-button-usage';
import ExampleButtonExamples from './example-button-demo';
import ExampleButtonDocumentation from './example-button-documentation';

// Type definitions for tabs and theme
type TabType = 'demo' | 'overview' | 'usage' | 'documentation';
type ThemeType = 'light' | 'dark';

const ButtonExample = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('overview')) as TabType;

  // Function to handle tab changes
  const handleTabChange = (tabId: string) => {
    saveActiveTab(tabId);
    navigate(`/button/${tabId}`);
  };

  return (
    <>
      <PM7TabSelector
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'demo', label: 'Demo' },
          { id: 'usage', label: 'Usage' },
          { id: 'documentation', label: 'Documentation' }
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
      {activeTab === 'documentation' && (
        <div style={{ padding: '1rem' }}>
          <ExampleButtonDocumentation theme={theme} />
        </div>
      )}

    </>
  );
};

export default ButtonExample;