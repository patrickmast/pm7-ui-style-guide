import React from 'react';

const ExampleCardUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const textStyle = {
    marginBottom: '1rem',
    color: theme === 'dark' ? '#d1d5db' : '#374151',
    lineHeight: '1.6'
  };

  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem',
    overflowX: 'auto' as const
  };

  const codeStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    color: theme === 'dark' ? '#d1d5db' : '#111827',
    fontSize: '0.875rem'
  };

  return (
    <>
      <h3 style={titleStyle}>Basic Usage</h3>
      <p style={textStyle}>Here's how to use the PM7Card component in your React application:</p>
      <div style={codeBlockStyle}>
        <code style={codeStyle}>{`import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from '@pm7-ui/card';

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
      </div>
    </>
  );
};

export default ExampleCardUsage;