import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PM7Button } from '../src/components/button/pm7-button';
import { PM7Card, PM7CardHeader, PM7CardTitle, PM7CardSubTitle } from '../src/components/card';
import packageJson from '../package.json';
import '../src/components/card/pm7-card.css';
import './example-home.css';

type ThemeType = 'light' | 'dark';

const ExampleHome = ({ theme }: { theme: ThemeType }) => {
  const navigate = useNavigate();

  const components = [
    {
      name: 'Menu',
      description: 'Flexible dropdown menu with multiple trigger styles and item types',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      ),
      route: '/menu'
    },
    {
      name: 'Button',
      description: 'Versatile button component with multiple variants and states',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <rect x="3" y="9" width="18" height="10" rx="2"/>
          <path d="M7 13h10"/>
        </svg>
      ),
      route: '/button'
    },
    {
      name: 'Input',
      description: 'Form input fields with validation and theming support',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <path d="M4 9h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"/>
          <path d="M9 13h6"/>
        </svg>
      ),
      route: '/input'
    },
    {
      name: 'Dialog',
      description: 'Modal dialogs with header, content, and footer sections',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 10h18"/>
        </svg>
      ),
      route: '/dialog'
    },
    {
      name: 'Card',
      description: 'Container component for grouping related content',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <path d="M8 8h8M8 12h4"/>
        </svg>
      ),
      route: '/card'
    },
    {
      name: 'Tab Selector',
      description: 'Navigation tabs for switching between content sections',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"/>
          <path d="M18 2h4v4"/>
          <path d="M15 9l7-7"/>
        </svg>
      ),
      route: '/tabselector'
    },
    {
      name: 'Theme Toggle',
      description: 'Switch between light and dark themes with smooth transitions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ),
      route: '/themetoggle'
    },
    {
      name: 'Toast',
      description: 'Temporary notifications with variants and action support',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      route: '/toast'
    }
  ];

  const features = [
    {
      icon: '🎨',
      title: 'PM7 Branded',
      description: 'Pre-styled components that match PM7 design guidelines'
    },
    {
      icon: '🚀',
      title: 'Production Ready',
      description: 'Battle-tested components used in real PM7 applications'
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'Built on Radix UI for world-class accessibility'
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'All components support light and dark themes'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Mobile-first design that works on all devices'
    },
    {
      icon: '⚡',
      title: 'Performant',
      description: 'Optimized for speed with tree-shakeable exports'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div
              className="pm7-logo"
              style={{
                maskImage: 'url(/favicon.svg)',
                WebkitMaskImage: 'url(/favicon.svg)',
                backgroundColor: '#1C86EF'
              }}
            />
          </div>
          <h1 className="hero-title">PM7 UI Style Guide</h1>
          <p className="hero-subtitle">
            The official source of truth for UI, styling, and branding across all PM7 applications
          </p>
          <div className="hero-actions">
            <PM7Button
              onClick={() => navigate('/menu')}
              variant="primary"
              size="large"
            >
              Explore Components
            </PM7Button>
            <PM7Button
              onClick={() => window.open('https://github.com/patrickmast/pm7-ui-style-guide', '_blank')}
              variant="secondary"
              size="large"
            >
              View on GitHub
            </PM7Button>
          </div>
          <div className="version-badge">
            <span>v{packageJson.version}</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Why PM7 UI Style Guide?</h2>
          <p>Everything you need to build consistent, professional applications</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <PM7Card 
              key={index} 
              theme={theme}
              className="feature-card"
              style={{ padding: '2rem', textAlign: 'center' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <PM7CardTitle theme={theme} style={{ marginBottom: '0.5rem' }}>{feature.title}</PM7CardTitle>
              <PM7CardSubTitle theme={theme}>{feature.description}</PM7CardSubTitle>
            </PM7Card>
          ))}
        </div>
      </section>

      {/* Components Section */}
      <section className="components-section">
        <div className="section-header">
          <h2>Available Components</h2>
          <p>Professional React components with PM7 branding built-in</p>
        </div>
        <div className="components-grid">
          {components.map((component) => (
            <PM7Card
              key={component.name}
              theme={theme}
              className="component-card"
              onClick={() => {
                navigate(`${component.route}/overview`);
                window.scrollTo(0, 0);
              }}
              style={{ cursor: 'pointer', padding: '1.5rem' }}
            >
              <div className="component-icon" style={{ color: '#1C86EF', marginBottom: '1rem' }}>
                {component.icon}
              </div>
              <PM7CardTitle theme={theme} style={{ marginBottom: '0.5rem' }}>{component.name}</PM7CardTitle>
              <PM7CardSubTitle theme={theme}>{component.description}</PM7CardSubTitle>
            </PM7Card>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="quickstart-section">
        <div className="section-header">
          <h2>Quick Start</h2>
          <p>Get up and running with PM7 UI Style Guide in minutes</p>
        </div>
        <PM7Card theme={theme} className="quickstart-card" style={{ padding: '2rem' }}>
          <div className="quickstart-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Install the package</h3>
                  <code className="code-block">npm install pm7-ui-style-guide</code>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Import components</h3>
                  <code className="code-block">
                    {`import { Menu, Button, Dialog } from 'pm7-ui-style-guide';`}
                  </code>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Use in your app</h3>
                  <code className="code-block">
                    {`<Button variant="primary">Click me!</Button>`}
                  </code>
                </div>
              </div>
            </div>
        </PM7Card>
      </section>
    </div>
  );
};

export default ExampleHome;