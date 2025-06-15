#!/usr/bin/env node
/**
 * Generator script for pure AI-optimized PM7ThemeToggle documentation
 * Creates a clean HTML file specifically for AI tools and WebFetch
 * NO menus, NO JavaScript, NO UI elements - only content
 */

const fs = require('fs-extra');
const path = require('path');

console.log('📄 Generating PM7ThemeToggle AI documentation...');

// PM7ThemeToggle specific documentation content
const themeToggleDocContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM7ThemeToggle Component Documentation - AI Optimized</title>
    <meta name="description" content="Complete PM7ThemeToggle component documentation optimized for AI tools and WebFetch">
    <meta name="keywords" content="PM7, UI, React, ThemeToggle, DarkMode, Theme, Component, Documentation, AI">
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
    <h1>PM7ThemeToggle Component - Complete Integration Guide</h1>
    
    <p><strong>PM7ThemeToggle</strong> is a React component that provides a toggle button for switching between light and dark themes. It offers smooth animations, customizable icons, and PM7-branded styling while integrating seamlessly with theme providers.</p>

    <h2>Installation & Usage</h2>
    
    <h3>Basic Import</h3>
    <pre><code>import { PM7ThemeToggle } from 'pm7-ui-style-guide';
// or
import { ThemeToggle } from 'pm7-ui-style-guide';</code></pre>

    <h3>CSS Import (Required)</h3>
    <pre><code>import 'pm7-ui-style-guide/pm7-theme-toggle.css';</code></pre>

    <h2>Basic Examples</h2>

    <h3>Simple Theme Toggle</h3>
    <pre><code>import React, { useState } from 'react';
import { PM7ThemeToggle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/pm7-theme-toggle.css';

function MyComponent() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) =&gt; {
    setTheme(newTheme);
    // Apply theme to your app
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    &lt;PM7ThemeToggle
      theme={theme}
      onThemeChange={handleThemeChange}
    /&gt;
  );
}</code></pre>

    <h3>With Custom Icons</h3>
    <pre><code>import { Sun, Moon } from 'lucide-react';

&lt;PM7ThemeToggle
  theme={theme}
  onThemeChange={handleThemeChange}
  lightIcon={&lt;Sun size={16} /&gt;}
  darkIcon={&lt;Moon size={16} /&gt;}
/&gt;</code></pre>

    <h3>Different Sizes</h3>
    <pre><code>// Small toggle
&lt;PM7ThemeToggle size="sm" /&gt;

// Medium toggle (default)
&lt;PM7ThemeToggle size="md" /&gt;

// Large toggle
&lt;PM7ThemeToggle size="lg" /&gt;</code></pre>

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
                <td><code>theme</code></td>
                <td>'light' | 'dark'</td>
                <td>'light'</td>
                <td>Current theme</td>
            </tr>
            <tr>
                <td><code>onThemeChange</code></td>
                <td>function</td>
                <td>-</td>
                <td>Callback when theme changes: (theme: string) =&gt; void</td>
            </tr>
            <tr>
                <td><code>size</code></td>
                <td>'sm' | 'md' | 'lg'</td>
                <td>'md'</td>
                <td>Size of the toggle button</td>
            </tr>
            <tr>
                <td><code>variant</code></td>
                <td>'default' | 'outline' | 'ghost'</td>
                <td>'default'</td>
                <td>Visual style variant</td>
            </tr>
            <tr>
                <td><code>lightIcon</code></td>
                <td>ReactNode</td>
                <td>Default sun icon</td>
                <td>Custom icon for light theme</td>
            </tr>
            <tr>
                <td><code>darkIcon</code></td>
                <td>ReactNode</td>
                <td>Default moon icon</td>
                <td>Custom icon for dark theme</td>
            </tr>
            <tr>
                <td><code>showLabel</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether to show text label</td>
            </tr>
            <tr>
                <td><code>className</code></td>
                <td>string</td>
                <td>-</td>
                <td>Additional CSS classes</td>
            </tr>
            <tr>
                <td><code>disabled</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the toggle is disabled</td>
            </tr>
        </tbody>
    </table>

    <h2>Theme Integration</h2>

    <h3>With React Context</h3>
    <pre><code>import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =&gt; {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = (newTheme) =&gt; {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
};

export const useTheme = () =&gt; useContext(ThemeContext);

// Usage in component
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    &lt;header&gt;
      &lt;PM7ThemeToggle
        theme={theme}
        onThemeChange={toggleTheme}
      /&gt;
    &lt;/header&gt;
  );
}</code></pre>

    <h3>With Next.js and next-themes</h3>
    <pre><code>import { useTheme } from 'next-themes';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  
  return (
    &lt;PM7ThemeToggle
      theme={theme}
      onThemeChange={setTheme}
    /&gt;
  );
}</code></pre>

    <h3>With localStorage Persistence</h3>
    <pre><code>import React, { useState, useEffect } from 'react';

function ThemeToggleWithPersistence() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() =&gt; {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  
  const handleThemeChange = (newTheme) =&gt; {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  return (
    &lt;PM7ThemeToggle
      theme={theme}
      onThemeChange={handleThemeChange}
    /&gt;
  );
}</code></pre>

    <h2>Styling Variants</h2>

    <h3>Default Variant</h3>
    <pre><code>&lt;PM7ThemeToggle variant="default" /&gt;</code></pre>

    <h3>Outline Variant</h3>
    <pre><code>&lt;PM7ThemeToggle variant="outline" /&gt;</code></pre>

    <h3>Ghost Variant</h3>
    <pre><code>&lt;PM7ThemeToggle variant="ghost" /&gt;</code></pre>

    <h3>With Label</h3>
    <pre><code>&lt;PM7ThemeToggle showLabel={true} /&gt;</code></pre>

    <h2>PM7 Styling & Theming</h2>

    <h3>PM7 Brand Colors</h3>
    <ul>
        <li><strong>Primary Blue:</strong> #1C86EF (active state)</li>
        <li><strong>Background:</strong> Adapts to current theme</li>
        <li><strong>Border:</strong> #D4D4D4 (light mode), #525252 (dark mode)</li>
        <li><strong>Icon Color:</strong> High contrast for visibility</li>
    </ul>

    <h3>Custom Styling</h3>
    <pre><code>&lt;PM7ThemeToggle
  className="custom-theme-toggle"
  style={{ 
    borderRadius: '50%',
    padding: '12px'
  }}
/&gt;</code></pre>

    <h2>Advanced Features</h2>

    <h3>System Theme Detection</h3>
    <pre><code>import React, { useState, useEffect } from 'react';

function SystemThemeToggle() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() =&gt; {
    // Detect system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    
    // Use saved preference or system preference
    const savedTheme = localStorage.getItem('theme') || systemTheme;
    setTheme(savedTheme);
    
    // Listen for system changes
    const handleChange = (e) =&gt; {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () =&gt; mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    &lt;PM7ThemeToggle
      theme={theme}
      onThemeChange={setTheme}
    /&gt;
  );
}</code></pre>

    <h3>Animated Theme Transition</h3>
    <pre><code>/* Add to your CSS */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Usage */
&lt;PM7ThemeToggle
  theme={theme}
  onThemeChange={(newTheme) =&gt; {
    // Add transition class
    document.documentElement.classList.add('theme-transitioning');
    
    setTheme(newTheme);
    
    // Remove transition class after animation
    setTimeout(() =&gt; {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }}
/&gt;</code></pre>

    <h2>Accessibility Features</h2>

    <div class="feature-list">
        <p><strong>Built-in Accessibility:</strong></p>
        <ul>
            <li>Keyboard navigation (Tab, Enter, Space)</li>
            <li>ARIA attributes for screen readers</li>
            <li>Focus indicators</li>
            <li>High contrast support</li>
            <li>Proper button semantics</li>
            <li>Theme change announcements</li>
        </ul>
    </div>

    <h2>Best Practices</h2>

    <div class="feature-list">
        <p><strong>Recommended Usage:</strong></p>
        <ul>
            <li>Place theme toggle in header or navigation area</li>
            <li>Persist user preference in localStorage</li>
            <li>Respect system theme preferences initially</li>
            <li>Use consistent iconography (sun/moon)</li>
            <li>Provide smooth transitions between themes</li>
            <li>Test with both light and dark backgrounds</li>
            <li>Ensure toggle is accessible via keyboard</li>
        </ul>
    </div>

    <div class="warning">
        <p><strong>Important:</strong> The PM7ThemeToggle component requires the PM7 CSS file to be imported for proper styling. Make sure to include <code>import 'pm7-ui-style-guide/pm7-theme-toggle.css';</code> in your application.</p>
    </div>

    <h2>Common Patterns</h2>

    <h3>Header Integration</h3>
    <pre><code>&lt;header className="flex justify-between items-center p-4"&gt;
  &lt;div className="logo"&gt;
    &lt;img src="logo.svg" alt="Logo" /&gt;
  &lt;/div&gt;
  
  &lt;nav className="flex items-center space-x-4"&gt;
    &lt;a href="/about"&gt;About&lt;/a&gt;
    &lt;a href="/contact"&gt;Contact&lt;/a&gt;
    &lt;PM7ThemeToggle 
      theme={theme} 
      onThemeChange={setTheme} 
    /&gt;
  &lt;/nav&gt;
&lt;/header&gt;</code></pre>

    <h3>Settings Panel</h3>
    <pre><code>&lt;div className="settings-panel"&gt;
  &lt;h3&gt;Appearance&lt;/h3&gt;
  
  &lt;div className="setting-item"&gt;
    &lt;label&gt;Theme&lt;/label&gt;
    &lt;PM7ThemeToggle
      theme={theme}
      onThemeChange={setTheme}
      showLabel={true}
      variant="outline"
    /&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h2>Performance Considerations</h2>

    <ul>
        <li>Component is lightweight with minimal re-renders</li>
        <li>Theme changes are efficiently handled through CSS variables</li>
        <li>Icons are optimized for fast rendering</li>
        <li>Animations use CSS transforms for smooth performance</li>
    </ul>

    <h2>Browser Support</h2>

    <p>PM7ThemeToggle supports all modern browsers including:</p>
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
async function generateThemeToggleDocumentation() {
  try {
    // Ensure the static directory exists
    const staticDir = path.join(process.cwd(), 'static');
    await fs.ensureDir(staticDir);
    
    // Write the documentation file
    const filePath = path.join(staticDir, 'theme-toggle-doc.html');
    await fs.writeFile(filePath, themeToggleDocContent);
    
    console.log(`✅ Generated: ${filePath}`);
    console.log('🤖 This file is optimized for AI tools and WebFetch');
    
  } catch (error) {
    console.error('❌ Error generating theme-toggle documentation:', error);
    process.exit(1);
  }
}

// Run the generator
generateThemeToggleDocumentation();