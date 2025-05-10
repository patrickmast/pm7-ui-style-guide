import React from 'react';
import { PM7Card } from '../src/components/card';

const ExampleButtonOverview = ({ theme }: { theme: 'light' | 'dark' }) => (
  <PM7Card className="mb-6">
    <h3 className="text-xl font-semibold mb-3">PM7Button</h3>
    <p className="mb-4">The PM7Button component enhances the ShadCN/UI Button with PM7 styling rules, providing a consistent look and feel across the application.</p>
    <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
    <ul className="list-disc ml-5 mt-1 mb-4">
      <li>Light and dark theme support</li>
      <li>Multiple button variants (default, outline, secondary, ghost, link)</li>
      <li>Size variations (small, default, large)</li>
      <li>Accessible button implementation</li>
      <li>Simple API with CSS class-based styling</li>
    </ul>
  </PM7Card>
);

export default ExampleButtonOverview;