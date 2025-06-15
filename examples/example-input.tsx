// Bug Fix: Fixed syntax error in inputReadme markdown string by removing the duplicate PM7Input function definition and properly closing the template literal. File now compiles correctly.

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import ReactMarkdown from 'react-markdown';
import { inputRules } from '../src/components/input/pm7-input';
import { PM7TabSelector } from '../src/components/tab-selector';
import { PM7Button as Button } from '../src/components/button/pm7-button';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '../src/components/dialog/pm7-dialog';
import ExampleInputOverview from './example-input-overview';
import ExampleInputUsage from './example-input-usage';
import ExampleInputAPI from './example-input-api';
import ExampleInputExamples from './example-input-examples';
import ExampleInputTLDR from './example-input-tldr';

// Static README content for API tab
const inputReadme = `# PM7Input Component

A customizable input component that follows the PM7 design system. The component supports both light and dark themes and provides various input states.

## Features

- Light and dark theme support
- Various input states (normal, disabled, read-only)
- Customizable styling
- Focus state with configurable border color

## Installation

\`\`\`bash
npm install pm7-ui-style-guide
\`\`\`

## Usage

\`\`\`jsx
import { inputRules } from 'pm7-ui-style-guide';

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`theme\` | \`'light' \| 'dark'\` | Yes | - | Current theme |
| \`placeholder\` | \`string\` | No | \`''\` | Placeholder text |
| \`disabled\` | \`boolean\` | No | \`false\` | Whether the input is disabled |
| \`readOnly\` | \`boolean\` | No | \`false\` | Whether the input is read-only |
| \`type\` | \`string\` | No | \`'text'\` | Input type (text, email, password, etc.) |
| \`className\` | \`string\` | No | \`''\` | Additional CSS classes |
| \`value\` | \`string\` | No | - | Input value |
| \`onChange\` | \`function\` | No | - | Change handler |

## Configuration

The \`inputRules\` object contains the following configuration options:

\`\`\`js
${JSON.stringify(inputRules, null, 2)}
\`\`\`

## Theme Support

The component automatically adapts to light and dark themes based on the provided theme prop.
`;

// Usage Tab Content
const usageContent = (
  <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">PM7Input Components</h3>

    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Basic Input</h4>
      <p className="mb-3 text-gray-700 dark:text-gray-300">The core input component with theme support:</p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`import { inputRules } from 'pm7-ui-style-guide';

// Basic usage
<PM7Input
  theme="light"
  placeholder="Enter text..."
/>`}</code>
      </pre>
    </div>
  </div>
);

type TabType = 'demo' | 'overview' | 'usage' | 'tldr';
type ThemeType = 'light' | 'dark';

// Custom styled input component for examples
const PM7Input = ({
  theme,
  placeholder = '',
  disabled = false,
  readOnly = false,
  type = 'text',
  className = '',
  value,
  onChange,
  ...props
}: {
  theme: 'light' | 'dark';
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}) => {
  const baseStyles = `
    block w-full px-3 py-2 rounded-md
    ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${readOnly ? 'cursor-default' : ''}
    ${inputRules.alwaysShowBorder ?
      theme === 'dark' ? 'border border-gray-600' : 'border border-gray-300'
      : ''}
    focus:outline-none
    focus:ring-2
    focus:ring-${inputRules.focusBorderColor === 'primary' ? 'blue-500' : inputRules.focusBorderColor}
    focus:border-${inputRules.focusBorderColor === 'primary' ? 'blue-500' : inputRules.focusBorderColor}
    transition-colors
    ${className}
  `;

  return (
    <input
      type={type}
      className={baseStyles}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

// Sun icon component for theme switch (fixed black color)
const SunIconSwitch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="theme-icon"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon component for theme switch (fixed white color in dark mode)
const MoonIconSwitch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="theme-icon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Separator component for visual separation between sections
const Separator = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div style={{
    height: '1px',
    backgroundColor: theme === 'dark' ? '#525252' : '#e2e8f0',
    margin: '24px 0',
    width: '100%'
  }}></div>
);

const InputExample = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('demo')) as TabType;

  const handleTabChange = (tabId: string) => {
    saveActiveTab(tabId);
    navigate(`/input/${tabId}`);
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
          <ExampleInputExamples theme={theme} />
        </div>
      )}
      {activeTab === 'overview' && (
        <div style={{ padding: '1rem' }}>
          <ExampleInputOverview theme={theme} />
        </div>
      )}
      {activeTab === 'usage' && (
        <div style={{ padding: '1rem' }}>
          <ExampleInputUsage theme={theme} />
        </div>
      )}
      {activeTab === 'tldr' && (
        <div style={{ padding: '1rem' }}>
          <ExampleInputTLDR theme={theme} />
        </div>
      )}
    </>
  );
};

export default InputExample;
