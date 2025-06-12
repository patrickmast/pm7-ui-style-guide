import React from 'react';

const ExampleDialogTLDR = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      {/* AI-Agent Friendly Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>TL;DR - Complete Integration Guide</h2>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
          Everything you need to integrate PM7Dialog in your application
        </p>
      </div>

      {/* Quick Start Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Quick Start</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`# 1. Install the package and required peer dependencies
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
}`}</code></pre>
        </div>
      </section>

      {/* Complete Implementation Examples */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Implementation Examples</h3>
        
        <h4>Basic Dialog</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Dialog } from 'pm7-ui-style-guide';
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
}`}</code></pre>
        </div>

        <h4>Confirmation Dialog</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Dialog, PM7Button } from 'pm7-ui-style-guide';
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
}`}</code></pre>
        </div>

        <h4>Form Dialog</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Dialog, PM7Button } from 'pm7-ui-style-guide';
import { useState } from 'react';
import 'pm7-ui-style-guide/dist/components/dialog/pm7-dialog.css';

function App() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOpen(false);
  };

  return (
    <>
      <PM7Button onClick={() => setOpen(true)}>
        Add User
      </PM7Button>
      
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7Dialog.Content>
          <PM7Dialog.Header>
            <PM7Dialog.Title>Add New User</PM7Dialog.Title>
            <PM7Dialog.Description>
              Enter the user details below.
            </PM7Dialog.Description>
          </PM7Dialog.Header>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <PM7Dialog.Footer>
              <PM7Dialog.Close asChild>
                <PM7Button variant="outline">Cancel</PM7Button>
              </PM7Dialog.Close>
              <PM7Button type="submit">Add User</PM7Button>
            </PM7Dialog.Footer>
          </form>
        </PM7Dialog.Content>
      </PM7Dialog>
    </>
  );
}`}</code></pre>
        </div>

        <h4>Custom Trigger Dialog</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Dialog, PM7Button } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/dialog/pm7-dialog.css';

function App() {
  return (
    <PM7Dialog>
      <PM7Dialog.Trigger asChild>
        <PM7Button variant="outline">Open Settings</PM7Button>
      </PM7Dialog.Trigger>
      
      <PM7Dialog.Content>
        <PM7Dialog.Header>
          <PM7Dialog.Title>Settings</PM7Dialog.Title>
          <PM7Dialog.Description>
            Manage your application settings here.
          </PM7Dialog.Description>
        </PM7Dialog.Header>
        
        <div className="py-4">
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" /> Enable notifications
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Auto-save changes
              </label>
            </div>
          </div>
        </div>
        
        <PM7Dialog.Footer>
          <PM7Dialog.Close asChild>
            <PM7Button>Save & Close</PM7Button>
          </PM7Dialog.Close>
        </PM7Dialog.Footer>
      </PM7Dialog.Content>
    </PM7Dialog>
  );
}`}</code></pre>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>API Reference</h3>
        
        <h4>PM7Dialog Props</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Prop</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Type</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Default</th>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>open</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>boolean</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>false</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Controls dialog visibility</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>onOpenChange</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>(open: boolean) =&gt; void</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Callback when dialog state changes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>defaultOpen</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>boolean</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>false</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Initial open state for uncontrolled usage</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>modal</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>boolean</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>true</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Whether dialog is modal</td>
            </tr>
          </tbody>
        </table>

        <h4>Sub-components</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
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

      {/* Installation & Troubleshooting */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Installation & Troubleshooting</h3>
        
        <h4>Peer Dependencies</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}`, marginBottom: '1rem' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}><strong>Required peer dependencies:</strong></p>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '0.5rem', borderRadius: '4px', fontFamily: 'monospace' }}>
            <div>• @radix-ui/react-dialog@^1.0.5</div>
            <div>• lucide-react@^0.501.0</div>
            <div>• react@^18.2.0 || ^19.0.0</div>
            <div>• react-dom@^18.2.0 || ^19.0.0</div>
          </div>
        </div>

        <h4>Common Issues & Solutions</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p><strong>Error: "Cannot resolve dependency tree"</strong></p>
          <div style={{ backgroundColor: theme === 'dark' ? '#3a3a3a' : '#e5e5e5', padding: '0.5rem', borderRadius: '4px', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            npm install lucide-react@^0.501.0 --save
          </div>
          <p style={{ fontSize: '0.9rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
            This resolves peer dependency conflicts by upgrading lucide-react to the required version.
          </p>
        </div>

        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <p><strong>Dialog not showing/styling issues</strong></p>
          <div style={{ backgroundColor: theme === 'dark' ? '#3a3a3a' : '#e5e5e5', padding: '0.5rem', borderRadius: '4px', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
            import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';
          </div>
          <p style={{ fontSize: '0.9rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
            Make sure to import the CSS file. The dialog requires PM7 styles to render correctly.
          </p>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Important Notes</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}` }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
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

      {/* Common Use Cases */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Common Use Cases</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4>Confirmation Dialogs</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Use for destructive actions that need user confirmation (delete, logout, etc.)</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Form Dialogs</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Create/edit forms without navigating to new pages</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Information Dialogs</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Display additional details, help text, or notifications</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Settings/Preferences</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Quick access to configuration options</p>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section>
        <h3>Package Information</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>NPM:</strong> pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7Dialog</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Peer Dependency:</strong> @radix-ui/react-dialog</p>
        </div>
      </section>
    </div>
  );
};

export default ExampleDialogTLDR;