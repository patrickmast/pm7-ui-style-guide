import React from 'react';

const ExampleCardTLDR = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      {/* AI-Agent Friendly Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>TL;DR - Complete Integration Guide</h2>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
          Everything you need to integrate PM7Card in your application
        </p>
      </div>

      {/* Quick Start Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Quick Start</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`# 1. Install the package
npm install pm7-ui-style-guide

# 2. Import the component and CSS
import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/card/pm7-card.css';

# 3. Use in your component
function App() {
  return (
    <PM7Card>
      <h3>Card Title</h3>
      <p>Card content goes here</p>
    </PM7Card>
  );
}`}</code></pre>
        </div>
      </section>

      {/* Complete Implementation Examples */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Implementation Examples</h3>
        
        <h4>Basic Card</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/card/pm7-card.css';

function App() {
  return (
    <PM7Card>
      <h3>Welcome</h3>
      <p>This is a basic card with some content.</p>
    </PM7Card>
  );
}`}</code></pre>
        </div>

        <h4>Structured Card with Header, Content & Footer</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/card/pm7-card.css';

function App() {
  return (
    <PM7Card>
      <PM7Card.Header>
        <PM7Card.Title>Product Information</PM7Card.Title>
        <PM7Card.Description>
          Details about our featured product
        </PM7Card.Description>
      </PM7Card.Header>
      
      <PM7Card.Content>
        <p>This product offers amazing features that will help improve your workflow.</p>
        <ul>
          <li>Feature 1: Enhanced performance</li>
          <li>Feature 2: Better user experience</li>
          <li>Feature 3: Advanced analytics</li>
        </ul>
      </PM7Card.Content>
      
      <PM7Card.Footer>
        <button>Learn More</button>
        <button>Purchase</button>
      </PM7Card.Footer>
    </PM7Card>
  );
}`}</code></pre>
        </div>

        <h4>Interactive Card with Click Handler</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/card/pm7-card.css';

function App() {
  const handleCardClick = () => {
    console.log('Card clicked!');
  };

  return (
    <PM7Card 
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
      className="hover:shadow-lg transition-shadow"
    >
      <PM7Card.Header>
        <PM7Card.Title>Clickable Card</PM7Card.Title>
      </PM7Card.Header>
      <PM7Card.Content>
        <p>Click anywhere on this card to trigger an action.</p>
      </PM7Card.Content>
    </PM7Card>
  );
}`}</code></pre>
        </div>

        <h4>Card with Custom Styling</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/card/pm7-card.css';

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
      <PM7Card className="border-l-4 border-l-blue-500">
        <PM7Card.Header>
          <PM7Card.Title>Info Card</PM7Card.Title>
        </PM7Card.Header>
        <PM7Card.Content>
          <p>This card has a blue left border for emphasis.</p>
        </PM7Card.Content>
      </PM7Card>
      
      <PM7Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <PM7Card.Header>
          <PM7Card.Title>Gradient Card</PM7Card.Title>
        </PM7Card.Header>
        <PM7Card.Content>
          <p>This card uses a gradient background.</p>
        </PM7Card.Content>
      </PM7Card>
    </div>
  );
}`}</code></pre>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>API Reference</h3>
        
        <h4>PM7Card Props</h4>
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
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>children</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>ReactNode</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Card content</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>className</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>''</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Additional CSS classes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>onClick</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>(event: MouseEvent) =&gt; void</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Click handler for interactive cards</td>
            </tr>
          </tbody>
        </table>

        <h4>Sub-components</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>PM7Card.Header</strong> - Card header container</li>
            <li><strong>PM7Card.Title</strong> - Card title component</li>
            <li><strong>PM7Card.Description</strong> - Card description/subtitle</li>
            <li><strong>PM7Card.Content</strong> - Main card content area</li>
            <li><strong>PM7Card.Footer</strong> - Card footer for actions/buttons</li>
          </ul>
          <p style={{ marginTop: '1rem', marginBottom: 0 }}>All sub-components accept <code>className</code> and <code>children</code> props.</p>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Important Notes</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}` }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>CSS Import Required:</strong> You must import the CSS file for proper styling</li>
            <li><strong>PM7 Branding:</strong> Uses PM7 design system colors and spacing</li>
            <li><strong>Responsive Design:</strong> Cards adapt to different screen sizes</li>
            <li><strong>Dark Mode Support:</strong> Automatically handles light/dark themes</li>
            <li><strong>Flexible Structure:</strong> Use sub-components or plain content as needed</li>
            <li><strong>Accessibility:</strong> Semantic HTML structure with proper roles</li>
          </ul>
        </div>
      </section>

      {/* Common Use Cases */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Common Use Cases</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4>Product/Feature Cards</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`<PM7Card>
  <PM7Card.Header>
    <PM7Card.Title>Product Name</PM7Card.Title>
    <PM7Card.Description>Brief description</PM7Card.Description>
  </PM7Card.Header>
  <PM7Card.Content>
    <img src="product.jpg" alt="Product" />
    <p>Detailed product information...</p>
  </PM7Card.Content>
  <PM7Card.Footer>
    <button>Add to Cart</button>
  </PM7Card.Footer>
</PM7Card>`}</code></pre>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Dashboard Widgets</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`<PM7Card>
  <PM7Card.Header>
    <PM7Card.Title>Analytics</PM7Card.Title>
  </PM7Card.Header>
  <PM7Card.Content>
    <div className="chart-container">
      {/* Chart component */}
    </div>
  </PM7Card.Content>
</PM7Card>`}</code></pre>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Settings Panels</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <pre><code>{`<PM7Card>
  <PM7Card.Header>
    <PM7Card.Title>Account Settings</PM7Card.Title>
    <PM7Card.Description>Manage your account preferences</PM7Card.Description>
  </PM7Card.Header>
  <PM7Card.Content>
    <form>
      {/* Form fields */}
    </form>
  </PM7Card.Content>
  <PM7Card.Footer>
    <button type="submit">Save Changes</button>
  </PM7Card.Footer>
</PM7Card>`}</code></pre>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section>
        <h3>Package Information</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>NPM:</strong> pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7Card</p>
        </div>
      </section>
    </div>
  );
};

export default ExampleCardTLDR;