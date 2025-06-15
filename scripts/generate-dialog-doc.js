#!/usr/bin/env node
/**
 * Generator script for pure AI-optimized PM7Dialog documentation
 * Creates a clean HTML file specifically for AI tools and WebFetch
 * NO menus, NO JavaScript, NO UI elements - only content
 */

const fs = require('fs-extra');
const path = require('path');

// Pure AI-optimized documentation content
const dialogDocContent = `
<div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 100%; padding: 0;">

  <!-- AI-Friendly Header -->
  <section style="margin-bottom: 2rem;">
    <h1>PM7Dialog Component - Complete Integration Guide</h1>
    <p><strong>Package:</strong> pm7-ui-style-guide</p>
    <p><strong>Component:</strong> PM7Dialog (React dialog component based on Radix UI)</p>
    <p><strong>CSS File:</strong> pm7-dialog.css</p>
    <p><strong>Peer Dependencies:</strong> @radix-ui/react-dialog, lucide-react</p>
  </section>

  <!-- Installation -->
  <section style="margin-bottom: 2rem;">
    <h2>Installation</h2>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>npm install pm7-ui-style-guide

# Required peer dependencies:
npm install @radix-ui/react-dialog@^1.0.5 lucide-react@^0.501.0</code></pre>
  </section>

  <!-- Import -->
  <section style="margin-bottom: 2rem;">
    <h2>Import</h2>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogOverlay 
} from 'pm7-ui-style-guide';

// CRITICAL: Import CSS for proper styling
import 'pm7-ui-style-guide/pm7-dialog.css';</code></pre>
  </section>

  <!-- Basic Usage -->
  <section style="margin-bottom: 2rem;">
    <h2>Basic Usage</h2>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>import React, { useState } from 'react';
import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogOverlay 
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/pm7-dialog.css';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    &lt;&gt;
      &lt;button onClick={() =&gt; setOpen(true)}&gt;
        Open Dialog
      &lt;/button&gt;
      
      &lt;PM7Dialog open={open} onOpenChange={setOpen}&gt;
        &lt;PM7DialogOverlay className="fixed inset-0 z-50 bg-black/30" /&gt;
        &lt;PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden"&gt;
          
          &lt;PM7DialogHeader className="p-6 pb-4"&gt;
            &lt;PM7DialogTitle className="text-lg font-semibold"&gt;
              Dialog Title
            &lt;/PM7DialogTitle&gt;
            &lt;PM7DialogDescription className="mt-2 text-sm text-muted-foreground"&gt;
              Dialog description text here.
            &lt;/PM7DialogDescription&gt;
          &lt;/PM7DialogHeader&gt;
          
          &lt;div className="px-6 py-4"&gt;
            &lt;p&gt;Your dialog content goes here.&lt;/p&gt;
          &lt;/div&gt;
          
          &lt;PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"&gt;
            &lt;button 
              onClick={() =&gt; setOpen(false)}
              className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
            &gt;
              Cancel
            &lt;/button&gt;
            &lt;button 
              onClick={() =&gt; setOpen(false)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            &gt;
              Confirm
            &lt;/button&gt;
          &lt;/PM7DialogFooter&gt;
          
        &lt;/PM7DialogContent&gt;
      &lt;/PM7Dialog&gt;
    &lt;/&gt;
  );
}</code></pre>
  </section>

  <!-- Critical Styling Requirements -->
  <section style="margin-bottom: 2rem;">
    <h2>🔧 Critical Styling Requirements</h2>
    
    <h3>PM7DialogContent MUST have:</h3>
    <ul>
      <li><code>p-0 overflow-hidden</code> - Prevents white borders around footer</li>
      <li><code>fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]</code> - Perfect centering</li>
      <li><code>bg-background shadow-lg sm:rounded-lg</code> - Proper background and shadow</li>
    </ul>

    <h3>PM7DialogHeader should have:</h3>
    <ul>
      <li><code>className="p-6 pb-4"</code> - Proper spacing</li>
      <li>Title: <code>className="text-lg font-semibold"</code></li>
      <li>Description: <code>className="mt-2 text-sm text-muted-foreground"</code></li>
    </ul>

    <h3>PM7DialogFooter MUST have:</h3>
    <ul>
      <li><code>className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"</code></li>
      <li>Cancel button: <code>className="mr-auto"</code> to push it left</li>
      <li>Action button: <code>className="bg-blue-600 hover:bg-blue-700 text-white"</code></li>
    </ul>
  </section>

  <!-- Confirmation Dialog Pattern -->
  <section style="margin-bottom: 2rem;">
    <h2>Confirmation Dialog Pattern</h2>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>const ConfirmDialog = ({ open, onOpenChange, onConfirm, title, message }) =&gt; {
  const handleConfirm = () =&gt; {
    onConfirm();
    onOpenChange(false);
  };

  return (
    &lt;PM7Dialog open={open} onOpenChange={onOpenChange}&gt;
      &lt;PM7DialogOverlay className="fixed inset-0 z-50 bg-black/30" /&gt;
      &lt;PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden"&gt;
        
        &lt;PM7DialogHeader className="p-6 pb-4"&gt;
          &lt;PM7DialogTitle className="text-lg font-semibold"&gt;
            {title}
          &lt;/PM7DialogTitle&gt;
          &lt;PM7DialogDescription className="mt-2 text-sm text-muted-foreground"&gt;
            {message}
          &lt;/PM7DialogDescription&gt;
        &lt;/PM7DialogHeader&gt;
        
        &lt;PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"&gt;
          &lt;button 
            onClick={() =&gt; onOpenChange(false)}
            className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
          &gt;
            Cancel
          &lt;/button&gt;
          &lt;button 
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          &gt;
            Confirm
          &lt;/button&gt;
        &lt;/PM7DialogFooter&gt;
        
      &lt;/PM7DialogContent&gt;
    &lt;/PM7Dialog&gt;
  );
};</code></pre>
  </section>

  <!-- Form Dialog Pattern -->
  <section style="margin-bottom: 2rem;">
    <h2>Form Dialog Pattern</h2>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>const FormDialog = ({ open, onOpenChange, onSave }) =&gt; {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () =&gt; {
    setIsLoading(true);
    try {
      await onSave(formData);
      onOpenChange(false);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    &lt;PM7Dialog open={open} onOpenChange={onOpenChange}&gt;
      &lt;PM7DialogOverlay className="fixed inset-0 z-50 bg-black/30" /&gt;
      &lt;PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden"&gt;
        
        &lt;PM7DialogHeader className="p-6 pb-4"&gt;
          &lt;PM7DialogTitle className="text-lg font-semibold"&gt;Add User&lt;/PM7DialogTitle&gt;
          &lt;PM7DialogDescription className="mt-2 text-sm text-muted-foreground"&gt;
            Fill out the form below to add a new user.
          &lt;/PM7DialogDescription&gt;
        &lt;/PM7DialogHeader&gt;
        
        &lt;div className="px-6 py-4 space-y-4"&gt;
          &lt;div&gt;
            &lt;label className="block text-sm font-medium mb-1"&gt;Name&lt;/label&gt;
            &lt;input
              type="text"
              value={formData.name}
              onChange={(e) =&gt; setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            /&gt;
          &lt;/div&gt;
          &lt;div&gt;
            &lt;label className="block text-sm font-medium mb-1"&gt;Email&lt;/label&gt;
            &lt;input
              type="email"
              value={formData.email}
              onChange={(e) =&gt; setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"&gt;
          &lt;button
            onClick={() =&gt; onOpenChange(false)}
            className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
          &gt;
            Cancel
          &lt;/button&gt;
          &lt;button
            onClick={handleSave}
            disabled={isLoading || !formData.name || !formData.email}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
          &gt;
            {isLoading ? 'Saving...' : 'Save'}
          &lt;/button&gt;
        &lt;/PM7DialogFooter&gt;
        
      &lt;/PM7DialogContent&gt;
    &lt;/PM7Dialog&gt;
  );
};</code></pre>
  </section>

  <!-- Common Mistakes -->
  <section style="margin-bottom: 2rem;">
    <h2>❌ Common Mistakes to Avoid</h2>
    <ul>
      <li>❌ Using default padding on PM7DialogContent (causes white borders)</li>
      <li>❌ Not setting <code>mr-auto</code> on cancel button (wrong positioning)</li>
      <li>❌ Forgetting <code>bg-gray-50</code> on footer (no background contrast)</li>
      <li>❌ Missing <code>border-t</code> on footer (no visual separation)</li>
      <li>❌ Not using <code>overflow-hidden</code> (footer bleeds outside rounded corners)</li>
      <li>❌ Using <code>flex-col-reverse sm:flex-row</code> instead of <code>flex-row</code></li>
      <li>❌ Forgetting to import pm7-dialog.css</li>
    </ul>
  </section>

  <!-- Complete Production Example -->
  <section style="margin-bottom: 2rem;">
    <h2>Complete Production Example</h2>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>import React, { useState } from 'react';
import { 
  PM7Dialog, 
  PM7DialogContent, 
  PM7DialogHeader, 
  PM7DialogTitle, 
  PM7DialogDescription, 
  PM7DialogFooter,
  PM7DialogOverlay 
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/pm7-dialog.css';

const SaveConfigDialog = ({ open, onOpenChange, configurationData }) =&gt; {
  const [configName, setConfigName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () =&gt; {
    if (!configName.trim()) return;
    
    setIsSaving(true);
    try {
      await saveConfig(configName.trim(), configurationData);
      onOpenChange(false);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    &lt;PM7Dialog open={open} onOpenChange={onOpenChange}&gt;
      &lt;PM7DialogOverlay className="fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" /&gt;
      &lt;PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden"&gt;
        
        &lt;PM7DialogHeader className="p-6 pb-4"&gt;
          &lt;PM7DialogTitle className="text-lg font-semibold"&gt;Opslaan&lt;/PM7DialogTitle&gt;
          &lt;PM7DialogDescription className="mt-2 text-sm text-muted-foreground"&gt;
            Geef een naam op voor deze configuratie.
          &lt;/PM7DialogDescription&gt;
        &lt;/PM7DialogHeader&gt;
        
        &lt;div className="px-6 py-4 space-y-4"&gt;
          &lt;div className="space-y-2"&gt;
            &lt;label htmlFor="config-name" className="text-sm font-medium"&gt;
              Configuratie naam
            &lt;/label&gt;
            &lt;input
              id="config-name"
              type="text"
              value={configName}
              onChange={(e) =&gt; setConfigName(e.target.value)}
              placeholder="Nieuwe configuratie naam..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              autoFocus
            /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"&gt;
          &lt;button
            onClick={() =&gt; onOpenChange(false)}
            className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
          &gt;
            Annuleren
          &lt;/button&gt;
          &lt;button
            onClick={handleSave}
            disabled={isSaving || !configName.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
          &gt;
            {isSaving ? 'Bezig...' : 'Opslaan'}
          &lt;/button&gt;
        &lt;/PM7DialogFooter&gt;
        
      &lt;/PM7DialogContent&gt;
    &lt;/PM7Dialog&gt;
  );
};</code></pre>
  </section>

  <!-- API Reference -->
  <section style="margin-bottom: 2rem;">
    <h2>API Reference</h2>
    
    <h3>PM7Dialog Props</h3>
    <ul>
      <li><code>open: boolean</code> - Controls dialog visibility</li>
      <li><code>onOpenChange: (open: boolean) =&gt; void</code> - Callback when open state changes</li>
      <li><code>children: ReactNode</code> - Dialog content (typically PM7DialogOverlay and PM7DialogContent)</li>
    </ul>

    <h3>PM7DialogContent Props</h3>
    <ul>
      <li><code>className: string</code> - CSS classes (MUST include proper positioning and overflow)</li>
      <li><code>children: ReactNode</code> - Dialog content (header, body, footer)</li>
    </ul>

    <h3>Required CSS Classes for PM7DialogContent</h3>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px;"><code>className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden"</code></pre>

    <h3>Required CSS Classes for PM7DialogFooter</h3>
    <pre style="background: #f5f5f5; padding: 1rem; border-radius: 6px;"><code>className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"</code></pre>
  </section>

</div>
`;

// HTML template with minimal styling for AI readability
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM7Dialog Component Documentation - AI Optimized</title>
    <meta name="description" content="Complete PM7Dialog component documentation optimized for AI tools and WebFetch">
    <meta name="keywords" content="PM7, UI, React, Dialog, Component, Documentation, AI">
    
    <style>
        /* Minimal styling for AI readability */
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        h1, h2, h3 {
            margin: 1.5rem 0 1rem 0;
            line-height: 1.3;
            font-weight: 600;
        }
        
        h1 { font-size: 2rem; color: #1a1a1a; }
        h2 { font-size: 1.5rem; color: #2a2a2a; }
        h3 { font-size: 1.25rem; color: #3a3a3a; }
        
        p, li {
            margin: 0.5rem 0;
        }
        
        ul {
            padding-left: 2rem;
        }
        
        code {
            background: #f5f5f5;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        pre {
            background: #f5f5f5;
            padding: 1rem;
            border-radius: 6px;
            overflow-x: auto;
            border: 1px solid #e0e0e0;
        }
        
        pre code {
            background: none;
            padding: 0;
        }
        
        section {
            margin-bottom: 2rem;
        }
    </style>
</head>
<body>
    ${dialogDocContent}
</body>
</html>`;

async function generateDialogDoc() {
    try {
        console.log('📄 Generating PM7Dialog AI documentation...');
        
        // Ensure static directory exists
        const staticDir = path.join(process.cwd(), 'static');
        await fs.ensureDir(staticDir);
        
        // Write the HTML file
        const outputPath = path.join(staticDir, 'dialog-doc.html');
        await fs.writeFile(outputPath, htmlTemplate, 'utf8');
        
        console.log('✅ Generated:', outputPath);
        console.log('🤖 This file is optimized for AI tools and WebFetch');
        
    } catch (error) {
        console.error('❌ Error generating dialog doc:', error);
        process.exit(1);
    }
}

// Run the generator
generateDialogDoc();