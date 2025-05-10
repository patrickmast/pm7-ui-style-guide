import React from 'react';
import { PM7Card } from '../src/components/card';

const ExampleDialogUsage = ({ theme }: { theme: 'light' | 'dark' }) => (
  <PM7Card className="mb-6">
    <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
    <p className="mb-4">Here's how to use the PM7Dialog component in your React application:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 overflow-x-auto">
      <code className="font-mono">{`import {
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
    </pre>
  </PM7Card>
);

export default ExampleDialogUsage;