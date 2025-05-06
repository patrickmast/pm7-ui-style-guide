// Enhancement: Provides Winfakt-specific styling for ShadCN/UI Button component
import React from 'react';

// Button rules for pm7-ui-style-guide - these are the only changes needed
// for apps that already use ShadCN/UI
export const buttonRules = {
  // Colors
  primaryColor: '#1C86EF', // Winfakt primary blue for buttons
  borderColor: '#D4D4D4', // Winfakt border color
  
  // Behavior
  cursor: 'pointer', // Always show pointer cursor on hover
  
  // Focus state
  focusRingColor: '#1C86EF', // Use primary color for focus rings
};

// Simple Button component for the examples app
// In a real app that already uses ShadCN/UI, they would apply buttonRules to their existing Button
export interface PM7ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PM7Button: React.FC<PM7ButtonProps> = ({ children, ...props }) => (
  <button 
    {...props} 
    style={{ 
      cursor: 'pointer',
      backgroundColor: props.disabled ? undefined : (props.className?.includes('outline') ? 'transparent' : '#1C86EF'),
      color: props.className?.includes('outline') ? 'inherit' : 'white',
      border: props.className?.includes('outline') ? '1px solid #D4D4D4' : 'none',
      borderRadius: '6px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      ...props.style 
    }}
  >
    {children}
  </button>
);
