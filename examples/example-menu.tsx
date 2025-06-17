// Refactor: Split tab content into separate files for each tab (Demo, Overview, Usage, Documentation). Updated MenuExample to import and render these new files. No other logic or content was changed.
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import { PM7TabSelector } from '../src/components/tab-selector';
import ExampleMenuDemo from './example-menu-demo';
import ExampleMenuOverview from './example-menu-overview';
import ExampleMenuUsage from './example-menu-usage';
import ExampleMenuDocumentation from './example-menu-documentation';

const tabSelectorReadme = `# PM7TabSelector Component

A reusable tab selector component for the PM7 UI Style Guide.`;

type TabType = 'overview' | 'demo' | 'usage' | 'documentation';
type ThemeType = 'light' | 'dark';
type LanguageType = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'nl-be' | 'zh';

const MenuExample = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('overview')) as TabType;

  // State for README markdown content
  const [readmeContent, setReadmeContent] = useState<string>('');

  // Load README content when Documentation tab is selected
  useEffect(() => {
    if (activeTab === 'documentation') {
      // Use the imported README
      setReadmeContent(tabSelectorReadme);
    }
  }, [activeTab]);

// Return the component UI
return (
  <>
    {/* Tab row using PM7TabSelector */}
    <PM7TabSelector
      tabs={[
        { id: 'overview', label: 'Overview' },
        { id: 'demo', label: 'Demo' },
        { id: 'usage', label: 'Usage' },
        { id: 'documentation', label: 'Documentation' }
      ]}
      activeTab={activeTab}
      onTabChange={(tabId) => {
        saveActiveTab(tabId);
        navigate(`/menu/${tabId}`);
      }}
      initialTheme={theme}
      className="mb-4"
    />

    {/* Tab content */}
    {activeTab === 'overview' && (
      <div style={{ padding: '1rem' }}>
        <ExampleMenuOverview selectedLanguage={'en'} theme={theme} />
      </div>
    )}
    {activeTab === 'demo' && (
      <div style={{ padding: '1rem' }}>
        <ExampleMenuDemo theme={theme} />
      </div>
    )}
    {activeTab === 'usage' && (
      <div style={{ padding: '1rem' }}>
        <ExampleMenuUsage theme={theme} />
      </div>
    )}
    {activeTab === 'documentation' && (
      <div style={{ padding: '1rem' }}>
        <ExampleMenuDocumentation theme={theme} />
      </div>
    )}
  </>
);
};

export default MenuExample;
