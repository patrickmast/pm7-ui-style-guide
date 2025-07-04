// Enhancement: Rebuilt the Dialog example to match the styling and layout of TabSelector and Card examples.
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getActiveTab, saveActiveTab } from './utils/tab-persistence';
import ReactMarkdown from 'react-markdown';
import { PM7TabSelector } from '../src/components/tab-selector';
import { PM7Card } from '../src/components/card';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter,
  PM7DialogSeparator
} from '../src/components/dialog/pm7-dialog';
import '../src/components/dialog/pm7-dialog.css';
import '../src/components/tab-selector/pm7-tab-selector.css';
import '../src/components/card/pm7-card.css';
import ExampleDialogOverview from './example-dialog-overview';
import ExampleDialogUsage from './example-dialog-usage';
import ExampleDialogExamples from './example-dialog-demo';
import ExampleDialogDocumentation from './example-dialog-documentation';

// Static README content for API tab
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

type TabType = 'demo' | 'overview' | 'usage' | 'documentation';
type ThemeType = 'light' | 'dark';

const DialogExample = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = (tabPath || getActiveTab('overview')) as TabType;

  const handleTabChange = (tabId: string) => {
    saveActiveTab(tabId);
    navigate(`/dialog/${tabId}`);
  };

  return (
    <>
      <PM7TabSelector
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "demo", label: "Demo" },
          { id: "usage", label: "Usage" },
          { id: "documentation", label: "Documentation" }
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        initialTheme={theme}
        className="mb-4"
      />

      {activeTab === "demo" && (
        <div style={{ padding: '1rem' }}>
          <ExampleDialogExamples theme={theme} />
        </div>
      )}
      {activeTab === "overview" && (
        <div style={{ padding: '1rem' }}>
          <ExampleDialogOverview theme={theme} />
        </div>
      )}
      {activeTab === "usage" && (
        <div style={{ padding: '1rem' }}>
          <ExampleDialogUsage theme={theme} />
        </div>
      )}
      {activeTab === "documentation" && (
        <div style={{ padding: '1rem' }}>
          <ExampleDialogDocumentation theme={theme} />
        </div>
      )}
    </>
  );
};

export default DialogExample;
