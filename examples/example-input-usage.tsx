import React from 'react';

const ExampleInputUsage = ({ theme }: { theme: 'light' | 'dark' }) => (
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
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Input Properties</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300 mb-4">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2">Property</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Default</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">theme</td>
              <td className="px-4 py-2">'light' | 'dark'</td>
              <td className="px-4 py-2">Required</td>
              <td className="px-4 py-2">Controls the input's appearance based on theme</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">placeholder</td>
              <td className="px-4 py-2">string</td>
              <td className="px-4 py-2">''</td>
              <td className="px-4 py-2">Placeholder text displayed when input is empty</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">disabled</td>
              <td className="px-4 py-2">boolean</td>
              <td className="px-4 py-2">false</td>
              <td className="px-4 py-2">When true, disables the input and applies disabled styling</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">readOnly</td>
              <td className="px-4 py-2">boolean</td>
              <td className="px-4 py-2">false</td>
              <td className="px-4 py-2">When true, makes the input read-only</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">type</td>
              <td className="px-4 py-2">string</td>
              <td className="px-4 py-2">'text'</td>
              <td className="px-4 py-2">Input type (text, password, email, number, etc.)</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">className</td>
              <td className="px-4 py-2">string</td>
              <td className="px-4 py-2">''</td>
              <td className="px-4 py-2">Additional CSS classes to apply</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">value</td>
              <td className="px-4 py-2">string</td>
              <td className="px-4 py-2">undefined</td>
              <td className="px-4 py-2">Controlled input value</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 font-medium">onChange</td>
              <td className="px-4 py-2">function</td>
              <td className="px-4 py-2">undefined</td>
              <td className="px-4 py-2">Handler function for input changes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Input Configuration</h4>
      <p className="mb-3 text-gray-700 dark:text-gray-300">The PM7Input can be configured using the <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded">inputRules</code> object:</p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`// Available configuration options
const inputRules = {
  focusBorderColor: 'primary', // Color for border on focus (use 'primary' or a specific color)
  alwaysShowBorder: true,      // Whether to always show border or only on focus
};`}</code>
      </pre>
    </div>
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Input Variants</h4>
      <h5 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">Disabled Input</h5>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`<PM7Input
  theme="light"
  disabled={true}
  placeholder="Disabled input"
/>`}</code>
      </pre>
      <h5 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">Read-only Input</h5>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`<PM7Input
  theme="light"
  readOnly={true}
  value="Read-only content"
/>`}</code>
      </pre>
      <h5 className="text-md font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">Input with Custom Type</h5>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`<PM7Input
  theme="light"
  type="password"
  placeholder="Enter password"
/>`}</code>
      </pre>
    </div>
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Controlled Input Example</h4>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-4 overflow-x-auto">
        <code className="text-sm font-mono text-gray-800 dark:text-gray-300">{`import { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <PM7Input
      theme="light"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};`}</code>
      </pre>
    </div>
  </div>
);

export default ExampleInputUsage;