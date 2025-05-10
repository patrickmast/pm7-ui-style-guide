import React from 'react';
import { PM7Card } from '../src/components/card';

const ExampleCardOverview = ({ theme }: { theme: 'light' | 'dark' }) => (
  <PM7Card className="mb-6">
    <h3 className="text-xl font-semibold mb-3">PM7Card</h3>
    <p className="mb-4">The PM7Card component provides a flexible, theme-aware card container for static content, with header, footer, title, and subtitle support.</p>
    <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
    <ul className="list-disc ml-5 mt-1 mb-4">
      <li>Light and dark theme support</li>
      <li>Header, footer, title, and subtitle subcomponents</li>
      <li>Customizable via className and CSS</li>
      <li>Simple, accessible markup</li>
    </ul>
  </PM7Card>
);

export default ExampleCardOverview;