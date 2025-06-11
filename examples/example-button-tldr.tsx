import React from 'react';

const ExampleButtonTLDR = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      {/* AI-Agent Friendly Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>TL;DR - Complete Integration Guide</h2>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
          Everything you need to integrate PM7Button in your application
        </p>
      </div>

      {/* Quick Start Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Quick Start</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`# 1. Install the package
npm install pm7-ui-style-guide

# 2. Import the component
import { PM7Button } from 'pm7-ui-style-guide';

# 3. Use in your component
function App() {
  return <PM7Button>Click me</PM7Button>;
}`}</code></pre>
        </div>
      </section>

      {/* Complete Implementation Examples */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Implementation Examples</h3>
        
        <h4>Basic Button</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Button } from 'pm7-ui-style-guide';

function App() {
  return (
    <div>
      <PM7Button onClick={() => alert('Clicked!')}>
        Default Button
      </PM7Button>
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Button Variants</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Button } from 'pm7-ui-style-guide';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <PM7Button variant="default">Default</PM7Button>
      <PM7Button variant="destructive">Destructive</PM7Button>
      <PM7Button variant="outline">Outline</PM7Button>
      <PM7Button variant="secondary">Secondary</PM7Button>
      <PM7Button variant="ghost">Ghost</PM7Button>
      <PM7Button variant="link">Link</PM7Button>
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Button Sizes</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Button } from 'pm7-ui-style-guide';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <PM7Button size="sm">Small</PM7Button>
      <PM7Button size="default">Default</PM7Button>
      <PM7Button size="lg">Large</PM7Button>
      <PM7Button size="icon">🎯</PM7Button>
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Button with Loading State</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Button } from 'pm7-ui-style-guide';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <PM7Button 
      onClick={handleSubmit} 
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Submit'}
    </PM7Button>
  );
}`}</code></pre>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>API Reference</h3>
        
        <h4>Props</h4>
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
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>variant</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'default'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Button style variant</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>size</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'default' | 'sm' | 'lg' | 'icon'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'default'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Button size</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>disabled</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>boolean</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>false</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Disable button interactions</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>onClick</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>(event: MouseEvent) =&gt; void</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Click handler function</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>className</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>''</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Additional CSS classes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>children</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>ReactNode</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Button content</td>
            </tr>
          </tbody>
        </table>

        <h4>HTML Attributes</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p>PM7Button supports all standard HTML button attributes including:</p>
          <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
            <li><code>type</code> - Button type (button, submit, reset)</li>
            <li><code>form</code> - Associates button with a form</li>
            <li><code>disabled</code> - Disables the button</li>
            <li><code>aria-*</code> - Accessibility attributes</li>
            <li><code>data-*</code> - Data attributes</li>
          </ul>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Important Notes</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}` }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>No CSS Import Required:</strong> Styles are included in the component</li>
            <li><strong>PM7 Branding:</strong> Uses PM7 color scheme and styling guidelines</li>
            <li><strong>Accessibility:</strong> Fully keyboard accessible with proper focus states</li>
            <li><strong>Responsive:</strong> Adapts to different screen sizes</li>
            <li><strong>Dark Mode:</strong> Automatically handles light/dark theme switching</li>
          </ul>
        </div>
      </section>

      {/* Common Use Cases */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Common Use Cases</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4>Form Submit Button</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`<PM7Button type="submit" variant="default">
  Submit Form
</PM7Button>`}</code></pre>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Cancel/Close Action</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`<PM7Button variant="ghost" onClick={onClose}>
  Cancel
</PM7Button>`}</code></pre>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Delete/Destructive Action</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`<PM7Button variant="destructive" onClick={onDelete}>
  Delete Item
</PM7Button>`}</code></pre>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section>
        <h3>Package Information</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>NPM:</strong> pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7Button</p>
        </div>
      </section>
    </div>
  );
};

export default ExampleButtonTLDR;