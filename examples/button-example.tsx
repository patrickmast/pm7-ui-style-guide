// Enhancement: Updated Button example to demonstrate how PM7 UI Style Guide enhances ShadCN/UI components
import React, { useState, useEffect } from 'react';
import { PM7Button as Button, buttonRules } from '../src/components/button/pm7-button.tsx';

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

// Button example component
const ButtonExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('winfakt-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('winfakt-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
        <div className="example-preview" style={{ background: theme === 'dark' ? '#262626' : '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button className="border border-gray-300">Outline Style</Button>
                <Button className="bg-gray-200 text-gray-800">Secondary Style</Button>
                <Button className="bg-transparent hover:bg-gray-100">Ghost Style</Button>
                <Button className="underline p-0 h-auto">Link Style</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="text-sm px-2 py-1">Small Button</Button>
                <Button>Default Size</Button>
                <Button className="text-lg px-6 py-3">Large Button</Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button className="border border-gray-300" disabled>Disabled Outline</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="example-code">
          <h3>Usage</h3>
          <pre>
            <code>{`import { Button } from "@/components/ui/button";
import { buttonRules } from "pm7-ui-style-guide";

// Apply the PM7 styling rules to your ShadCN/UI Button
// In your component:
<Button className={buttonRules.button}>Default Button</Button>
<Button className={buttonRules.button} variant="outline">Outline Button</Button>
<Button className={buttonRules.button} variant="secondary">Secondary Button</Button>

// The buttonRules object contains:
${JSON.stringify(buttonRules, null, 2)}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonExample;
