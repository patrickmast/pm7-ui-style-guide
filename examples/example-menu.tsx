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

const MenuExample = () => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('demo')) as TabType;

  // State for README markdown content
  const [readmeContent, setReadmeContent] = useState<string>('');

  // Use global theme from localStorage (controlled by App component)
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme as ThemeType;
    }
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light theme
  });

  // Listen for theme changes in localStorage (from App component)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'pm7-theme' && e.newValue) {
        setTheme(e.newValue as ThemeType);
      }
    };

    // Also check for direct localStorage changes
    const checkTheme = () => {
      const currentTheme = localStorage.getItem('pm7-theme') as ThemeType;
      if (currentTheme && currentTheme !== theme) {
        setTheme(currentTheme);
      }
    };

    // Set up interval to check theme
    const intervalId = setInterval(checkTheme, 500);

    // Add storage event listener
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, [theme]);

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
        { id: 'demo', label: 'Demo' },
        { id: 'overview', label: 'Overview' },
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
        <ExampleMenuOverview selectedLanguage={'en'} theme={theme} />
    )}
    {activeTab === 'demo' && (
        <ExampleMenuDemo theme={theme} />
    )}
    {activeTab === 'usage' && (
        <ExampleMenuUsage selectedLanguage={'en'} />
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
