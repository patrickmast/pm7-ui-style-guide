import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PM7Card } from '../src/components/card';

const buttonReadme = `# PM7Button Component

A customizable button component that enhances the ShadCN/UI Button with PM7 styling rules. Supports various styles, sizes, and states with automatic theme detection.

## Features

- Light and dark theme support with automatic theme detection
- Multiple button variants: default, outline, secondary, ghost, and link
- Size variations: small, default, and large
- Accessible button implementation
- Simple API with CSS class-based styling

## Installation

\`\`\`bash
npm install pm7-ui-style-guide
\`\`\`

## Usage

\`\`\`jsx
import { PM7Button as Button, buttonRules } from 'pm7-ui-style-guide';

// Default button
<Button className={buttonRules.button}>
  Default Button
</Button>

// Outline variant
<Button className={buttonRules.button + ' ' + buttonRules.outline}>
  Outline Button
</Button>

// Secondary variant
<Button className={buttonRules.button + ' ' + buttonRules.secondary}>
  Secondary Button
</Button>
\`\`\`

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`theme\` | \`'light' | 'dark'\` | No | \`'light'\` | Current theme |
| \`className\` | \`string\` | No | \`''\` | Additional CSS class names |
| \`disabled\` | \`boolean\` | No | \`false\` | Whether the button is disabled |
| \`...props\` | \`ButtonHTMLAttributes\` | No | - | All standard button attributes |

## Button Rules

The \`buttonRules\` object provides CSS classes for different button styles:

\`\`\`js
{
  button: 'pm7-button',
  outline: 'pm7-button-outline',
  secondary: 'pm7-button-secondary',
  ghost: 'pm7-button-ghost',
  link: 'pm7-button-link',
  small: 'pm7-button-small',
  large: 'pm7-button-large'
}
\`\`\`

## Theme Support

The component automatically adapts to light and dark themes based on the \`theme\` prop.
`;

const ExampleButtonAPI = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div className="markdown-container dark:text-white">
    <ReactMarkdown>{buttonReadme}</ReactMarkdown>
  </div>
);

export default ExampleButtonAPI;