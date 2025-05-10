import React from 'react';
import ReactMarkdown from 'react-markdown';

const inputReadme = `# PM7Input Component

A customizable input component that follows the PM7 design system. The component supports both light and dark themes and provides various input states.

## Features

- Light and dark theme support
- Various input states (normal, disabled, read-only)
- Customizable styling
- Focus state with configurable border color

## Installation

\`\`\`bash
npm install pm7-ui-style-guide
\`\`\`

## Usage

\`\`\`jsx
import { inputRules } from 'pm7-ui-style-guide';

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`theme\` | \`'light' | 'dark'\` | Yes | - | Current theme |
| \`placeholder\` | \`string\` | No | \`''\` | Placeholder text |
| \`disabled\` | \`boolean\` | No | \`false\` | Whether the input is disabled |
| \`readOnly\` | \`boolean\` | No | \`false\` | Whether the input is read-only |
| \`type\` | \`string\` | No | \`'text'\` | Input type (text, email, password, etc.) |
| \`className\` | \`string\` | No | \`''\` | Additional CSS classes |
| \`value\` | \`string\` | No | - | Input value |
| \`onChange\` | \`function\` | No | - | Change handler |

## Configuration

The \`inputRules\` object contains the following configuration options:

\`\`\`js
// Example configuration
const inputRules = {
  focusBorderColor: 'primary', // Color for border on focus (use 'primary' or a specific color)
  alwaysShowBorder: true,      // Whether to always show border or only on focus
};
\`\`\`

## Theme Support

The component automatically adapts to light and dark themes based on the provided theme prop.
`;

const ExampleInputAPI = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="markdown-container dark:text-white">
      <ReactMarkdown>{inputReadme}</ReactMarkdown>
    </div>
  </div>
);

export default ExampleInputAPI;