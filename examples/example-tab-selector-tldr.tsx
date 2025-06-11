import React from 'react';

const ExampleTabSelectorTLDR = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      {/* AI-Agent Friendly Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>TL;DR - Complete Integration Guide</h2>
        <p style={{ fontSize: '1.1rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
          Everything you need to integrate PM7TabSelector in your application
        </p>
      </div>

      {/* Quick Start Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Quick Start</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`# 1. Install the package
npm install pm7-ui-style-guide

# 2. Import the component and CSS
import { PM7TabSelector } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/tab-selector/pm7-tab-selector.css';

# 3. Use in your component
function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  
  const tabs = [
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'Details' },
    { id: 'tab3', label: 'Settings' }
  ];

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}`}</code></pre>
        </div>
      </section>

      {/* Complete Implementation Examples */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Implementation Examples</h3>
        
        <h4>Basic Tab Selector</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7TabSelector } from 'pm7-ui-style-guide';
import { useState } from 'react';
import 'pm7-ui-style-guide/dist/components/tab-selector/pm7-tab-selector.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'support', label: 'Support' }
  ];

  return (
    <div>
      <PM7TabSelector
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* Tab Content */}
      {activeTab === 'overview' && <div>Overview content</div>}
      {activeTab === 'features' && <div>Features content</div>}
      {activeTab === 'pricing' && <div>Pricing content</div>}
      {activeTab === 'support' && <div>Support content</div>}
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Tab Selector with React Router</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7TabSelector } from 'pm7-ui-style-guide';
import { useParams, useNavigate } from 'react-router-dom';
import 'pm7-ui-style-guide/dist/components/tab-selector/pm7-tab-selector.css';

function ProductPage() {
  const navigate = useNavigate();
  const { '*': tabPath } = useParams();
  const activeTab = tabPath || 'overview';

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'support', label: 'Support' }
  ];

  const handleTabChange = (tabId) => {
    navigate(\`/product/\${tabId}\`);
  };

  return (
    <div>
      <h1>Product Details</h1>
      
      <PM7TabSelector
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        className="mb-6"
      />
      
      {/* Route-based content rendering */}
      {activeTab === 'overview' && <ProductOverview />}
      {activeTab === 'specifications' && <ProductSpecs />}
      {activeTab === 'reviews' && <ProductReviews />}
      {activeTab === 'support' && <ProductSupport />}
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Tab Selector with Theme Integration</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7TabSelector } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';
import 'pm7-ui-style-guide/dist/components/tab-selector/pm7-tab-selector.css';

function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [theme, setTheme] = useState('light');

  // Theme detection
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const tabs = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
    { id: 'users', label: 'Users' }
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <PM7TabSelector
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          initialTheme={theme}
          className="border-b border-gray-200 dark:border-gray-700"
        />
        
        <div className="p-6">
          {activeTab === 'analytics' && <AnalyticsDashboard />}
          {activeTab === 'reports' && <ReportsView />}
          {activeTab === 'settings' && <SettingsPanel />}
          {activeTab === 'users' && <UserManagement />}
        </div>
      </div>
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Dynamic Tab Creation</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7TabSelector } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';
import 'pm7-ui-style-guide/dist/components/tab-selector/pm7-tab-selector.css';

function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('');
  const [projects, setProjects] = useState([]);

  // Fetch projects from API
  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data);
      if (data.length > 0) {
        setActiveTab(data[0].id);
      }
    });
  }, []);

  // Create tabs from projects data
  const tabs = projects.map(project => ({
    id: project.id,
    label: project.name
  }));

  // Add a "+" tab for creating new projects
  const tabsWithAdd = [
    ...tabs,
    { id: 'add-new', label: '+ New Project' }
  ];

  const handleTabChange = (tabId) => {
    if (tabId === 'add-new') {
      handleCreateNewProject();
    } else {
      setActiveTab(tabId);
    }
  };

  const handleCreateNewProject = () => {
    // Logic to create new project
    console.log('Creating new project...');
  };

  return (
    <div>
      <PM7TabSelector
        tabs={tabsWithAdd}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      {projects.map(project => (
        activeTab === project.id && (
          <ProjectContent key={project.id} project={project} />
        )
      ))}
    </div>
  );
}`}</code></pre>
        </div>

        <h4>Responsive Tab Selector</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <pre><code>{`import { PM7TabSelector } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';
import 'pm7-ui-style-guide/dist/components/tab-selector/pm7-tab-selector.css';

function ResponsiveTabs() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const allTabs = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog', label: 'Blog' }
  ];

  // Show fewer tabs on mobile
  const tabs = isMobile 
    ? allTabs.slice(0, 3).concat([{ id: 'more', label: 'More...' }])
    : allTabs;

  return (
    <div>
      <PM7TabSelector
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className={isMobile ? 'text-sm' : ''}
      />
      
      {/* Content for each tab */}
      <div className="mt-4 p-4">
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'products' && <ProductsContent />}
        {activeTab === 'services' && <ServicesContent />}
        {activeTab === 'about' && <AboutContent />}
        {activeTab === 'contact' && <ContactContent />}
        {activeTab === 'blog' && <BlogContent />}
        {activeTab === 'more' && <MobileMenuDropdown />}
      </div>
    </div>
  );
}`}</code></pre>
        </div>
      </section>

      {/* API Reference */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>API Reference</h3>
        
        <h4>PM7TabSelector Props</h4>
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
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>tabs</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Tab[]</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>[]</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Array of tab objects</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>activeTab</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>''</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>ID of currently active tab</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>onTabChange</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>(tabId: string) =&gt; void</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>undefined</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Callback when tab changes</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>initialTheme</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'light' | 'dark'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>'light'</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Initial theme for styling</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>className</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>string</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>''</td>
              <td style={{ padding: '0.5rem', borderBottom: `1px solid ${theme === 'dark' ? '#444' : '#e0e0e0'}` }}>Additional CSS classes</td>
            </tr>
          </tbody>
        </table>

        <h4>Tab Interface</h4>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <pre><code>{`interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
  className?: string;
}`}</code></pre>
        </div>
      </section>

      {/* Important Notes */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Important Notes</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#3a2a2a' : '#fff5f5', padding: '1rem', borderRadius: '8px', border: `1px solid ${theme === 'dark' ? '#663333' : '#ffcccc'}` }}>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li><strong>CSS Import Required:</strong> You must import the CSS file for proper styling</li>
            <li><strong>PM7 Branding:</strong> Uses PM7 design system colors and styling</li>
            <li><strong>Responsive Design:</strong> Adapts to different screen sizes</li>
            <li><strong>Keyboard Support:</strong> Arrow keys and Enter for navigation</li>
            <li><strong>Theme Support:</strong> Automatically handles light/dark themes</li>
            <li><strong>Flexible Integration:</strong> Works with React Router or local state</li>
            <li><strong>Accessibility:</strong> ARIA attributes and semantic HTML</li>
          </ul>
        </div>
      </section>

      {/* Common Use Cases */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Common Use Cases</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4>Content Organization</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Organize related content into logical sections (Overview, Details, Settings)</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Navigation Menus</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Main navigation for applications (Dashboard, Reports, Users)</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Documentation Pages</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>API docs, guides, examples (API, Usage, Examples, TL;DR)</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Data Views</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Different views of the same data (Table, Grid, Chart)</p>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h4>Workflow Steps</h4>
          <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            <p>Multi-step processes (Setup, Configuration, Review)</p>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section>
        <h3>Package Information</h3>
        <div style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>NPM:</strong> pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Repository:</strong> https://github.com/patrickmast/pm7-ui-style-guide</p>
          <p style={{ margin: '0.25rem 0' }}><strong>Direct URL:</strong> https://ui-style-guide.pm7.tools/docs/PM7TabSelector</p>
        </div>
      </section>
    </div>
  );
};

export default ExampleTabSelectorTLDR;