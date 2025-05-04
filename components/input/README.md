# PM7 Input Component Documentation

## Overview

The PM7 Input Component provides a fully-styled input field that follows Winfakt's design system. It includes proper styling, focus states, and border handling according to Winfakt's UI guidelines.

## Import

```tsx
import { PM7Input } from 'pm7-ui-style-guide';

// Or with alias
import { PM7Input as Input } from 'pm7-ui-style-guide';
```

## Basic Usage

```tsx
import { PM7Input } from 'pm7-ui-style-guide';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <PM7Input
      type="text"
      placeholder="Enter text here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

## Props

The PM7Input component accepts all standard HTML input props plus the following:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type (text, password, email, etc.) |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `error` | `boolean` | `false` | Whether to show error styling |

## Examples

### Different Input Types

```tsx
import { PM7Input } from 'pm7-ui-style-guide';

function InputTypes() {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="text-input">Text Input</label>
        <PM7Input id="text-input" type="text" placeholder="Text input" />
      </div>
      
      <div>
        <label htmlFor="email-input">Email Input</label>
        <PM7Input id="email-input" type="email" placeholder="Email input" />
      </div>
      
      <div>
        <label htmlFor="password-input">Password Input</label>
        <PM7Input id="password-input" type="password" placeholder="Password input" />
      </div>
      
      <div>
        <label htmlFor="number-input">Number Input</label>
        <PM7Input id="number-input" type="number" placeholder="Number input" />
      </div>
    </div>
  );
}
```

### Input with Error State

```tsx
import { PM7Input } from 'pm7-ui-style-guide';
import { useState } from 'react';

function InputWithError() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setError(!isValid);
    setErrorMessage(isValid ? '' : 'Please enter a valid email address');
  };

  return (
    <div className="space-y-2">
      <label htmlFor="email">Email</label>
      <PM7Input
        id="email"
        type="email"
        value={email}
        error={error}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateEmail(email)}
        placeholder="Enter your email"
      />
      {error && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
}
```

### Disabled Input

```tsx
import { PM7Input } from 'pm7-ui-style-guide';

function DisabledInput() {
  return (
    <PM7Input
      disabled
      value="This input is disabled"
      onChange={() => {}} // No-op since it's disabled
    />
  );
}
```

### Input with Icon

```tsx
import { PM7Input } from 'pm7-ui-style-guide';

function InputWithIcon() {
  return (
    <div className="relative">
      <PM7Input
        type="search"
        placeholder="Search..."
        className="pl-10" // Add padding for the icon
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
```

### Form with Multiple Inputs

```tsx
import { PM7Input } from 'pm7-ui-style-guide';
import { PM7Button } from 'pm7-ui-style-guide';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <PM7Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <PM7Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          rows={4}
          required
        />
      </div>
      
      <PM7Button type="submit">Submit</PM7Button>
    </form>
  );
}
```

## Styling

The input component comes pre-styled with Winfakt's design system. The styling includes:

- Always visible border (as per Winfakt guidelines)
- Focus state with primary color border (#1C86EF)
- No focus ring (as per Winfakt guidelines)
- Proper padding and sizing
- Disabled state styling
- Error state styling

## TypeScript Support

The package includes full TypeScript definitions for the input component:

```tsx
import { PM7InputProps } from 'pm7-ui-style-guide';

// Define input props with type checking
const inputProps: PM7InputProps = {
  type: 'email',
  placeholder: 'Enter your email',
  value: 'user@example.com',
  onChange: (e) => console.log('Input changed:', e.target.value),
  disabled: false,
  error: false
};
```
