// Enhancement: Provides Winfakt-specific styling for ShadCN/UI Button component
// Bug Fix: Enhanced PM7Button component to support multiple button variants
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

  // CSS Classes for different button variants
  button: 'pm7-button',
  outline: 'pm7-button-outline',
  secondary: 'pm7-button-secondary',
  ghost: 'pm7-button-ghost',
  link: 'pm7-button-link',
  small: 'pm7-button-small',
  large: 'pm7-button-large',
  disabled: 'pm7-button-disabled'
};

// Simple Button component for the examples app
// In a real app that already uses ShadCN/UI, they would apply buttonRules to their existing Button
export interface PM7ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'light' | 'dark';
}

export const PM7Button: React.FC<PM7ButtonProps> = ({ children, ...props }) => {
  const getButtonStyles = () => {
    const className = props.className || '';
    const baseStyles = {
      cursor: 'pointer',
      borderRadius: '6px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
    };

    // Handle different button variants
    if (className.includes(buttonRules.outline)) {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        // Use white text in dark mode, otherwise inherit from parent
        color: props.disabled ? '#9CA3AF' : (props.theme === 'dark' ? 'white' : 'inherit'),
        border: '1px solid #D4D4D4',
      };
    } else if (className.includes(buttonRules.secondary)) {
      return {
        ...baseStyles,
        backgroundColor: '#f3f4f6',
        color: '#111827',
        border: 'none',
      };
    } else if (className.includes(buttonRules.ghost)) {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: props.disabled ? '#9CA3AF' : (props.theme === 'dark' ? 'white' : '#111827'),
        border: 'none',
      };
    } else if (className.includes(buttonRules.link)) {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: '#1C86EF',
        border: 'none',
        padding: '0',
        textDecoration: 'underline',
        height: 'auto',
      };
    } else {
      // Default button style
      return {
        ...baseStyles,
        backgroundColor: props.disabled ? '#E5E7EB' : '#1C86EF',
        color: props.disabled ? '#9CA3AF' : 'white',
        border: 'none',
      };
    }
  };

  // Handle size variants
  const getSizeStyles = () => {
    const className = props.className || '';
    if (className.includes(buttonRules.small)) {
      return {
        fontSize: '0.75rem',
        padding: '0.25rem 0.5rem',
      };
    } else if (className.includes(buttonRules.large)) {
      return {
        fontSize: '1.125rem',
        padding: '0.75rem 1.5rem',
      };
    }
    return {};
  };

  // Add CSS for focus state
  const focusStyles = {
    outline: 'none',
    boxShadow: 'none'
  };

  return (
    <button
      {...props}
      disabled={props.className?.includes(buttonRules.disabled) || props.disabled}
      style={{
        ...getButtonStyles(),
        ...getSizeStyles(),
        ...props.style
      }}
      onFocus={(e) => {
        if (props.onFocus) props.onFocus(e);
        e.currentTarget.style.outline = 'none';
        e.currentTarget.style.boxShadow = focusStyles.boxShadow;
      }}
      onBlur={(e) => {
        if (props.onBlur) props.onBlur(e);
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
};
