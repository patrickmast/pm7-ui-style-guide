# PM7 Dialog Component

## Overview

The PM7 Dialog component provides a flexible, accessible modal dialog system built on Radix UI primitives with PM7 styling. It includes automatic light/dark theme support, responsive design, and accessibility features.

## Installation

```bash
npm install pm7-ui-style-guide
```

## Required Dependencies

The Dialog component depends on Radix UI Dialog primitives. Install the peer dependency:

```bash
npm install @radix-ui/react-dialog
```

## Usage

### Basic Setup

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogSubTitle,
  PM7DialogFooter
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css'; // Required CSS

function BasicDialog() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <button>Open Dialog</button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Dialog Title</PM7DialogTitle>
          <PM7DialogSubTitle>
            This is a description of the dialog content.
          </PM7DialogSubTitle>
        </PM7DialogHeader>
        <div style={{ padding: '1rem 0' }}>
          <p>Main content of the dialog</p>
        </div>
        <PM7DialogFooter>
          <button>Cancel</button>
          <button>Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

### Dark Theme Dialog

```tsx
function DarkDialog() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <button>Open Dark Dialog</button>
      </PM7DialogTrigger>
      <PM7DialogContent className="dark">
        <PM7DialogHeader>
          <PM7DialogTitle>Dark Theme Dialog</PM7DialogTitle>
          <PM7DialogSubTitle>
            This dialog uses dark theme styling.
          </PM7DialogSubTitle>
        </PM7DialogHeader>
        <div style={{ padding: '1rem 0' }}>
          <p>Content in dark mode with proper contrast.</p>
        </div>
        <PM7DialogFooter>
          <button>Cancel</button>
          <button>Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

### Controlled Dialog

```tsx
function ControlledDialog() {
  const [open, setOpen] = useState(false);

  return (
    <PM7Dialog open={open} onOpenChange={setOpen}>
      <PM7DialogTrigger asChild>
        <button>Open Controlled Dialog</button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Controlled Dialog</PM7DialogTitle>
        </PM7DialogHeader>
        <div style={{ padding: '1rem 0' }}>
          <p>This dialog's state is controlled externally.</p>
        </div>
        <PM7DialogFooter>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={() => setOpen(false)}>Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

### Dialog with Separator

```tsx
import { PM7DialogSeparator } from 'pm7-ui-style-guide';

function DialogWithSeparator() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <button>Open Dialog</button>
      </PM7DialogTrigger>
      <PM7DialogContent className="dark">
        <PM7DialogHeader>
          <PM7DialogTitle>Settings</PM7DialogTitle>
          <PM7DialogSubTitle>Configure your preferences</PM7DialogSubTitle>
        </PM7DialogHeader>
        
        <PM7DialogSeparator 
          className="dark" 
          marginTop="16px" 
          marginBottom="16px" 
        />
        
        <div>
          <p>Settings content here</p>
        </div>
        
        <PM7DialogSeparator 
          className="dark" 
          marginTop="16px" 
          marginBottom="16px" 
        />
        
        <PM7DialogFooter>
          <button>Cancel</button>
          <button>Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

## API Reference

### PM7Dialog

Root component that manages dialog state. Extends all Radix UI Dialog.Root props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controls the open state |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when state changes |
| `defaultOpen` | `boolean` | `false` | Default open state for uncontrolled usage |
| `modal` | `boolean` | `true` | Whether dialog is modal |

### PM7DialogTrigger

Button that opens the dialog. Extends all Radix UI Dialog.Trigger props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Render as child element instead of button |

### PM7DialogContent

Main dialog container. Extends all Radix UI Dialog.Content props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes (use 'dark' for dark theme) |
| `children` | `React.ReactNode` | - | Dialog content |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>` | - | All Radix UI Dialog.Content props |

**Dark Theme**: Add `className="dark"` to enable dark theme styling.

### PM7DialogHeader

Container for title and subtitle with proper spacing.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Header content |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

### PM7DialogTitle

Dialog title using Radix UI Dialog.Title for accessibility. Extends all Radix UI Dialog.Title props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Title content |

### PM7DialogSubTitle / PM7DialogDescription

Dialog subtitle/description using Radix UI Dialog.Description. Both names refer to the same component.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Description content |

**Note**: `PM7DialogDescription` is maintained for backward compatibility.

### PM7DialogFooter

Container for action buttons with responsive layout.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Footer content (typically buttons) |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

### PM7DialogSeparator

Visual separator with theme support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes (use 'dark' for dark theme) |
| `marginTop` | `string` | `'0px'` | Top margin spacing |
| `marginBottom` | `string` | `'0px'` | Bottom margin spacing |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

### PM7DialogClose

Button that closes the dialog. Extends all Radix UI Dialog.Close props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `asChild` | `boolean` | `false` | Render as child element instead of button |

### Additional Components

The following Radix UI primitives are also exported for advanced usage:

- `PM7DialogPortal` - Portal container
- `PM7DialogOverlay` - Background overlay

## Visual Appearance

### Light Theme (default)
- Background: White
- Border: 1px solid #e2e8f0
- Close button: #333333
- Overlay: Semi-transparent black with blur

### Dark Theme (className="dark")
- Background: #262626 (dark gray)
- Border: 1px solid #525252
- Close button: White
- Overlay: Semi-transparent black with blur

### Layout Features
- **Responsive**: Mobile-first design with desktop optimizations
- **Centered**: Fixed position at viewport center
- **Animated**: Smooth fade and zoom transitions
- **Auto-close**: Built-in close button in top-right corner

## Theme Management

Enable dark theme by adding `className="dark"` to `PM7DialogContent`:

```tsx
// Light theme (default)
<PM7DialogContent>

// Dark theme
<PM7DialogContent className="dark">

// Dark theme with additional classes
<PM7DialogContent className="dark my-custom-class">
```

For separators in dark theme:
```tsx
<PM7DialogSeparator className="dark" />
```

## CSS Requirements

Import the required CSS file:

```tsx
import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';
```

This provides:
- Animation keyframes
- Responsive layout styles
- Typography styles
- Theme-specific styling

## Accessibility Features

- **Keyboard Navigation**: Escape key closes dialog
- **Focus Management**: Focus trapped within dialog when open
- **Screen Readers**: Proper ARIA attributes and roles
- **Close Button**: Visible icon with screen reader text
- **Backdrop**: Clickable overlay to close dialog

## Best Practices

1. **Always include title**: Use PM7DialogTitle for accessibility
2. **Responsive content**: Ensure content works on all screen sizes
3. **Clear actions**: Place primary action on the right
4. **Theme consistency**: Use same theme throughout dialog
5. **Escape routes**: Always provide a way to close the dialog
6. **Content structure**: Use header/footer for organized layout

## Integration Notes

- Works seamlessly with PM7Button components
- Compatible with PM7 theme system
- Follows PM7 design system guidelines
- Built on proven Radix UI accessibility patterns