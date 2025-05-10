import React from 'react';

const ExampleInputOverview = ({ theme }: { theme: 'light' | 'dark' }) => (
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
);

export default ExampleInputOverview;