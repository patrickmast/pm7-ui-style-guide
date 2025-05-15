import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PM7Card } from '../src/components/card';

const dialogReadme = `# PM7Dialog

A flexible Dialog component for PM7 UI that provides modal dialogs with various configurations. Supports headers, footers, titles, descriptions, and dark mode.

## Usage

\`\`\`tsx
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from "@pm7-ui/dialog";

// Basic dialog
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
</PM7Dialog>
\`\`\`

## Props

### PM7Dialog
- \`open\`: boolean — Controls whether the dialog is open.
- \`onOpenChange\`: (open: boolean) => void — Callback when the open state changes.
- All standard Radix UI Dialog props.

### PM7DialogContent
- \`className?\`: string — Additional classes for the dialog container.
- All standard Radix UI DialogContent props.

### PM7DialogHeader, PM7DialogFooter
- \`className?\`: string — Additional classes.
- All standard \`div\` props.

### PM7DialogTitle
- \`className?\`: string — Additional classes.
- All standard Radix UI DialogTitle props.

### PM7DialogDescription
- \`className?\`: string — Additional classes.
- All standard Radix UI DialogDescription props.

### PM7DialogSeparator
- \`className?\`: string — Additional classes.
- \`marginTop?\`: string — Custom top margin (default: '0px').
- \`marginBottom?\`: string — Custom bottom margin (default: '0px').
- All standard \`div\` props.

## Styling

- Dialog supports light and dark mode.
- Use the provided CSS or extend as needed.

## License
MIT`;

const ExampleDialogAPI = ({ theme }: { theme: 'light' | 'dark' }) => (
    <div className="markdown-container dark:text-white">
      <ReactMarkdown>{dialogReadme}</ReactMarkdown>
    </div>
);

export default ExampleDialogAPI;