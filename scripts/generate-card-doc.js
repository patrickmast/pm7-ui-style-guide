#!/usr/bin/env node
/**
 * Generator script for pure AI-optimized PM7Card documentation
 * Creates a clean HTML file specifically for AI tools and WebFetch
 * NO menus, NO JavaScript, NO UI elements - only content
 */

const fs = require('fs-extra');
const path = require('path');

console.log('📄 Generating PM7Card AI documentation...');

// PM7Card specific documentation content
const cardDocContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM7Card Component Documentation - AI Optimized</title>
    <meta name="description" content="Complete PM7Card component documentation optimized for AI tools and WebFetch">
    <meta name="keywords" content="PM7, UI, React, Card, Container, Component, Documentation, AI">
    <link rel="icon" type="image/svg+xml" href="/assets/favicon-XBk62bpz.svg">
    
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
            background: #fff;
        }
        h1, h2, h3 { color: #1a1a1a; margin-top: 2rem; }
        h1 { border-bottom: 3px solid #1C86EF; padding-bottom: 0.5rem; }
        h2 { border-bottom: 1px solid #ddd; padding-bottom: 0.3rem; }
        code {
            background: #f5f5f5;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9em;
        }
        pre {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            padding: 1rem;
            overflow-x: auto;
            margin: 1rem 0;
        }
        pre code {
            background: none;
            padding: 0;
        }
        .feature-list {
            background: #e7f3ff;
            border: 1px solid #b3d9ff;
            border-radius: 6px;
            padding: 1rem;
            margin: 1rem 0;
        }
        .feature-list ul {
            margin: 0;
            padding-left: 1.5rem;
        }
        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 6px;
            padding: 1rem;
            margin: 1rem 0;
        }
        .api-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        .api-table th,
        .api-table td {
            border: 1px solid #ddd;
            padding: 0.75rem;
            text-align: left;
        }
        .api-table th {
            background: #f8f9fa;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <h1>PM7Card Component - Complete Integration Guide</h1>
    
    <p><strong>PM7Card</strong> is a React container component that provides PM7-branded styling for creating card layouts. It offers consistent styling, shadows, borders, and spacing while maintaining flexibility for various content types.</p>

    <h2>Installation & Usage</h2>
    
    <h3>Basic Import</h3>
    <pre><code>import { PM7Card } from 'pm7-ui-style-guide';
// or
import { Card } from 'pm7-ui-style-guide';</code></pre>

    <h3>CSS Import (Required)</h3>
    <pre><code>import 'pm7-ui-style-guide/pm7-card.css';</code></pre>

    <h2>Basic Examples</h2>

    <h3>Simple Card</h3>
    <pre><code>import React from 'react';
import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/pm7-card.css';

function MyComponent() {
  return (
    &lt;PM7Card&gt;
      &lt;h3&gt;Card Title&lt;/h3&gt;
      &lt;p&gt;This is the card content.&lt;/p&gt;
    &lt;/PM7Card&gt;
  );
}</code></pre>

    <h3>Card with Header and Footer</h3>
    <pre><code>&lt;PM7Card&gt;
  &lt;PM7Card.Header&gt;
    &lt;h3&gt;Dashboard Overview&lt;/h3&gt;
    &lt;p&gt;Latest statistics and metrics&lt;/p&gt;
  &lt;/PM7Card.Header&gt;
  
  &lt;PM7Card.Content&gt;
    &lt;div className="grid grid-cols-2 gap-4"&gt;
      &lt;div&gt;Users: 1,234&lt;/div&gt;
      &lt;div&gt;Revenue: $12,345&lt;/div&gt;
    &lt;/div&gt;
  &lt;/PM7Card.Content&gt;
  
  &lt;PM7Card.Footer&gt;
    &lt;button&gt;View Details&lt;/button&gt;
  &lt;/PM7Card.Footer&gt;
&lt;/PM7Card&gt;</code></pre>

    <h3>Clickable Card</h3>
    <pre><code>&lt;PM7Card 
  clickable 
  onClick={() =&gt; console.log('Card clicked')}
&gt;
  &lt;h3&gt;Clickable Card&lt;/h3&gt;
  &lt;p&gt;This entire card is clickable&lt;/p&gt;
&lt;/PM7Card&gt;</code></pre>

    <h2>Card Variants</h2>

    <h3>Default Variant</h3>
    <pre><code>&lt;PM7Card variant="default"&gt;
  Default card styling
&lt;/PM7Card&gt;</code></pre>

    <h3>Outlined Variant</h3>
    <pre><code>&lt;PM7Card variant="outlined"&gt;
  Card with border, no shadow
&lt;/PM7Card&gt;</code></pre>

    <h3>Elevated Variant</h3>
    <pre><code>&lt;PM7Card variant="elevated"&gt;
  Card with enhanced shadow
&lt;/PM7Card&gt;</code></pre>

    <h2>API Reference</h2>

    <table class="api-table">
        <thead>
            <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>children</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Card content</td>
            </tr>
            <tr>
                <td><code>variant</code></td>
                <td>'default' | 'outlined' | 'elevated'</td>
                <td>'default'</td>
                <td>Visual style variant</td>
            </tr>
            <tr>
                <td><code>clickable</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Makes the entire card clickable</td>
            </tr>
            <tr>
                <td><code>onClick</code></td>
                <td>function</td>
                <td>-</td>
                <td>Click handler (only when clickable=true)</td>
            </tr>
            <tr>
                <td><code>className</code></td>
                <td>string</td>
                <td>-</td>
                <td>Additional CSS classes</td>
            </tr>
            <tr>
                <td><code>padding</code></td>
                <td>'none' | 'sm' | 'md' | 'lg'</td>
                <td>'md'</td>
                <td>Internal padding size</td>
            </tr>
            <tr>
                <td><code>rounded</code></td>
                <td>'none' | 'sm' | 'md' | 'lg'</td>
                <td>'md'</td>
                <td>Border radius size</td>
            </tr>
        </tbody>
    </table>

    <h2>Compound Components</h2>

    <h3>PM7Card.Header</h3>
    <pre><code>&lt;PM7Card.Header className="border-b"&gt;
  &lt;h2&gt;Card Title&lt;/h2&gt;
  &lt;p&gt;Subtitle or description&lt;/p&gt;
&lt;/PM7Card.Header&gt;</code></pre>

    <h3>PM7Card.Content</h3>
    <pre><code>&lt;PM7Card.Content&gt;
  Main card content goes here
&lt;/PM7Card.Content&gt;</code></pre>

    <h3>PM7Card.Footer</h3>
    <pre><code>&lt;PM7Card.Footer className="border-t"&gt;
  &lt;div className="flex justify-end gap-2"&gt;
    &lt;button&gt;Cancel&lt;/button&gt;
    &lt;button&gt;Save&lt;/button&gt;
  &lt;/div&gt;
&lt;/PM7Card.Footer&gt;</code></pre>

    <h2>Common Patterns</h2>

    <h3>Profile Card</h3>
    <pre><code>&lt;PM7Card variant="elevated"&gt;
  &lt;PM7Card.Header className="text-center"&gt;
    &lt;img src="avatar.jpg" className="w-16 h-16 rounded-full mx-auto" /&gt;
    &lt;h3&gt;John Doe&lt;/h3&gt;
    &lt;p&gt;Software Engineer&lt;/p&gt;
  &lt;/PM7Card.Header&gt;
  
  &lt;PM7Card.Content&gt;
    &lt;div className="space-y-2"&gt;
      &lt;div&gt;Email: john@example.com&lt;/div&gt;
      &lt;div&gt;Location: San Francisco&lt;/div&gt;
    &lt;/div&gt;
  &lt;/PM7Card.Content&gt;
  
  &lt;PM7Card.Footer&gt;
    &lt;button className="w-full"&gt;View Profile&lt;/button&gt;
  &lt;/PM7Card.Footer&gt;
&lt;/PM7Card&gt;</code></pre>

    <h3>Statistics Card</h3>
    <pre><code>&lt;PM7Card&gt;
  &lt;PM7Card.Header&gt;
    &lt;h3&gt;Total Sales&lt;/h3&gt;
  &lt;/PM7Card.Header&gt;
  
  &lt;PM7Card.Content&gt;
    &lt;div className="text-3xl font-bold text-green-600"&gt;
      $24,567
    &lt;/div&gt;
    &lt;div className="text-sm text-gray-600"&gt;
      ↑ 12% from last month
    &lt;/div&gt;
  &lt;/PM7Card.Content&gt;
&lt;/PM7Card&gt;</code></pre>

    <h3>Action Card</h3>
    <pre><code>&lt;PM7Card clickable onClick={handleAction}&gt;
  &lt;PM7Card.Content className="flex items-center"&gt;
    &lt;div className="flex-1"&gt;
      &lt;h3&gt;Create New Project&lt;/h3&gt;
      &lt;p&gt;Start a new project from scratch&lt;/p&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;Plus className="h-6 w-6" /&gt;
    &lt;/div&gt;
  &lt;/PM7Card.Content&gt;
&lt;/PM7Card&gt;</code></pre>

    <h2>PM7 Styling & Theming</h2>

    <h3>PM7 Brand Colors</h3>
    <ul>
        <li><strong>Background:</strong> White (light mode), Dark (dark mode)</li>
        <li><strong>Border:</strong> #D4D4D4 (light mode), #525252 (dark mode)</li>
        <li><strong>Shadow:</strong> Subtle gray shadows for elevation</li>
        <li><strong>Hover State:</strong> Slight shadow increase on clickable cards</li>
    </ul>

    <h3>Custom Styling</h3>
    <pre><code>&lt;PM7Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-indigo-50"&gt;
  Custom styled card
&lt;/PM7Card&gt;</code></pre>

    <h2>Responsive Design</h2>

    <h3>Grid Layout</h3>
    <pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;PM7Card&gt;Card 1&lt;/PM7Card&gt;
  &lt;PM7Card&gt;Card 2&lt;/PM7Card&gt;
  &lt;PM7Card&gt;Card 3&lt;/PM7Card&gt;
&lt;/div&gt;</code></pre>

    <h3>Responsive Padding</h3>
    <pre><code>&lt;PM7Card className="p-4 md:p-6 lg:p-8"&gt;
  Responsive padding card
&lt;/PM7Card&gt;</code></pre>

    <h2>Accessibility Features</h2>

    <div class="feature-list">
        <p><strong>Built-in Accessibility:</strong></p>
        <ul>
            <li>Proper semantic structure</li>
            <li>Keyboard navigation for clickable cards</li>
            <li>Focus indicators</li>
            <li>Screen reader support</li>
            <li>High contrast compatibility</li>
            <li>Proper ARIA attributes when interactive</li>
        </ul>
    </div>

    <h2>Best Practices</h2>

    <div class="feature-list">
        <p><strong>Recommended Usage:</strong></p>
        <ul>
            <li>Use cards to group related information</li>
            <li>Keep card content focused and scannable</li>
            <li>Use consistent card heights in grids</li>
            <li>Provide clear visual hierarchy within cards</li>
            <li>Use clickable cards sparingly for primary actions</li>
            <li>Ensure adequate spacing between cards</li>
            <li>Test with different content lengths</li>
        </ul>
    </div>

    <div class="warning">
        <p><strong>Important:</strong> The PM7Card component requires the PM7 CSS file to be imported for proper styling. Make sure to include <code>import 'pm7-ui-style-guide/pm7-card.css';</code> in your application.</p>
    </div>

    <h2>Performance Considerations</h2>

    <ul>
        <li>Component is lightweight with minimal overhead</li>
        <li>Use CSS Grid or Flexbox for efficient card layouts</li>
        <li>Consider virtualization for large lists of cards</li>
        <li>Optimize images within cards for faster loading</li>
    </ul>

    <h2>Browser Support</h2>

    <p>PM7Card supports all modern browsers including:</p>
    <ul>
        <li>Chrome 88+</li>
        <li>Firefox 85+</li>
        <li>Safari 14+</li>
        <li>Edge 88+</li>
    </ul>

    <p><em>For older browser support, ensure appropriate polyfills are included in your build process.</em></p>
</body>
</html>`;

// Generate the documentation file
async function generateCardDocumentation() {
  try {
    // Ensure the static directory exists
    const staticDir = path.join(process.cwd(), 'static');
    await fs.ensureDir(staticDir);
    
    // Write the documentation file
    const filePath = path.join(staticDir, 'card-doc.html');
    await fs.writeFile(filePath, cardDocContent);
    
    console.log(`✅ Generated: ${filePath}`);
    console.log('🤖 This file is optimized for AI tools and WebFetch');
    
  } catch (error) {
    console.error('❌ Error generating card documentation:', error);
    process.exit(1);
  }
}

// Run the generator
generateCardDocumentation();