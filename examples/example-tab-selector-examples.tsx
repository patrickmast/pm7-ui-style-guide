import React from 'react';
import { PM7TabSelector } from '../src/components/tab-selector';

const ExampleTabSelectorExamples = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div>
    <h3 className="text-xl font-semibold mb-3">Examples</h3>
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">Basic Tabs</h4>
      <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
        <PM7TabSelector
          tabs={[
            { id: 'tab1', label: 'Home' },
            { id: 'tab2', label: 'Profile' },
            { id: 'tab3', label: 'Settings' }
          ]}
          activeTab="tab1"
          onTabChange={(id) => console.log(`Tab ${id} clicked`)}
          initialTheme={theme}
        />
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <p>Content for the Home tab would appear here</p>
        </div>
      </div>
    </div>
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">With Disabled Tab</h4>
      <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
        <PM7TabSelector
          tabs={[
            { id: 'tab1', label: 'Available' },
            { id: 'tab2', label: 'Disabled', disabled: true },
            { id: 'tab3', label: 'Available' }
          ]}
          activeTab="tab1"
          onTabChange={(id) => console.log(`Tab ${id} clicked`)}
          initialTheme={theme}
        />
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <p>Notice how the middle tab is disabled and cannot be selected</p>
        </div>
      </div>
    </div>
  </div>
);

export default ExampleTabSelectorExamples;