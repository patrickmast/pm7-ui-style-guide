// Enhancement: Updated Button example to demonstrate how PM7 UI Style Guide enhances ShadCN/UI components
// Enhancement: Added dialog functionality to display information about each button when clicked
// Bug Fix: Updated button styles to match PM7Button component's conditional styling logic
import React, { useState, useEffect } from 'react';
import { PM7Button as Button, buttonRules } from '../src/components/button/pm7-button.tsx';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '../src/components/dialog/pm7-dialog.tsx';

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

// Button example component
const ButtonExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('button-component-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // State for dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeButtonInfo, setActiveButtonInfo] = useState({
    title: '',
    description: '',
    className: '',
    disabled: false
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('button-component-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
      description = 'This is a disabled button that cannot be interacted with.';
    } else {
      description = 'This is a default button with standard styling.';
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
    <div className="component-example">
      <div className="component-header">
        <h2>Button Component</h2>
        <div className="theme-toggle">
          <button
            className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="theme-switch-thumb">
              {theme === 'light' ? <SunIconSwitch /> : <MoonIconSwitch />}
            </span>
          </button>
        </div>
      </div>
      <div className="example-container">
        <div className="example-preview" style={{ background: theme === 'dark' ? '#262626' : '#f5f5f5', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start' }}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default Button')}>Default Button</Button>
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} onClick={() => showButtonInfo('Outline Style', 'outline')}>Outline Style</Button>
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.secondary} onClick={() => showButtonInfo('Secondary Style', 'secondary')}>Secondary Style</Button>
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.ghost} onClick={() => showButtonInfo('Ghost Style', 'ghost')}>Ghost Style</Button>
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.link} onClick={() => showButtonInfo('Link Style', 'link')}>Link Style</Button>
              </div>
            </div>

            <Separator theme={theme} />

            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.small} onClick={() => showButtonInfo('Small Button', 'small')}>Small Button</Button>
                <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default Size')}>Default Size</Button>
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.large} onClick={() => showButtonInfo('Large Button', 'large')}>Large Button</Button>
              </div>
            </div>

            <Separator theme={theme} />

            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>Button States</h3>
              <div className="flex flex-wrap gap-4">
                <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default')}>Default</Button>
                <Button theme={theme} className={buttonRules.button} disabled onClick={() => showButtonInfo('Disabled', '', true)}>Disabled</Button>
                <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} disabled onClick={() => showButtonInfo('Disabled Outline', 'outline', true)}>Disabled Outline</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="example-code">
          <h3>Usage</h3>
          <pre>
            <code>{`// Enhancement: Updated import paths for better word-wrapping
import { Button } from "@/components/ui/button";
// For local development, use relative imports
import { buttonRules } from "../src/components/button/pm7-button";

// Apply the PM7 styling rules to your ShadCN/UI Button
// In your component:
<Button className={buttonRules.button}>
  Default Button
</Button>

<Button className={buttonRules.button + ' ' + buttonRules.outline}>
  Outline Button
</Button>

<Button className={buttonRules.button + ' ' + buttonRules.secondary}>
  Secondary Button
</Button>

// The buttonRules object contains:
${JSON.stringify(buttonRules, null, 2)}`}</code>
          </pre>
        </div>
      </div>
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
    </div>
  );
};

export default ButtonExample;
