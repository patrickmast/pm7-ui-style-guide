import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from '../src/components/card';

const ExampleCardUsage = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div style={{ maxWidth: 600, margin: '0' }}>
    <PM7Card>
      <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
      <p className="mb-4">Here's how to use the PM7Card component in your React application:</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 overflow-x-auto">
        <code className="font-mono">{`import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from '@pm7-ui/card';

<PM7Card>
  <PM7CardHeader>
    <PM7CardTitle>Card Title</PM7CardTitle>
    <PM7CardSubTitle>Card subtitle or description</PM7CardSubTitle>
  </PM7CardHeader>
  <div>Card content goes here.</div>
  <PM7CardFooter>
    <button>Action</button>
  </PM7CardFooter>
</PM7Card>`}</code>
      </pre>
    </PM7Card>
  </div>
);

export default ExampleCardUsage;