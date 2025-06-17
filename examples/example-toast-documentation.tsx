import React, { useState } from 'react';

const ExampleToastDocumentation = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/toast/README.md');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Toast Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Copieer deze link die kan gebruikt worden als documentatie voor dit component:</p>

      <div style={{ 
        backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        border: `1px solid ${theme === 'dark' ? '#444' : '#dee2e6'}`,
        marginBottom: '1.5rem'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
            <code style={{ 
              backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
              padding: '0.75rem 2.5rem 0.75rem 1rem',
              borderRadius: '6px',
              border: `1px solid ${theme === 'dark' ? '#555' : '#ddd'}`,
              fontSize: '0.9rem',
              color: theme === 'dark' ? '#e0e0e0' : '#333',
              display: 'block',
              wordBreak: 'break-all'
            }}>
              https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/toast/README.md
            </code>
            <button
              onClick={() => window.open('https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/toast/README.md', '_blank')}
              title="Open link in new tab"
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem',
                color: theme === 'dark' ? '#8b92a9' : '#6c757d',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#a8b1c7' : '#495057'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#8b92a9' : '#6c757d'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          </div>
          <button
            onClick={copyToClipboard}
            style={{
              backgroundColor: copied ? '#22c55e' : '#1C86EF',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              minWidth: '120px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              if (!copied) {
                e.currentTarget.style.backgroundColor = '#1a73d1';
              }
            }}
            onMouseOut={(e) => {
              if (!copied) {
                e.currentTarget.style.backgroundColor = '#1C86EF';
              }
            }}
          >
            {copied ? (
              <>
                <span>✓</span>
                Gekopieerd!
              </>
            ) : (
              <>
                <span>📋</span>
                Kopiëren
              </>
            )}
          </button>
        </div>
      </div>

      <div style={{ 
        backgroundColor: theme === 'dark' ? '#2a2a2a' : '#e7f3ff',
        padding: '1.5rem',
        borderRadius: '8px',
        border: `1px solid ${theme === 'dark' ? '#444' : '#b3d9ff'}`,
        textAlign: 'center'
      }}>
        <h3 style={{ 
          fontSize: '1.25rem',
          fontWeight: '600',
          color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
          marginBottom: '1rem'
        }}>
          🤖 AI-Geoptimaliseerde Documentatie
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          color: theme === 'dark' ? '#a0a0a0' : '#666',
          lineHeight: '1.6',
          marginBottom: '1rem'
        }}>
          Deze link bevat complete Markdown documentatie die perfect leesbaar is door AI-assistants, 
          ontwikkelaars, en andere automatische systemen. Direct toegankelijk op GitHub - 
          met alle essentiële PM7Toast implementatie guidance.
        </p>
        <div style={{ 
          fontSize: '0.9rem',
          color: theme === 'dark' ? '#888' : '#777',
          fontStyle: 'italic'
        }}>
          Perfect voor ChatGPT, Claude, en andere AI code assistants
        </div>
        </div>
      </div>
    </>
  );
};

export default ExampleToastDocumentation;