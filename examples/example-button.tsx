// Enhancement: Rebuilt Button example to match the styling/layout of the tab selector and card examples
// Enhancement: Added consistent tabs for Overview, Usage, API, and Examples
// Enhancement: Improved documentation and examples display

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { PM7Button as Button, buttonRules } from '../src/components/button/pm7-button';
import { PM7TabSelector } from '../src/components/tab-selector';
import { PM7Card } from '../src/components/card';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '../src/components/dialog/pm7-dialog';

// Static README content for API tab
const buttonReadme = `# PM7Button Component

A customizable button component that enhances the ShadCN/UI Button with PM7 styling rules. Supports various styles, sizes, and states with automatic theme detection.

## Features

- Light and dark theme support with automatic theme detection
- Multiple button variants: default, outline, secondary, ghost, and link
- Size variations: small, default, and large
- Accessible button implementation
- Simple API with CSS class-based styling

## Installation

\`\`\`bash
npm install pm7-ui-style-guide
\`\`\`

## Usage

\`\`\`jsx
import { PM7Button as Button, buttonRules } from 'pm7-ui-style-guide';

// Default button
<Button className={buttonRules.button}>
  Default Button
</Button>

// Outline variant
<Button className={buttonRules.button + ' ' + buttonRules.outline}>
  Outline Button
</Button>

// Secondary variant
<Button className={buttonRules.button + ' ' + buttonRules.secondary}>
  Secondary Button
</Button>
\`\`\`

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`theme\` | \`'light' \| 'dark'\` | No | \`'light'\` | Current theme |
| \`className\` | \`string\` | No | \`''\` | Additional CSS class names |
| \`disabled\` | \`boolean\` | No | \`false\` | Whether the button is disabled |
| \`...props\` | \`ButtonHTMLAttributes\` | No | - | All standard button attributes |

## Button Rules

The \`buttonRules\` object provides CSS classes for different button styles:

\`\`\`js
{
  button: 'pm7-button',
  outline: 'pm7-button-outline',
  secondary: 'pm7-button-secondary',
  ghost: 'pm7-button-ghost',
  link: 'pm7-button-link',
  small: 'pm7-button-small',
  large: 'pm7-button-large'
}
\`\`\`

## Theme Support

The component automatically adapts to light and dark themes based on the \`theme\` prop.
`;

// Type definitions for tabs and theme
type TabType = 'Overview' | 'Usage' | 'API' | 'Examples';
type ThemeType = 'light' | 'dark';

// Separator component for visual separation between sections
const Separator = ({ theme }: { theme: ThemeType }) => (
  <div style={{
    height: '1px',
    backgroundColor: theme === 'dark' ? '#525252' : '#e2e8f0',
    margin: '24px 0',
    width: '100%'
  }}></div>
);

const ButtonExample = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  
  // Theme state
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

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeButtonInfo, setActiveButtonInfo] = useState({
    title: '',
    description: '',
    className: '',
    disabled: false
  });

  // Effect to listen for theme changes in localStorage
  useEffect(() => {
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
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  // Function to handle tab changes
  const handleTabChange = (tabId: string) => {
    if (tabId === 'Overview' || tabId === 'Usage' || tabId === 'API' || tabId === 'Examples') {
      setActiveTab(tabId as TabType);
    }
  };

  // Function to open dialog with button information
  const showButtonInfo = (title: string, className: string = '', disabled: boolean = false) => {
    let description = '';

    if (className.includes('outline')) {
      description = 'This is an outline style button with a border and transparent background.';
    } else if (className.includes('secondary')) {
      description = 'This is a secondary style button with custom styling.';
    } else if (className.includes('ghost')) {
      description = 'This is a ghost style button that becomes visible on hover.';
    } else if (className.includes('link')) {
      description = 'This is a link style button with an underline.';
    } else if (className.includes('small')) {
      description = 'This is a small size button with reduced padding and font size.';
    } else if (className.includes('large')) {
      description = 'This is a large size button with increased padding and font size.';
    } else if (disabled) {
      description = 'This is a disabled button that cannot be clicked.';
    } else {
      description = 'This is a standard button with default styling.';
    }

    setActiveButtonInfo({
      title,
      description,
      className,
      disabled
    });

    setDialogOpen(true);
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

      {/* Overview Tab Content */}
      {activeTab === 'Overview' && (
        <PM7Card className="mb-6">
          <h3 className="text-xl font-semibold mb-3">PM7Button</h3>
          <p className="mb-4">The PM7Button component enhances the ShadCN/UI Button with PM7 styling rules, providing a consistent look and feel across the application.</p>
          <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
          <ul className="list-disc ml-5 mt-1 mb-4">
            <li>Light and dark theme support</li>
            <li>Multiple button variants (default, outline, secondary, ghost, link)</li>
            <li>Size variations (small, default, large)</li>
            <li>Accessible button implementation</li>
            <li>Simple API with CSS class-based styling</li>
          </ul>
        </PM7Card>
      )}

      {/* Usage Tab Content */}
      {activeTab === 'Usage' && (
        <PM7Card>
          <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
          <p className="mb-4">Here's how to use the PM7Button component in your React application:</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 overflow-x-auto">
            <code className="font-mono">{`import { PM7Button as Button, buttonRules } from 'pm7-ui-style-guide';

// Default button
<Button className={buttonRules.button}>
  Default Button
</Button>

// Outline variant
<Button className={buttonRules.button + ' ' + buttonRules.outline}>
  Outline Button
</Button>

// Secondary variant
<Button className={buttonRules.button + ' ' + buttonRules.secondary}>
  Secondary Button
</Button>

// Ghost variant
<Button className={buttonRules.button + ' ' + buttonRules.ghost}>
  Ghost Button
</Button>

// Link variant
<Button className={buttonRules.button + ' ' + buttonRules.link}>
  Link Button
</Button>

// Size variations
<Button className={buttonRules.button + ' ' + buttonRules.small}>
  Small Button
</Button>

<Button className={buttonRules.button + ' ' + buttonRules.large}>
  Large Button
</Button>

// Disabled state
<Button className={buttonRules.button} disabled>
  Disabled Button
</Button>`}</code>
          </pre>
        </PM7Card>
      )}

      {/* API Tab Content */}
      {activeTab === 'API' && (
        <PM7Card>
          <div className="markdown-container dark:text-white">
            <ReactMarkdown>{buttonReadme}</ReactMarkdown>
          </div>
        </PM7Card>
      )}

      {/* Examples Tab Content */}
      {activeTab === 'Examples' && (
        <PM7Card>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default Style')}>
                Default Style
              </Button>
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} onClick={() => showButtonInfo('Outline Style', 'outline')}>
                Outline Style
              </Button>
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.secondary} onClick={() => showButtonInfo('Secondary Style', 'secondary')}>
                Secondary Style
              </Button>
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.ghost} onClick={() => showButtonInfo('Ghost Style', 'ghost')}>
                Ghost Style
              </Button>
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.link} onClick={() => showButtonInfo('Link Style', 'link')}>
                Link Style
              </Button>
            </div>

            <Separator theme={theme} />

            <h3 className="text-xl font-semibold mb-4 mt-6">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.small} onClick={() => showButtonInfo('Small Button', 'small')}>
                Small Button
              </Button>
              <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default Size')}>
                Default Size
              </Button>
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.large} onClick={() => showButtonInfo('Large Button', 'large')}>
                Large Button
              </Button>
            </div>

            <Separator theme={theme} />

            <h3 className="text-xl font-semibold mb-4 mt-6">Button States</h3>
            <div className="flex flex-wrap gap-4">
              <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default')}>
                Default
              </Button>
              <Button theme={theme} className={buttonRules.button} disabled onClick={() => showButtonInfo('Disabled', '', true)}>
                Disabled
              </Button>
              <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} disabled onClick={() => showButtonInfo('Disabled Outline', 'outline', true)}>
                Disabled Outline
              </Button>
            </div>
          </div>
        </PM7Card>
      )}

      {/* Dialog for button information */}
      <PM7Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
          <PM7DialogHeader>
            <PM7DialogTitle>{activeButtonInfo.title}</PM7DialogTitle>
          </PM7DialogHeader>
          <PM7DialogDescription>
            {activeButtonInfo.description}
            {activeButtonInfo.className && (
              <div className="mt-2">
                <p><strong>CSS Classes:</strong> {activeButtonInfo.className}</p>
              </div>
            )}
            {activeButtonInfo.disabled && (
              <div className="mt-2">
                <p><strong>State:</strong> Disabled</p>
              </div>
            )}
          </PM7DialogDescription>
          <PM7DialogFooter>
            <Button theme={theme} onClick={() => setDialogOpen(false)}>Close</Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </>
  );
};

export default ButtonExample;
