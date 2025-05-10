import React from 'react';
import ReactMarkdown from 'react-markdown';

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
| \`initialTheme\` | \`'light' | 'dark'\` | No | \`'light'\` | Initial theme to use |

## Theme Support

The component automatically detects theme changes by listening to the \`pm7-theme\` value in localStorage. It will update its appearance when the theme changes between 'light' and 'dark'.
`;

const ExampleTabSelectorAPI = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className="markdown-container dark:text-white">
    <ReactMarkdown>{tabSelectorReadme}</ReactMarkdown>
  </div>
);

export default ExampleTabSelectorAPI;