import React from 'react';

const ExampleCardOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Card Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Card is a flexible container component that provides structured layouts for content sections. It includes sub-components for headers, footers, titles, and subtitles, offering consistent spacing and styling with PM7 branding and theme support.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component provides semantic structure for organizing content with consistent padding, borders, and spacing. It includes sub-components that work together to create well-organized layouts with proper visual hierarchy and accessibility support.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Dashboard widgets and information panels</div>
            <div style={{ marginBottom: '0.5rem' }}>• Product cards and feature descriptions</div>
            <div style={{ marginBottom: '0.5rem' }}>• Settings sections and configuration panels</div>
            <div style={{ marginBottom: '0.5rem' }}>• Documentation sections and help content</div>
            <div style={{ marginBottom: '0.5rem' }}>• Profile cards and user information displays</div>
            <div style={{ marginBottom: '0.5rem' }}>• Statistics cards and data summaries</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Available Components</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7Card:</strong> Main container with border, padding, and background</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7CardHeader:</strong> Header section with optional dark variant</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7CardFooter:</strong> Footer section for actions or metadata</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7CardTitle:</strong> Primary heading with proper typography</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7CardSubTitle:</strong> Secondary text with subdued styling</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            You compose cards by combining the sub-components as needed. The main PM7Card provides the container styling, while headers, footers, titles, and subtitles add structure and hierarchy. Each component accepts theme props and custom styling through className.
          </p>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The header component includes a dark variant that creates visual separation and emphasis, useful for section headers or important information. All components are designed to work together seamlessly while allowing flexible layouts.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Theme-aware styling with light and dark mode support</div>
            <div style={{ marginBottom: '0.5rem' }}>• Dark header variant for enhanced visual hierarchy</div>
            <div style={{ marginBottom: '0.5rem' }}>• Consistent spacing and typography across all sub-components</div>
            <div style={{ marginBottom: '0.5rem' }}>• Flexible composition with optional header, footer, and content sections</div>
            <div style={{ marginBottom: '0.5rem' }}>• Clean borders and shadows that adapt to theme</div>
            <div style={{ marginBottom: '0.5rem' }}>• Accessible markup with proper semantic structure</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Card requires its CSS file for proper styling and works with any content structure. It can be nested, combined with other PM7 components, and easily customized with additional CSS classes for specific design requirements.
          </p>
        </div>

        <div style={{ 
          backgroundColor: theme === 'dark' ? '#374151' : '#f3f4f6', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          border: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}`
        }}>
          <p style={{ 
            margin: '0', 
            color: theme === 'dark' ? '#d1d5db' : '#374151', 
            fontSize: '0.875rem'
          }}>
            <strong>Note:</strong> The Demo tab shows different card layouts and compositions, the Usage tab provides implementation examples with all sub-components, and the API tab documents all available props and styling options.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleCardOverview;