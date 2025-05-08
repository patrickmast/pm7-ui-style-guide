// Enhancement: Wrapped InputExample in a card matching the menu-example.tsx design
// Enhancement: Added Input example to demonstrate PM7Input component functionality
// Enhancement: Created example showcasing different input styles and states
// Bug Fix: Fixed unterminated JSX by correcting closing divs and structure.
import React, { useState, useEffect } from 'react';
import { inputRules } from '../src/components/input/pm7-input';
import { PM7Button as Button } from '../src/components/button/pm7-button';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '../src/components/dialog/pm7-dialog';

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

// Input example component
const InputExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('input-component-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // State for dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeInputInfo, setActiveInputInfo] = useState({
    title: '',
    description: '',
    type: '',
    state: ''
  });

  // State for input values
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('input-component-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to open dialog with input information
  const showInputInfo = (title: string, type: string = 'text', state: string = '') => {
    let description = '';

    switch (type) {
      case 'text':
        description = 'Standard text input for single-line text entry.';
        break;
      case 'email':
        description = 'Input field optimized for email addresses with built-in validation.';
        break;
      case 'password':
        description = 'Secure input that masks characters for password entry.';
        break;
      case 'number':
        description = 'Input field that accepts only numeric values.';
        break;
      case 'search':
        description = 'Input field designed for search functionality.';
        break;
      default:
        description = 'Standard text input field.';
    }

    if (state === 'disabled') {
      description += ' This input is currently disabled and cannot be interacted with.';
    } else if (state === 'readonly') {
      description += ' This input is read-only, allowing users to see but not modify the content.';
    }

    setActiveInputInfo({
      title,
      description,
      type,
      state
    });

    setDialogOpen(true);
  };

  return (
    <div className="component-example">
      <div className="component-header">
        <h2>Input Component</h2>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <MoonIconSwitch /> : <SunIconSwitch />}
        </button>
      </div>

      <div className="component-content">
        <div className="example-showcase">
          <div className="example-container">
            <div className="example-preview" style={{ background: theme === 'dark' ? '#333333' : '#f5f5f5', color: theme === 'dark' ? '#ffffff' : 'inherit', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '100%' }}>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                    Input Types
                  </h3>
                  <div className="flex flex-col gap-4 max-w-md">
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Text Input
                      </label>
                      <PM7Input
                        theme={theme}
                        placeholder="Enter text..."
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onClick={() => showInputInfo('Text Input', 'text')}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Email Input
                      </label>
                      <PM7Input
                        theme={theme}
                        type="email"
                        placeholder="email@example.com"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        onClick={() => showInputInfo('Email Input', 'email')}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Password Input
                      </label>
                      <PM7Input
                        theme={theme}
                        type="password"
                        placeholder="Enter password..."
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        onClick={() => showInputInfo('Password Input', 'password')}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Number Input
                      </label>
                      <PM7Input
                        theme={theme}
                        type="number"
                        placeholder="0"
                        value={numberValue}
                        onChange={(e) => setNumberValue(e.target.value)}
                        onClick={() => showInputInfo('Number Input', 'number')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="example-container">
            <div className="example-preview" style={{ background: theme === 'dark' ? '#333333' : '#f5f5f5', color: theme === 'dark' ? '#ffffff' : 'inherit', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '100%' }}>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                    Input States
                  </h3>
                  <div className="flex flex-col gap-4 max-w-md">
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Default Input
                      </label>
                      <PM7Input
                        theme={theme}
                        placeholder="Default state"
                        onClick={() => showInputInfo('Default Input')}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Disabled Input
                      </label>
                      <PM7Input
                        theme={theme}
                        placeholder="Disabled state"
                        disabled
                        onClick={() => showInputInfo('Disabled Input', 'text', 'disabled')}
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                        Read-only Input
                      </label>
                      <PM7Input
                        theme={theme}
                        value="This is read-only content"
                        readOnly
                        onClick={() => showInputInfo('Read-only Input', 'text', 'readonly')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="example-container">
            <div className="example-preview" style={{ background: theme === 'dark' ? '#333333' : '#f5f5f5', color: theme === 'dark' ? '#ffffff' : 'inherit', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
              <div style={{ width: '100%' }}>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
                    Input with Icons
                  </h3>
                  <div className="flex flex-col gap-4 max-w-md">
                    <div className="relative">
                      <label className="block mb-2 text-sm font-medium" style={{ color: theme === 'dark' ? 'white' : 'inherit' }}>
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="example-code example-preview" style={{ background: theme === 'dark' ? '#333333' : '#f5f5f5', color: theme === 'dark' ? '#ffffff' : 'inherit', padding: '20px', borderRadius: '8px' }}>
          <h3>Usage</h3>
          <pre>
            <code>{`// For local development, use relative imports
import { inputRules } from "../src/components/input/pm7-input";

// Apply the PM7 styling rules to your input element
// In your component:

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

// The inputRules object contains:
${JSON.stringify(inputRules, null, 2)}`}</code>
          </pre>
        </div>
      </div>
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
