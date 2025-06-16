import React, { useState } from 'react';

const ExampleDialogDocumentation = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Dialog Component</h3>
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
              https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md
            </code>
            <button
              onClick={() => window.open('https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md', '_blank')}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                const svg = e.currentTarget.querySelector('svg');
                if (svg) svg.style.stroke = '#1C86EF';
              }}
              onMouseOut={(e) => {
                const svg = e.currentTarget.querySelector('svg');
                if (svg) svg.style.stroke = theme === 'dark' ? '#a0a0a0' : '#666';
              }}
              title="Open in new tab"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme === 'dark' ? '#a0a0a0' : '#666'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: 'stroke 0.2s ease' }}
              >
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
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
          met alle essentiële PM7Dialog implementatie guidance.
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

export default ExampleDialogDocumentation;