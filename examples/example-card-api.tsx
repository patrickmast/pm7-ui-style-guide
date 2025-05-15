import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PM7Card } from '../src/components/card';

const cardReadme = `# PM7Card

A flexible Card component for PM7 UI, inspired by PM7Dialog but for static content display. Supports header, footer, title, subtitle, and dark mode.

## Usage

\`\`\`tsx
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from "@pm7-ui/card";

<PM7Card>
  <PM7CardHeader>
    <PM7CardTitle>Card Title</PM7CardTitle>
    <PM7CardSubTitle>Card subtitle or description</PM7CardSubTitle>
  </PM7CardHeader>
  <div>Card content goes here.</div>
  <PM7CardFooter>
    <button>Action</button>
  </PM7CardFooter>
</PM7Card>
\`\`\`

## Props

### PM7Card
- \`className?\`: string — Additional classes for the card container.
- All standard \`div\` props.

### PM7CardHeader, PM7CardFooter
- \`className?\`: string — Additional classes.
- All standard \`div\` props.

### PM7CardTitle
- \`className?\`: string — Additional classes.
- All standard \`h3\` props.

### PM7CardSubTitle
- \`className?\`: string — Additional classes.
- All standard \`p\` props.

## Styling

- Card supports light and dark mode.
- Use the provided CSS or extend as needed.

## License
MIT`;

const ExampleCardAPI = ({ theme }: { theme: 'light' | 'dark' }) => (
    <div className="markdown-container dark:text-white">
      <ReactMarkdown>{cardReadme}</ReactMarkdown>
    </div>
);

export default ExampleCardAPI;