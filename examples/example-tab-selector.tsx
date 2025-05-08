// Enhancement: Created a new example file to showcase the PM7TabSelector component
// This example demonstrates how to use the PM7TabSelector component in isolation

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Import the tab selector component using relative imports for local development
import { PM7TabSelector } from '../src/components/tab-selector';

type TabType = 'Overview' | 'Usage' | 'API' | 'Examples';
type ThemeType = 'light' | 'dark';

// Static README content to avoid import issues
const tabSelectorReadme = `# PM7TabSelector Component

A reusable tab selector component that provides a clean, accessible interface for switching between different content sections. The component supports both light and dark themes and integrates with the PM7 design system.

## Features

- Light and dark theme support with automatic theme detection
- Accessible tab navigation
- Customizable styling
- Simple API for tab management

## Installation

\`\`\`bash
npm install pm7-ui-style-guide
\`\`\`

## Usage

\`\`\`jsx
import { PM7TabSelector } from 'pm7-ui-style-guide';
import { useState } from 'react';

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
};
\`\`\`

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`tabs\` | \`PM7TabItem[]\` | Yes | - | Array of tab items to display |
| \`activeTab\` | \`string\` | Yes | - | ID of the currently active tab |
| \`onTabChange\` | \`(tabId: string) => void\` | Yes | - | Function called when a tab is clicked |
| \`className\` | \`string\` | No | \`''\` | Additional CSS class names to apply to the container |
| \`initialTheme\` | \`'light' \| 'dark'\` | No | \`'light'\` | Initial theme to use |

## Theme Support

The component automatically detects theme changes by listening to the \`pm7-theme\` value in localStorage. It will update its appearance when the theme changes between 'light' and 'dark'.
`;

const TabSelectorExample = () => {
  // Tab state for tab row
  const [activeTab, setActiveTab] = useState<TabType>('Overview');

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

  // Effect to listen for theme changes in localStorage
  useEffect(() => {
    // Function to handle storage events
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'pm7-theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue as ThemeType);
      }
    };

    // Function to check theme in localStorage
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme as ThemeType);
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

  // Load README content when API tab is selected
  useEffect(() => {
    if (activeTab === 'API') {
      // Use the static README content
      setReadmeContent(tabSelectorReadme);
    }
  }, [activeTab]);

  // Function to handle tab changes with type safety
  const handleTabChange = (tabId: string) => {
    if (tabId === 'Overview' || tabId === 'Usage' || tabId === 'API' || tabId === 'Examples') {
      setActiveTab(tabId as TabType);
    }
  };

  return (
    <>
      {/* Tab selector using the PM7TabSelector component */}
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

      {/* Card is always visible, only content changes */}
      <div className={`component-example ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="p-6">
          {/* Overview tab content */}
          {activeTab === 'Overview' && (
            <div>
              <h3 className="text-xl font-semibold mb-3">PM7TabSelector</h3>
              <p className="mb-4">The PM7TabSelector component provides a clean, accessible interface for switching between different content sections.</p>

              <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
              <ul className="list-disc ml-5 mt-1 mb-4">
                <li>Light and dark theme support with automatic detection</li>
                <li>Accessible tab navigation with proper ARIA attributes</li>
                <li>Customizable styling</li>
                <li>Simple API for tab management</li>
              </ul>

              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h4 className="text-lg font-medium mb-2">Live Example</h4>
                <p className="mb-2">This entire example is using the PM7TabSelector component for navigation.</p>
                <p>Try clicking on different tabs to see how it works!</p>
              </div>
            </div>
          )}

          {/* Usage tab content */}
          {activeTab === 'Usage' && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
              <p className="mb-4">Here's how to use the PM7TabSelector component in your React application:</p>

              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 overflow-x-auto">
                <code className="font-mono">{`import { useState } from 'react';
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
};
`}</code>
              </pre>

              <h4 className="text-lg font-medium mt-5 mb-2">Theme Support</h4>
              <p className="mb-4">The component automatically detects theme changes by listening to the <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">pm7-theme</code> value in localStorage. It will update its appearance when the theme changes between 'light' and 'dark'.</p>
            </div>
          )}

          {/* API tab content */}
          {activeTab === 'API' && (
            <div className="markdown-container dark:text-white">
              <ReactMarkdown
                components={{
                  code: ({node, inline, className, children, ...props}: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-3 overflow-x-auto">
                        <code className={`font-mono ${className}`} {...props}>
                          {String(children).replace(/\n$/, '')}
                        </code>
                      </pre>
                    ) : (
                      <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded" {...props}>
                        {children}
                      </code>
                    );
                  },
                  // Add custom styling for other elements
                  h1: ({children}: any) => <h1 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">{children}</h1>,
                  h2: ({children}: any) => <h2 className="text-xl font-semibold mt-6 mb-3 pb-1 border-b border-gray-200 dark:border-gray-700">{children}</h2>,
                  h3: ({children}: any) => <h3 className="text-lg font-medium mt-5 mb-2">{children}</h3>,
                  p: ({children}: any) => <p className="mb-4">{children}</p>,
                  ul: ({children}: any) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
                  ol: ({children}: any) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
                  li: ({children}: any) => <li className="mb-1">{children}</li>,
                  table: ({children}: any) => <div className="overflow-x-auto mb-6"><table className="w-full border-collapse">{children}</table></div>,
                  thead: ({children}: any) => <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>,
                  th: ({children}: any) => <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">{children}</th>,
                  td: ({children}: any) => <td className="border border-gray-300 dark:border-gray-600 p-2">{children}</td>,
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          )}

          {/* Examples tab content */}
          {activeTab === 'Examples' && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Examples</h3>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Basic Tabs</h4>
                <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
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
                  <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>Content for the Home tab would appear here</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">With Disabled Tab</h4>
                <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
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
                  <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>Notice how the middle tab is disabled and cannot be selected</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabSelectorExample;
