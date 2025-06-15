import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleThemeToggleOverview from './example-theme-toggle-overview';
import ExampleThemeToggleUsage from './example-theme-toggle-usage';
import ExampleThemeToggleAPI from './example-theme-toggle-api';
import ExampleThemeToggleExamples from './example-theme-toggle-examples';
import ExampleThemeToggleTLDR from './example-theme-toggle-tldr';

// Type definitions for tabs and theme
type TabType = 'demo' | 'overview' | 'usage' | 'tldr';
type ThemeType = 'light' | 'dark';

const ExampleThemeToggle = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('demo')) as TabType;

  // Function to handle tab changes
  const handleTabChange = (tabId: string) => {
    saveActiveTab(tabId);
    navigate(`/themetoggle/${tabId}`);
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
          <ExampleThemeToggleExamples theme={theme} />
        </div>
      )}
      {activeTab === 'overview' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleOverview theme={theme} />
        </div>
      )}
      {activeTab === 'usage' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleUsage theme={theme} />
        </div>
      )}
      {activeTab === 'tldr' && (
        <div style={{ padding: '1rem' }}>
          <ExampleThemeToggleTLDR theme={theme} />
        </div>
      )}
    </>
  );
};

export default ExampleThemeToggle;