import React from 'react';

const ExampleDialogUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
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
      <p style={textStyle}>Here's how to use the PM7Dialog component in your React application:</p>
      <div style={codeBlockStyle}>
        <code style={codeStyle}>{`import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '@pm7-ui/dialog';

// Basic dialog
const [open, setOpen] = useState(false);

<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent>
    <PM7DialogHeader>
      <PM7DialogTitle>Dialog Title</PM7DialogTitle>
      <PM7DialogDescription>Dialog description or subtitle</PM7DialogDescription>
    </PM7DialogHeader>
    <div>Dialog content goes here.</div>
    <PM7DialogFooter>
      <button onClick={() => setOpen(false)}>Close</button>
    </PM7DialogFooter>
  </PM7DialogContent>
</PM7Dialog>`}</code>
      </div>
    </>
  );
};

export default ExampleDialogUsage;