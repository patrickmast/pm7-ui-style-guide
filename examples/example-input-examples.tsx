import React, { useState } from 'react';
import { PM7Button as Button } from '../src/components/button/pm7-button';
import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from '../src/components/dialog/pm7-dialog';

// Custom styled input component for examples
const PM7Input = ({
  theme,
  placeholder = '',
  disabled = false,
  readOnly = false,
  type = 'text',
  className = '',
  value,
  onChange,
  ...props
}: {
  theme: 'light' | 'dark';
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}) => {
  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#111827',
    border: `1px solid ${theme === 'dark' ? '#525252' : '#d1d5db'}`,
    outline: 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : readOnly ? 'default' : 'text',
    transition: 'border-color 0.2s',
    ...props.style
  };

  return (
    <input
      type={type}
      className={className}
      style={inputStyle}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
      onFocus={(e) => {
        if (!disabled && !readOnly) {
          e.target.style.borderColor = '#3b82f6';
        }
      }}
      onBlur={(e) => {
        e.target.style.borderColor = theme === 'dark' ? '#525252' : '#d1d5db';
      }}
      {...props}
    />
  );
};

const ExampleInputExamples = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeInputInfo, setActiveInputInfo] = useState({
    title: '',
    description: '',
    type: '',
    state: ''
  });

  const showInputInfo = (title: string, description: string, type: string = 'text', state: string = '') => {
    setActiveInputInfo({
      title,
      description,
      type,
      state
    });
    setDialogOpen(true);
  };

  const sectionStyle = {
    marginBottom: '1.5rem'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const subTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '500',
    marginBottom: '0.75rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const containerStyle = {
    padding: '1rem',
    border: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}`,
    borderRadius: '0.375rem',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#ffffff'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: theme === 'dark' ? '#d1d5db' : '#374151'
  };

  const buttonStyle = {
    fontSize: '0.875rem',
    color: theme === 'dark' ? '#60a5fa' : '#2563eb',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '1rem'
  };

  return (
    <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
      <h3 style={titleStyle}>Input Examples</h3>
      
      {/* Basic Input */}
      <div style={sectionStyle}>
        <h4 style={subTitleStyle}>Basic Input</h4>
        <div style={containerStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>
              Default Input
            </label>
            <PM7Input
              theme={theme}
              placeholder="Enter text here"
            />
          </div>
          <button
            onClick={() => showInputInfo(
              'Basic Input',
              'A standard input field with default styling.'
            )}
            style={buttonStyle}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Input States */}
      <div style={sectionStyle}>
        <h4 style={subTitleStyle}>Input States</h4>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div>
              <label style={labelStyle}>
                Disabled Input
              </label>
              <PM7Input
                theme={theme}
                placeholder="Disabled input"
                disabled={true}
              />
            </div>
            <div>
              <label style={labelStyle}>
                Read-only Input
              </label>
              <PM7Input
                theme={theme}
                value="Read-only content"
                readOnly={true}
              />
            </div>
          </div>
          <button
            onClick={() => showInputInfo(
              'Input States',
              'Inputs can be set to disabled or read-only states.'
            )}
            style={buttonStyle}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Input Types */}
      <div style={sectionStyle}>
        <h4 style={subTitleStyle}>Input Types</h4>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div>
              <label style={labelStyle}>
                Password Input
              </label>
              <PM7Input
                theme={theme}
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label style={labelStyle}>
                Number Input
              </label>
              <PM7Input
                theme={theme}
                type="number"
                placeholder="Enter a number"
              />
            </div>
          </div>
          <button
            onClick={() => showInputInfo(
              'Input Types',
              'PM7Input supports all standard HTML input types including text, password, email, number, etc.'
            )}
            style={buttonStyle}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Input with Icons */}
      <div style={sectionStyle}>
        <h4 style={subTitleStyle}>Input with Icons</h4>
        <div style={containerStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>
              Search Input
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '0.75rem',
                pointerEvents: 'none'
              }}>
                <svg 
                  style={{ 
                    width: '1rem', 
                    height: '1rem', 
                    color: theme === 'dark' ? '#9ca3af' : '#6b7280' 
                  }} 
                  fill="none" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <PM7Input
                theme={theme}
                type="search"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Search..."
              />
            </div>
          </div>
          <button
            onClick={() => showInputInfo(
              'Input with Icons',
              'Inputs can be enhanced with icons by wrapping them in a relative container and positioning icons absolutely.'
            )}
            style={buttonStyle}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Dialog for input information */}
      <PM7Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
          <PM7DialogHeader>
            <PM7DialogTitle>{activeInputInfo.title}</PM7DialogTitle>
          </PM7DialogHeader>
          <PM7DialogDescription>
            {activeInputInfo.description}
            {activeInputInfo.type && (
              <div style={{ marginTop: '0.5rem' }}>
                <p><strong>Type:</strong> {activeInputInfo.type}</p>
              </div>
            )}
            {activeInputInfo.state && (
              <div style={{ marginTop: '0.5rem' }}>
                <p><strong>State:</strong> {activeInputInfo.state}</p>
              </div>
            )}
          </PM7DialogDescription>
          <PM7DialogFooter>
            <Button theme={theme} onClick={() => setDialogOpen(false)}>Close</Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </div>
  );
};

export default ExampleInputExamples;