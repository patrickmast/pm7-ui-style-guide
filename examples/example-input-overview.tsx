import React from 'react';

const ExampleInputOverview = ({ theme }: { theme: 'light' | 'dark' }) => (
  <>
    <h3 style={{ 
      fontSize: '1.25rem', 
      fontWeight: '600', 
      marginBottom: '0.75rem', 
      color: theme === 'dark' ? '#ffffff' : '#111827' 
    }}>
      PM7Input
    </h3>
    <p style={{ 
      marginBottom: '1rem', 
      color: theme === 'dark' ? '#d1d5db' : '#374151' 
    }}>
      The PM7Input component provides a flexible, theme-aware input field with support for various states and styling options.
    </p>
    <h4 style={{ 
      fontSize: '1.125rem', 
      fontWeight: '500', 
      marginTop: '1rem', 
      marginBottom: '0.5rem', 
      color: theme === 'dark' ? '#ffffff' : '#111827' 
    }}>
      Key Features
    </h4>
    <ul style={{ 
      listStyle: 'disc', 
      marginLeft: '1.25rem', 
      marginTop: '0.25rem', 
      marginBottom: '1rem', 
      color: theme === 'dark' ? '#d1d5db' : '#374151',
      lineHeight: '1.6'
    }}>
      <li style={{ marginBottom: '0.25rem' }}>Light and dark theme support</li>
      <li style={{ marginBottom: '0.25rem' }}>Support for disabled and read-only states</li>
      <li style={{ marginBottom: '0.25rem' }}>Configurable focus border color</li>
      <li style={{ marginBottom: '0.25rem' }}>Customizable via className and styling rules</li>
      <li style={{ marginBottom: '0.25rem' }}>Compatible with all standard HTML input types</li>
    </ul>
  </>
);

export default ExampleInputOverview;