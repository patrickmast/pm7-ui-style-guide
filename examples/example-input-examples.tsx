import React, { useState } from 'react';
import { PM7Button as Button } from '../src/components/button/pm7-button';
import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from '../src/components/dialog/pm7-dialog';

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
    border border-gray-300 dark:border-gray-600
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:border-blue-500
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

const ExampleInputExamples = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeInputInfo, setActiveInputInfo] = useState({
    title: '',
    description: '',
    type: '',
    state: ''
  });

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

export default ExampleInputExamples;