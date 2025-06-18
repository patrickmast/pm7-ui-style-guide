import React, { useState } from 'react';
import { PM7Card } from '../src';
import packageJson from '../package.json';

interface FAQExampleProps {
  theme: 'light' | 'dark';
}

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const FAQExample: React.FC<FAQExampleProps> = ({ theme }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Add CSS for fade-in animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const CodeBlock = ({ code, children }: { code: string; children?: React.ReactNode }) => (
    <div style={{ position: 'relative' }}>
      <pre style={{
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6',
        padding: '1rem',
        paddingRight: '3rem',
        borderRadius: '0.375rem',
        overflow: 'auto',
        marginBottom: '0.75rem'
      }}>
        <code>{children || code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code)}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          padding: '0.25rem 0.5rem',
          backgroundColor: theme === 'dark' ? '#374151' : '#e5e7eb',
          color: theme === 'dark' ? '#e5e7eb' : '#374151',
          border: 'none',
          borderRadius: '0.25rem',
          fontSize: '0.75rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          fontWeight: '500'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme === 'dark' ? '#4b5563' : '#d1d5db';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = theme === 'dark' ? '#374151' : '#e5e7eb';
        }}
      >
        {copiedCode === code ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );

  const faqItems: FAQItem[] = [
    {
      id: 'install',
      question: 'How to install the PM7 UI Style Guide package?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            To install the PM7 UI Style Guide in your project, use npm or yarn:
          </p>
          <CodeBlock code="npm install pm7-ui-style-guide" />
          <p style={{ marginBottom: '0.5rem' }}>or</p>
          <CodeBlock code="yarn add pm7-ui-style-guide" />
          <p style={{ marginBottom: '0.75rem' }}>
            <strong>Note:</strong> Make sure to also install the peer dependencies:
          </p>
          <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>react (^18.0.0)</li>
            <li>react-dom (^18.0.0)</li>
            <li>@radix-ui/react-dialog</li>
            <li>@radix-ui/react-dropdown-menu</li>
            <li>lucide-react</li>
          </ul>
        </>
      )
    },
    {
      id: 'upgrade',
      question: 'How can I upgrade my PM7 UI Style Guide package?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            To upgrade the PM7 UI Style Guide to the latest version, use:
          </p>
          <CodeBlock code="npm update pm7-ui-style-guide" />
          <p style={{ marginBottom: '0.5rem' }}>or for a specific version:</p>
          <CodeBlock code="npm install pm7-ui-style-guide@latest" />
          <p style={{ marginBottom: '0.75rem' }}>
            <strong>Current version:</strong> {packageJson.version}
          </p>
          <p>
            You can always check the latest version and changelog on <a 
              href="https://www.npmjs.com/package/pm7-ui-style-guide" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#1C86EF',
                textDecoration: 'underline'
              }}
            >
              npm
            </a> or on <a 
              href="https://github.com/patrickmast/pm7-ui-style-guide/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#1C86EF',
                textDecoration: 'underline'
              }}
            >
              GitHub
            </a>.
          </p>
        </>
      )
    },
    {
      id: 'css',
      question: 'Which components require CSS imports?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            Some components require additional CSS imports for proper styling:
          </p>
          <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Dialog:</strong> <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css'</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Menu:</strong> <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css'</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Card:</strong> <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>import 'pm7-ui-style-guide/src/components/card/pm7-card.css'</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Tab Selector:</strong> <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css'</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Theme Toggle:</strong> <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css'</code>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Toast:</strong> <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>import 'pm7-ui-style-guide/src/components/toast/pm7-toast.css'</code>
            </li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            <strong>Tip:</strong> Button and Input components don't require additional CSS imports.
          </p>
        </>
      )
    },
    {
      id: 'darkmode',
      question: 'How do I implement dark mode?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            All PM7 components support dark mode. You can implement this in two ways:
          </p>
          <p style={{ marginBottom: '0.5rem' }}><strong>1. Via the theme prop:</strong></p>
          <CodeBlock code={`<PM7Button theme="dark">Click me</PM7Button>`} />
          <p style={{ marginBottom: '0.5rem' }}><strong>2. Via the dark class on a parent element:</strong></p>
          <CodeBlock code={`<div className="dark">
  <PM7Button>Click me</PM7Button>
</div>`} />
          <p>
            Use the <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>PM7ThemeToggle</code> component to let users switch between light and dark mode.
          </p>
        </>
      )
    },
    {
      id: 'typescript',
      question: 'Does PM7 UI Style Guide support TypeScript?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            Yes! PM7 UI Style Guide is fully written in TypeScript and includes type definitions for all components and exports.
          </p>
          <p style={{ marginBottom: '0.75rem' }}>
            You automatically get:
          </p>
          <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>IntelliSense and autocompletion in your IDE</li>
            <li>Type checking for all component props</li>
            <li>Exports for all interfaces and types</li>
            <li>Full TypeScript documentation</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            No extra configuration needed - it works out of the box with TypeScript projects!
          </p>
        </>
      )
    },
    {
      id: 'white-menu-button',
      question: 'How do I create a white PM7Menu trigger button?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            To create a white trigger button for PM7Menu, you need to enable the background and set the appropriate color props:
          </p>
          <CodeBlock code={`<PM7Menu 
  menuItems={items}
  menuTriggerBackground={true}           // Enable background
  menuTriggerBackgroundColor="#FFFFFF"   // White in light mode
  menuTriggerBackgroundColorDark="#FFFFFF" // White in dark mode
  menuTriggerBorder={true}               // Enable border
  menuTriggerBorderColor="#E5E7EB"      // Light gray border
  menuTriggerBorderColorDark="#E5E7EB"  // Same border in dark mode
  menuTriggerIconColor="#000000"         // Black icon
  menuTriggerIconColorDark="#000000"     // Black icon in dark mode
  menuTriggerOnHover={false}             // No hover effects
  theme={theme}
/>`} />
          <p style={{ marginBottom: '0.75rem', marginTop: '1rem' }}>
            <strong>Important notes:</strong>
          </p>
          <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>menuTriggerBackground</code> must be <code>true</code> to show background colors
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>menuTriggerBorder</code> must be <code>true</code> to show borders
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Set both light and dark mode colors to ensure consistent appearance
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Use <code style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f3f4f6', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>menuTriggerOnHover={false}</code> if you don't want hover effects
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            For more trigger button styles, check the PM7Menu documentation for examples like transparent buttons, outlined buttons, and brand color buttons.
          </p>
        </>
      )
    },
    {
      id: 'customize',
      question: 'How do I customize PM7 components (colors, styles, spacing)?',
      answer: (
        <>
          <p style={{ marginBottom: '0.75rem' }}>
            PM7 UI Style Guide provides several ways to customize components while maintaining brand consistency:
          </p>
          
          <p style={{ marginBottom: '0.5rem' }}><strong>1. Using Design Tokens:</strong></p>
          <p style={{ marginBottom: '0.5rem' }}>Import and use the built-in color palette and design tokens:</p>
          <CodeBlock code={`import { colors, tokens } from 'pm7-ui-style-guide';

// Use PM7 colors in your custom components
const customStyle = {
  backgroundColor: colors.primary, // #1C86EF
  padding: tokens.spacing.md,
  borderRadius: tokens.borderRadius.default
};`} />
          
          <p style={{ marginBottom: '0.5rem', marginTop: '1rem' }}><strong>2. Override with inline styles:</strong></p>
          <CodeBlock code={`<PM7Button 
  style={{ 
    backgroundColor: '#FF6B6B',
    padding: '20px 40px' 
  }}
>
  Custom Styled Button
</PM7Button>`} />
          
          <p style={{ marginBottom: '0.5rem', marginTop: '1rem' }}><strong>3. Override with CSS classes:</strong></p>
          <CodeBlock code={`// In your CSS file
.custom-button {
  background-color: #FF6B6B !important;
  font-size: 18px !important;
}

// In your component
<PM7Button className="custom-button">
  Custom Button
</PM7Button>`} />
          
          <p style={{ marginBottom: '0.5rem', marginTop: '1rem' }}><strong>4. Extend components with custom wrappers:</strong></p>
          <CodeBlock code={`const CustomButton = ({ children, ...props }) => (
  <PM7Button
    {...props}
    style={{
      backgroundColor: '#FF6B6B',
      minWidth: '200px',
      ...props.style
    }}
  >
    {children}
  </PM7Button>
);`} />
          
          <p style={{ marginTop: '1rem' }}>
            <strong>Best Practices:</strong>
          </p>
          <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Use design tokens when possible to maintain consistency</li>
            <li>Avoid overriding core PM7 brand colors (#1C86EF) unless necessary</li>
            <li>Test customizations in both light and dark modes</li>
            <li>Document any significant style overrides for your team</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="example-container">
      <div style={{ 
        padding: '0 20px',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: theme === 'dark' ? '#ffffff' : '#000000'
        }}>
          Frequently Asked Questions
        </h1>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }}>
          {faqItems.map((item, index) => (
            <div 
              key={item.id} 
              style={{ 
                marginBottom: '1rem'
              }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: theme === 'dark' ? '#ffffff' : '#000000',
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginBottom: openItems.includes(item.id) ? '0.75rem' : '0'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{
                    width: '20px',
                    height: '20px',
                    transition: 'transform 0.2s ease',
                    transform: openItems.includes(item.id) ? 'rotate(90deg)' : 'rotate(0deg)',
                    flexShrink: 0
                  }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <span style={{ flex: 1 }}>{item.question}</span>
              </button>
              
              {openItems.includes(item.id) && (
                <PM7Card className={theme === 'dark' ? 'dark' : ''} style={{
                  animation: 'fadeIn 0.2s ease',
                  padding: '1.5rem'
                }}>
                  <div style={{
                    color: theme === 'dark' ? '#e5e7eb' : '#374151',
                    lineHeight: '1.6'
                  }}>
                    {item.answer}
                  </div>
                </PM7Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQExample;