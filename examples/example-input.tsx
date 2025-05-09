// Enhancement: Rebuilt InputExample with consistent styling/layout matching other component examples
// Enhancement: Added tab-based navigation with PM7TabSelector for better user experience
// Enhancement: Improved theme handling and content organization

import React, { useState, useEffect } from 'react';
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

// Create a styled input component
const PM7Input = ({ 
  theme, 
  ...props 
}) => {
  const baseStyles = \`
    block w-full px-3 py-2 rounded-md 
    \${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
    \${inputRules.alwaysShowBorder ? 
      theme === 'dark' ? 'border border-gray-600' : 'border border-gray-300' 
      : ''}
    focus:outline-none 
    focus:ring-2 
    focus:ring-\${inputRules.focusBorderColor === 'primary' ? 'blue-500' : inputRules.focusBorderColor}
    focus:border-\${inputRules.focusBorderColor === 'primary' ? 'blue-500' : inputRules.focusBorderColor}
    transition-colors
  \`;

  return (
    <input
      className={baseStyles}
      {...props}
    />
  );
};
\`\`\`

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

type TabType = 'Overview' | 'Usage' | 'API' | 'Examples';
type ThemeType = 'light' | 'dark';

// Input component with PM7 styling
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

// Input example component
const InputExample = () => {
  // Tab state for tab row
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  
  // State for dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeInputInfo, setActiveInputInfo] = useState({
    title: '',
    description: '',
    type: '',
    state: ''
  });

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

    // Clean up
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  // Function to handle tab changes with type safety
  const handleTabChange = (tabId: string) => {
    if (tabId === 'Overview' || tabId === 'Usage' || tabId === 'API' || tabId === 'Examples') {
      setActiveTab(tabId as TabType);
    }
  };

  // Function to open dialog with input information
  const showInputInfo = (title: string, description: string, type: string = 'text', state: string = '') => {
    setActiveInputInfo({
      title,
      description,
      type,
      state
    });
    setDialogOpen(true);
  };

  return (
    <div className={`input-example ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Tab Selector */}
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

      {/* Overview Tab Content */}
      {activeTab === 'Overview' && (
        <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">PM7Input</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            The PM7Input component provides a flexible, theme-aware input field with support for various states and styling options.
          </p>
          <h4 className="text-lg font-medium mt-4 mb-2 text-gray-900 dark:text-white">Key Features</h4>
          <ul className="list-disc ml-5 mt-1 mb-4 text-gray-700 dark:text-gray-300">
            <li>Light and dark theme support</li>
            <li>Support for disabled and read-only states</li>
            <li>Configurable focus border color</li>
            <li>Customizable via className and styling rules</li>
            <li>Compatible with all standard HTML input types</li>
          </ul>
        </div>
      )}

      {/* Usage Tab Content */}
      {activeTab === 'Usage' && (
        <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Basic Usage</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Here's how to use the PM7Input component in your React application:</p>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
            <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`import { inputRules } from 'pm7-ui-style-guide';

// Create a styled input component
const PM7Input = ({ 
  theme, 
  ...props 
}) => {
  const baseStyles = \`
    block w-full px-3 py-2 rounded-md 
    \${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
    \${inputRules.alwaysShowBorder ? 
      theme === 'dark' ? 'border border-gray-600' : 'border border-gray-300' 
      : ''}
    focus:outline-none 
    focus:ring-2 
    focus:ring-\${inputRules.focusBorderColor === 'primary' ? 'blue-500' : inputRules.focusBorderColor}
    focus:border-\${inputRules.focusBorderColor === 'primary' ? 'blue-500' : inputRules.focusBorderColor}
    transition-colors
  \`;

  return (
    <input
      className={baseStyles}
      {...props}
    />
  );
};

// Then use it in your component
<PM7Input 
  theme="light" 
  placeholder="Enter your name"
  onChange={(e) => console.log(e.target.value)}
/>`}</code>
          </pre>
        </div>
      )}

      {/* API Tab Content */}
      {activeTab === 'API' && (
        <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="markdown-container dark:text-white">
            <ReactMarkdown>{inputReadme}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* Examples Tab Content */}
      {activeTab === 'Examples' && (
        <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Input Examples</h3>
          
          {/* Basic Input */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Basic Input</h4>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Default Input
                </label>
                <PM7Input
                  theme={theme}
                  placeholder="Enter text here"
                />
              </div>
              <button 
                onClick={() => showInputInfo(
                  'Basic Input', 
                  'A standard input field with default styling.'
                )}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Input States */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Input States</h4>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Disabled Input
                  </label>
                  <PM7Input
                    theme={theme}
                    placeholder="Disabled input"
                    disabled={true}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Read-only Input
                  </label>
                  <PM7Input
                    theme={theme}
                    value="Read-only content"
                    readOnly={true}
                  />
                </div>
              </div>
              <button 
                onClick={() => showInputInfo(
                  'Input States', 
                  'Inputs can be set to disabled or read-only states.'
                )}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Input Types */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Input Types</h4>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password Input
                  </label>
                  <PM7Input
                    theme={theme}
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Number Input
                  </label>
                  <PM7Input
                    theme={theme}
                    type="number"
                    placeholder="Enter a number"
                  />
                </div>
              </div>
              <button 
                onClick={() => showInputInfo(
                  'Input Types', 
                  'PM7Input supports all standard HTML input types including text, password, email, number, etc.'
                )}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Input with Icons */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Input with Icons</h4>
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Search Input
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                  <PM7Input
                    theme={theme}
                    type="search"
                    className="pl-10"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <button 
                onClick={() => showInputInfo(
                  'Input with Icons', 
                  'Inputs can be enhanced with icons by wrapping them in a relative container and positioning icons absolutely.'
                )}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dialog for input information */}
      <PM7Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
          <PM7DialogHeader>
            <PM7DialogTitle>{activeInputInfo.title}</PM7DialogTitle>
          </PM7DialogHeader>
          <PM7DialogDescription>
            {activeInputInfo.description}
            {activeInputInfo.type && (
              <div className="mt-2">
                <p><strong>Type:</strong> {activeInputInfo.type}</p>
              </div>
            )}
            {activeInputInfo.state && (
              <div className="mt-2">
                <p><strong>State:</strong> {activeInputInfo.state}</p>
              </div>
            )}
          </PM7DialogDescription>
          <PM7DialogFooter>
            <Button theme={theme} onClick={() => setDialogOpen(false)}>Close</Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </div>
  );
};

export default InputExample;
