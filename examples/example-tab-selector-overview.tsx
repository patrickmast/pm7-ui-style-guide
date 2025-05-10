import React from 'react';

const ExampleTabSelectorOverview = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div>
    <h3 className="text-xl font-semibold mb-3">PM7TabSelector</h3>
    <p className="mb-4">The PM7TabSelector component provides a clean, accessible interface for switching between different content sections.</p>
    <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
    <ul className="list-disc ml-5 mt-1 mb-4">
      <li>Light and dark theme support with automatic detection</li>
      <li>Accessible tab navigation with proper ARIA attributes</li>
      <li>Customizable styling</li>
      <li>Simple API for tab management</li>
    </ul>
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
      <h4 className="text-lg font-medium mb-2">Live Example</h4>
      <p className="mb-2">This entire example is using the PM7TabSelector component for navigation.</p>
      <p>Try clicking on different tabs to see how it works!</p>
    </div>
  </div>
);

export default ExampleTabSelectorOverview;