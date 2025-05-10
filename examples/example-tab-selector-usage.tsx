import React from 'react';

const ExampleTabSelectorUsage = ({ theme }: { theme: 'light' | 'dark' }) => (
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
);

export default ExampleTabSelectorUsage;