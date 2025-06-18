# PM7Toast Component - Complete Integration Guide

**PM7Toast** provides a flexible notification system for displaying temporary messages to users. Built on Radix UI's Toast primitive, it offers multiple variants, swipe gestures, and action buttons while maintaining PM7 branding standards.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/toast/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/toast/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/toast/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/toast/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Toast (React notification system)  
**CSS File**: pm7-toast.css (required for animations)  
**Peer Dependencies**: @radix-ui/react-toast

## Installation

```bash
npm install pm7-ui-style-guide

# Required peer dependency:
npm install @radix-ui/react-toast
```

## Setup

### 1. Import required CSS

```tsx
import 'pm7-ui-style-guide/src/components/toast/pm7-toast.css';
```

### 2. Add PM7Toaster to your app root

```tsx
import { PM7Toaster } from 'pm7-ui-style-guide';

function App() {
  return (
    <>
      {/* Your app content */}
      <PM7Toaster theme="light" />
    </>
  );
}
```

### 3. Use the toast function

```tsx
import { toast } from 'pm7-ui-style-guide';

function MyComponent() {
  const handleClick = () => {
    toast({
      title: "Success!",
      description: "Your changes have been saved.",
      variant: "success"
    });
  };

  return <button onClick={handleClick}>Save</button>;
}
```

## Basic Usage

### Simple Toast

```tsx
toast({
  title: "Welcome back!",
  description: "You've successfully logged in."
});
```

### Success Toast

```tsx
toast({
  title: "Saved!",
  description: "Your changes have been saved successfully.",
  variant: "success"
});
```

### Error Toast

```tsx
toast({
  title: "Error",
  description: "Something went wrong. Please try again.",
  variant: "destructive"
});
```

### Warning Toast

```tsx
toast({
  title: "Warning",
  description: "This action cannot be undone.",
  variant: "warning"
});
```

### Info Toast

```tsx
toast({
  title: "Information",
  description: "Your session will expire in 5 minutes.",
  variant: "info"
});
```

## Advanced Features

### Toast with Action Button

```tsx
toast({
  title: "File deleted",
  description: "report.pdf has been moved to trash.",
  action: {
    label: "Undo",
    onClick: () => {
      // Restore the file
      restoreFile();
      toast({
        title: "Restored",
        description: "File has been restored.",
        variant: "success"
      });
    }
  }
});
```

### Custom Duration

```tsx
toast({
  title: "Processing",
  description: "This may take a few moments...",
  duration: 10000 // 10 seconds
});
```

### Multiple Toasts

```tsx
// Show multiple toasts in sequence
toast({ title: "First notification" });
toast({ title: "Second notification", variant: "info" });
toast({ title: "Third notification", variant: "success" });
```

## API Reference

### toast(options)

Shows a toast notification and returns an object with methods to control the toast.

#### Options

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | The main message |
| `description` | string | No | Additional details |
| `variant` | "default" \| "success" \| "destructive" \| "warning" \| "info" | No | Visual style (default: "default") |
| `duration` | number | No | Auto-dismiss time in milliseconds (default: 5000) |
| `action` | object | No | Action button configuration |
| `action.label` | string | Yes* | Button text (*required if action is provided) |
| `action.onClick` | function | Yes* | Click handler (*required if action is provided) |

#### Return Value

The `toast()` function returns an object with the following methods:

| Method | Type | Description |
|--------|------|-------------|
| `id` | string | Unique identifier for the toast |
| `dismiss()` | function | Immediately dismisses the toast |
| `update(options)` | function | Updates the toast with new options |

Example usage:

```tsx
// Store the returned object to control the toast
const myToast = toast({
  title: "Processing...",
  description: "Please wait",
  duration: Infinity // Won't auto-dismiss
});

// Later, update the toast
myToast.update({
  title: "Success!",
  description: "Operation completed",
  variant: "success"
});

// Or dismiss it manually
myToast.dismiss();

// Access the toast ID
console.log(myToast.id); // "1", "2", etc.
```

### PM7Toaster Component

The toast container that must be added to your app root.

#### Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `theme` | "light" \| "dark" | No | Theme mode (default: "light") |
| `position` | Position | No | Toast position (default: bottom-right) |
| `hotkey` | string[] | No | Keyboard shortcut (default: ['F8']) |
| `className` | string | No | Additional CSS classes |

## Variants

### Default
Standard white/dark background for general messages.

### Success (Green)
For positive confirmations and successful operations.

### Destructive (Red)
For errors, failures, and critical alerts.

### Warning (Yellow)
For caution messages and important notices.

### Info (Blue)
For informational messages and tips.

## Styling

PM7Toast uses CSS-in-JS for styling with full theme support. The component automatically adapts to light and dark modes based on the theme prop passed to PM7Toaster.

### Custom Styling

You can pass additional classes to customize the appearance:

```tsx
<PM7Toaster className="my-custom-toaster" theme="light" />
```

## Accessibility Features

- **Screen Reader Support**: Toasts are announced using ARIA live regions
- **Keyboard Navigation**: Tab to navigate, Escape to dismiss
- **Focus Management**: Automatic focus handling for action buttons
- **High Contrast**: Meets WCAG contrast requirements
- **Reduced Motion**: Respects user's motion preferences

## Best Practices

1. **Keep Messages Concise**: Use short, clear messages that users can read quickly
2. **Use Appropriate Variants**: Match the variant to the message type for clarity
3. **Provide Actions When Relevant**: Include undo for destructive operations
4. **Avoid Overuse**: Don't overwhelm users with too many notifications
5. **Consider Duration**: Use longer durations for important messages
6. **Test Accessibility**: Verify screen reader announcements work correctly

## Common Patterns

### Form Submission

```tsx
async function handleSubmit(data) {
  try {
    await saveData(data);
    toast({
      title: "Success!",
      description: "Your information has been saved.",
      variant: "success"
    });
  } catch (error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive"
    });
  }
}
```

### Delete with Undo

```tsx
function handleDelete(item) {
  const backup = {...item};
  
  deleteItem(item.id);
  
  toast({
    title: "Item deleted",
    description: `${item.name} has been removed.`,
    action: {
      label: "Undo",
      onClick: () => {
        restoreItem(backup);
        toast({
          title: "Restored",
          description: `${item.name} has been restored.`,
          variant: "success"
        });
      }
    }
  });
}
```

### Loading States

```tsx
function handleLongOperation() {
  const loadingToast = toast({
    title: "Processing...",
    description: "Please wait while we process your request.",
    duration: Infinity // Won't auto-dismiss
  });
  
  performOperation()
    .then(() => {
      loadingToast.dismiss();
      toast({
        title: "Complete!",
        description: "Operation completed successfully.",
        variant: "success"
      });
    })
    .catch(() => {
      loadingToast.dismiss();
      toast({
        title: "Failed",
        description: "Operation failed. Please try again.",
        variant: "destructive"
      });
    });
}
```

## Troubleshooting

### Toasts not appearing

1. Ensure `PM7Toaster` is added to your app root
2. Check that the theme prop is set correctly
3. Verify no z-index conflicts with other elements

### Styling issues

1. Make sure no global styles are overriding toast styles
2. Check that the peer dependency is installed
3. Verify theme prop matches your app's theme

### Performance

1. Avoid showing too many toasts simultaneously
2. Use reasonable durations to prevent memory buildup
3. Dismiss long-running toasts when no longer needed

## Browser Support

PM7Toast supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Important Notes

- **PM7Toaster Required**: Must be added to app root for toasts to appear
- **Peer Dependencies**: Requires @radix-ui/react-toast
- **Theme Consistency**: Pass correct theme prop to PM7Toaster
- **Position**: Default is bottom-right, can be customized
- **Stacking**: Multiple toasts stack vertically with proper spacing

*Built on Radix UI primitives for maximum compatibility and accessibility.*