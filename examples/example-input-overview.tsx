import React from 'react';

const ExampleInputOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Input Configuration</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Input provides a configuration system for standardizing input field styling across React applications. Rather than a single component, it offers styling rules and guidelines that ensure consistent input behavior and appearance with PM7 branding.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The inputRules configuration object defines how input fields should behave and appear in your application. It handles focus border colors, border display preferences, and integrates with form validation states to provide consistent visual feedback.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Form fields in registration and login screens</div>
            <div style={{ marginBottom: '0.5rem' }}>• Search inputs and filter controls</div>
            <div style={{ marginBottom: '0.5rem' }}>• Settings panels with configurable options</div>
            <div style={{ marginBottom: '0.5rem' }}>• Data entry forms and user profile editing</div>
            <div style={{ marginBottom: '0.5rem' }}>• Comment fields and text input areas</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Configuration Options</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Focus Border Color:</strong> Defines the border color when inputs receive focus</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Always Show Border:</strong> Controls whether borders are always visible or only on focus</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Primary Color Integration:</strong> Uses PM7's brand color (#1C86EF) as default</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>State-based Colors:</strong> Support for error, success, and warning states</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            You import the inputRules object and configure it according to your application's needs. The configuration can be modified at runtime to change input behavior across your entire application, or adjusted based on form validation states and user preferences.
          </p>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The system works with any HTML input element or React input component, providing styling guidelines rather than restricting you to a specific component implementation.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Benefits</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Consistent input styling across all forms and components</div>
            <div style={{ marginBottom: '0.5rem' }}>• Easy integration with form validation libraries</div>
            <div style={{ marginBottom: '0.5rem' }}>• Runtime configuration for dynamic styling changes</div>
            <div style={{ marginBottom: '0.5rem' }}>• PM7 brand compliance with customizable options</div>
            <div style={{ marginBottom: '0.5rem' }}>• Framework-agnostic approach works with any input solution</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The inputRules configuration integrates with popular form libraries like React Hook Form, Formik, and others. It requires no additional dependencies and works with existing CSS frameworks and component libraries while maintaining PM7's design standards.
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
            <strong>Note:</strong> The Demo tab shows input styling examples with different configurations, the Usage tab provides implementation details for the inputRules object, and the API tab documents all available configuration options.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleInputOverview;