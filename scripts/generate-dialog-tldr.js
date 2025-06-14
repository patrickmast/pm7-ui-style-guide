#!/usr/bin/env node
/**
 * Simple script to generate a clean HTML version of the Dialog TL;DR documentation
 * This creates a WebFetch-friendly static HTML file
 */

const fs = require('fs-extra');
const path = require('path');

// The TL;DR content extracted from the React component
const dialogTldrContent = `
<div>
  <!-- AI-Agent Friendly Header -->
  <div style="margin-bottom: 2rem;">
    <h2>TL;DR - Complete Integration Guide</h2>
    <p style="font-size: 1.1rem; color: #666;">
      Everything you need to integrate PM7Dialog in your application
    </p>
  </div>

  <!-- Quick Start Section -->
  <section style="margin-bottom: 2rem;">
    <h3>Quick Start</h3>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px;">
      <pre><code># 1. Install the package and required peer dependencies
npm install pm7-ui-style-guide

# If you encounter peer dependency conflicts, update these first:
npm install lucide-react@^0.501.0 @radix-ui/react-dialog@^1.0.5

# 2. Import the component and CSS
import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';

# 3. Use in your component
function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7DialogContent>
          <PM7DialogHeader>
            <PM7DialogTitle>Dialog Title</PM7DialogTitle>
            <PM7DialogDescription>Dialog description</PM7DialogDescription>
          </PM7DialogHeader>
          <p>Dialog content goes here</p>
          <PM7DialogFooter>
            <button onClick={() => setOpen(false)}>Close</button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </>
  );
}</code></pre>
    </div>
  </section>

  <!-- Complete Implementation Examples -->
  <section style="margin-bottom: 2rem;">
    <h3>Implementation Examples</h3>
    
    <h4>Basic Dialog</h4>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
      <pre><code>import { PM7Dialog } from 'pm7-ui-style-guide';
import { useState } from 'react';
import 'pm7-ui-style-guide/dist/components/dialog/pm7-dialog.css';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Dialog
      </button>
      
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7Dialog.Content>
          <PM7Dialog.Header>
            <PM7Dialog.Title>Welcome</PM7Dialog.Title>
            <PM7Dialog.Description>
              This is a basic dialog example.
            </PM7Dialog.Description>
          </PM7Dialog.Header>
          
          <div className="py-4">
            <p>Hello! This is the dialog content.</p>
          </div>
          
          <PM7Dialog.Footer>
            <PM7Dialog.Close asChild>
              <button>Close</button>
            </PM7Dialog.Close>
          </PM7Dialog.Footer>
        </PM7Dialog.Content>
      </PM7Dialog>
    </>
  );
}</code></pre>
    </div>

    <h4>Confirmation Dialog</h4>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
      <pre><code>import { PM7Dialog, PM7Button } from 'pm7-ui-style-guide';
import { useState } from 'react';
import 'pm7-ui-style-guide/dist/components/dialog/pm7-dialog.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    console.log('Action confirmed!');
    setOpen(false);
  };

  return (
    <>
      <PM7Button variant="destructive" onClick={() => setOpen(true)}>
        Delete Item
      </PM7Button>
      
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7Dialog.Content>
          <PM7Dialog.Header>
            <PM7Dialog.Title>Confirm Deletion</PM7Dialog.Title>
            <PM7Dialog.Description>
              Are you sure you want to delete this item? This action cannot be undone.
            </PM7Dialog.Description>
          </PM7Dialog.Header>
          
          <PM7Dialog.Footer>
            <PM7Dialog.Close asChild>
              <PM7Button variant="outline">Cancel</PM7Button>
            </PM7Dialog.Close>
            <PM7Button variant="destructive" onClick={handleConfirm}>
              Delete
            </PM7Button>
          </PM7Dialog.Footer>
        </PM7Dialog.Content>
      </PM7Dialog>
    </>
  );
}</code></pre>
    </div>
  </section>

  <!-- API Reference -->
  <section style="margin-bottom: 2rem;">
    <h3>API Reference</h3>
    
    <h4>PM7Dialog Props</h4>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">
      <thead>
        <tr style="border-bottom: 2px solid #e0e0e0;">
          <th style="text-align: left; padding: 0.5rem;">Prop</th>
          <th style="text-align: left; padding: 0.5rem;">Type</th>
          <th style="text-align: left; padding: 0.5rem;">Default</th>
          <th style="text-align: left; padding: 0.5rem;">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">open</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">boolean</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">false</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">Controls dialog visibility</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">onOpenChange</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">(open: boolean) =&gt; void</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">undefined</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">Callback when dialog state changes</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">defaultOpen</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">boolean</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">false</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">Initial open state for uncontrolled usage</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">modal</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">boolean</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">true</td>
          <td style="padding: 0.5rem; border-bottom: 1px solid #e0e0e0;">Whether dialog is modal</td>
        </tr>
      </tbody>
    </table>

    <h4>Sub-components</h4>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px;">
      <ul style="margin: 0; padding-left: 1.5rem;">
        <li><strong>PM7Dialog.Trigger</strong> - Button that opens the dialog</li>
        <li><strong>PM7Dialog.Content</strong> - Main dialog container</li>
        <li><strong>PM7Dialog.Header</strong> - Dialog header section</li>
        <li><strong>PM7Dialog.Title</strong> - Dialog title</li>
        <li><strong>PM7Dialog.Description</strong> - Dialog description/subtitle</li>
        <li><strong>PM7Dialog.Footer</strong> - Dialog footer for actions</li>
        <li><strong>PM7Dialog.Close</strong> - Button that closes the dialog</li>
      </ul>
    </div>
  </section>

  <!-- Installation & Troubleshooting -->
  <section style="margin-bottom: 2rem;">
    <h3>Installation & Troubleshooting</h3>
    
    <h4>Peer Dependencies</h4>
    <div style="background-color: #fff5f5; padding: 1rem; border-radius: 8px; border: 1px solid #ffcccc; margin-bottom: 1rem;">
      <p style="margin: 0 0 0.5rem 0;"><strong>Required peer dependencies:</strong></p>
      <div style="background-color: #f5f5f5; padding: 0.5rem; border-radius: 4px; font-family: monospace;">
        <div>• @radix-ui/react-dialog@^1.0.5</div>
        <div>• lucide-react@^0.501.0</div>
        <div>• react@^18.2.0 || ^19.0.0</div>
        <div>• react-dom@^18.2.0 || ^19.0.0</div>
      </div>
    </div>

    <h4>Common Issues & Solutions</h4>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
      <p><strong>Error: "Cannot resolve dependency tree"</strong></p>
      <div style="background-color: #e5e5e5; padding: 0.5rem; border-radius: 4px; font-family: monospace; margin-bottom: 0.5rem;">
        npm install lucide-react@^0.501.0 --save
      </div>
      <p style="font-size: 0.9rem; color: #666;">
        This resolves peer dependency conflicts by upgrading lucide-react to the required version.
      </p>
    </div>

    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
      <p><strong>Dialog not showing/styling issues</strong></p>
      <div style="background-color: #e5e5e5; padding: 0.5rem; border-radius: 4px; font-family: monospace; margin-bottom: 0.5rem;">
        import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';
      </div>
      <p style="font-size: 0.9rem; color: #666;">
        Make sure to import the CSS file. The dialog requires PM7 styles to render correctly.
      </p>
    </div>
  </section>

  <!-- Important Notes -->
  <section style="margin-bottom: 2rem;">
    <h3>Important Notes</h3>
    <div style="background-color: #fff5f5; padding: 1rem; border-radius: 8px; border: 1px solid #ffcccc;">
      <ul style="margin: 0; padding-left: 1.5rem;">
        <li><strong>CSS Import Required:</strong> You must import the CSS file for proper styling</li>
        <li><strong>Built on Radix:</strong> Uses @radix-ui/react-dialog for accessibility</li>
        <li><strong>Modal by Default:</strong> Creates overlay and traps focus</li>
        <li><strong>Keyboard Support:</strong> ESC to close, proper focus management</li>
        <li><strong>Accessible:</strong> ARIA attributes and semantic HTML</li>
        <li><strong>Portal Rendering:</strong> Renders outside normal DOM hierarchy</li>
        <li><strong>PM7 Styling:</strong> Uses PM7 design system colors and spacing</li>
      </ul>
    </div>
  </section>

  <!-- CRITICAL IMPLEMENTATION PATTERNS -->
  <section style="margin-bottom: 2rem;">
    <h3>🎯 CRITICAL: Proper PM7Dialog Implementation</h3>
    <div style="background-color: #fff3cd; padding: 1rem; border-radius: 8px; border: 2px solid #856404; margin-bottom: 1rem;">
      <p style="margin: 0 0 1rem 0; font-weight: bold; color: #856404;">
        ⚠️ IMPORTANT: The documentation examples above use a simplified API that may not match the actual component structure. 
        Use the patterns below for production implementations.
      </p>
    </div>

    <h4>✅ Correct Confirmation Dialog Pattern</h4>
    <div style="background-color: #e8f5e8; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border: 1px solid #c3e6c3;">
      <pre><code>import { 
  PM7Dialog, 
  PM7DialogContent, 
  PM7DialogHeader, 
  PM7DialogTitle, 
  PM7DialogDescription, 
  PM7DialogFooter,
  PM7DialogOverlay 
} from 'pm7-ui-style-guide';
import { Button } from '../ui/button'; // or your button component

const NewConfirmDialog = ({ open, onOpenChange, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <PM7Dialog open={open} onOpenChange={onOpenChange}>
      <PM7DialogOverlay className="fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
        
        <PM7DialogHeader className="p-6 pb-4">
          <PM7DialogTitle className="text-lg font-semibold">
            Nieuwe configuratie
          </PM7DialogTitle>
          <PM7DialogDescription className="mt-2 text-sm text-muted-foreground">
            Weet je zeker dat je een nieuwe configuratie wilt starten?
          </PM7DialogDescription>
        </PM7DialogHeader>
        
        <div className="px-6 py-4">
          {/* Additional content if needed */}
        </div>
        
        <PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t">
          <Button 
            variant="ghost" 
            onClick={() => onOpenChange(false)}
            className="mr-auto"
          >
            Annuleren
          </Button>
          <Button 
            onClick={handleConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Ja, nieuwe configuratie
          </Button>
        </PM7DialogFooter>
        
      </PM7DialogContent>
    </PM7Dialog>
  );
};</code></pre>
    </div>

    <h4>🔧 Critical Styling Requirements</h4>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
      <h5>PM7DialogContent MUST have:</h5>
      <ul style="margin-left: 1rem;">
        <li><code>p-0 overflow-hidden</code> - Prevents white borders around footer</li>
        <li><code>fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]</code> - Perfect centering</li>
        <li><code>bg-background shadow-lg sm:rounded-lg</code> - Proper background and shadow</li>
      </ul>

      <h5>PM7DialogHeader should have:</h5>
      <ul style="margin-left: 1rem;">
        <li><code>className="p-6 pb-4"</code> - Proper spacing</li>
        <li>Title: <code>className="text-lg font-semibold"</code></li>
        <li>Description: <code>className="mt-2 text-sm text-muted-foreground"</code></li>
      </ul>

      <h5>PM7DialogFooter MUST have:</h5>
      <ul style="margin-left: 1rem;">
        <li><code>className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"</code></li>
        <li>Cancel button: <code>className="mr-auto"</code> to push it left</li>
        <li>Action button: <code>className="bg-blue-600 hover:bg-blue-700 text-white"</code></li>
      </ul>
    </div>
  </section>

  <!-- Package Information -->
  <section>
    <h3>Package Information</h3>
    <div style="background-color: #f5f5f5; padding: 1rem; border-radius: 8px;">
      <p style="margin: 0.25rem 0;"><strong>NPM:</strong> pm7-ui-style-guide</p>
      <p style="margin: 0.25rem 0;"><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
      <p style="margin: 0.25rem 0;"><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7Dialog</p>
      <p style="margin: 0.25rem 0;"><strong>Peer Dependency:</strong> @radix-ui/react-dialog</p>
    </div>
  </section>
</div>
`;

function createStaticHtml(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - PM7 UI Style Guide</title>
    <meta name="description" content="PM7 UI Style Guide documentation for ${title}">
    <meta name="keywords" content="PM7, UI, React, Dialog, Component, Style Guide">
    
    <style>
        /* Basic CSS Reset and Typography */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin: 1.5rem 0 1rem 0;
            line-height: 1.3;
            font-weight: 600;
        }
        
        h1 { font-size: 2.5rem; color: #1a1a1a; }
        h2 { font-size: 2rem; color: #1a1a1a; }
        h3 { font-size: 1.5rem; color: #2a2a2a; }
        h4 { font-size: 1.25rem; color: #2a2a2a; }
        h5 { font-size: 1.1rem; color: #3a3a3a; }
        
        p {
            margin: 1rem 0;
        }
        
        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        li {
            margin: 0.5rem 0;
        }
        
        code {
            background: #f5f5f5;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-family: 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
            font-size: 0.9em;
            color: #d73a49;
            border: 1px solid #e1e4e8;
        }
        
        pre {
            background: #f6f8fa;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1rem 0;
            border: 1px solid #e1e4e8;
        }
        
        pre code {
            background: none;
            padding: 0;
            border: none;
            color: #24292e;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
            border: 1px solid #e1e4e8;
        }
        
        th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #e1e4e8;
        }
        
        th {
            font-weight: 600;
            background: #f6f8fa;
            border-bottom: 2px solid #e1e4e8;
        }
        
        a {
            color: #0366d6;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 2px solid #e1e4e8;
        }
        
        .content {
            max-width: none;
        }
        
        .footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e1e4e8;
            text-align: center;
            color: #586069;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
            
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            
            table {
                font-size: 0.9rem;
            }
            
            th, td {
                padding: 0.5rem;
            }
        }
        
        /* Special styling for highlight boxes */
        section {
            margin-bottom: 2rem;
        }
        
        section > div[style*="background-color: #fff3cd"] {
            background-color: #fff3cd !important;
            border: 2px solid #856404 !important;
            color: #856404;
        }
        
        section > div[style*="background-color: #e8f5e8"] {
            background-color: #e8f5e8 !important;
            border: 1px solid #c3e6c3 !important;
        }
        
        section > div[style*="background-color: #fff5f5"] {
            background-color: #fff5f5 !important;
            border: 1px solid #ffcccc !important;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>PM7 UI Style Guide</h1>
        <p>Dialog Component - TL;DR Documentation</p>
    </div>
    
    <div class="content">
        ${content}
    </div>
    
    <div class="footer">
        <p>PM7 UI Style Guide - Generated on ${new Date().toISOString().split('T')[0]}</p>
        <p><a href="https://github.com/patrickmast/pm7-ui-style-guide">View on GitHub</a> | 
           <a href="https://ui-style-guide.pm7.tools">Live Documentation</a></p>
    </div>
</body>
</html>`;
}

async function generateDialogTldr() {
  console.log('📄 Generating Dialog TL;DR static HTML...');
  
  const staticDir = path.join(__dirname, '../static');
  await fs.ensureDir(staticDir);
  
  const html = createStaticHtml('Dialog TL;DR', dialogTldrContent);
  const outputPath = path.join(staticDir, 'dialog-tldr.html');
  
  await fs.writeFile(outputPath, html, 'utf8');
  
  console.log(`✅ Generated: ${outputPath}`);
  console.log('🌐 This file can now be accessed by WebFetch and other tools');
}

// Run if called directly
if (require.main === module) {
  generateDialogTldr().catch(console.error);
}

module.exports = { generateDialogTldr };