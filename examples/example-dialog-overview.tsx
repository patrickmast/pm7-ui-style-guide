import React from 'react';
import { PM7Card } from '../src/components/card';

const ExampleDialogOverview = ({ theme }: { theme: 'light' | 'dark' }) => (
  <PM7Card className="mb-6">
    <h3 className="text-xl font-semibold mb-3">PM7Dialog</h3>
    <p className="mb-4">The PM7Dialog component provides a flexible, theme-aware modal dialog system with support for headers, footers, titles, and descriptions.</p>
    <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
    <ul className="list-disc ml-5 mt-1 mb-4">
      <li>Light and dark theme support</li>
      <li>Header, footer, title, and description subcomponents</li>
      <li>Customizable via className and CSS</li>
      <li>Accessible with proper ARIA attributes</li>
      <li>Built on Radix UI's Dialog primitive</li>
    </ul>
  </PM7Card>
);

export default ExampleDialogOverview;