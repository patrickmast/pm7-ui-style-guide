# PM7 Dialog Component Documentation

## Overview

The PM7 Dialog Component provides a fully-styled modal dialog that follows Winfakt's design system. It includes a backdrop, proper animations, and focus management for accessibility.

## Import

```tsx
import { 
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription 
} from 'pm7-ui-style-guide';
```

## Basic Usage

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription
} from 'pm7-ui-style-guide';
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <PM7Button>Open Dialog</PM7Button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Dialog Title</PM7DialogTitle>
          <PM7DialogDescription>
            This is a description of the dialog content.
          </PM7DialogDescription>
        </PM7DialogHeader>
        <div className="py-4">
          {/* Dialog content goes here */}
          <p>Main content of the dialog</p>
        </div>
        <PM7DialogFooter>
          <PM7Button variant="outline" onClick={() => console.log('Cancel clicked')}>
            Cancel
          </PM7Button>
          <PM7Button onClick={() => console.log('Save clicked')}>
            Save
          </PM7Button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

## Component Props

### PM7Dialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Default open state when uncontrolled |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Called when open state changes |
| `modal` | `boolean` | `true` | Whether the dialog is modal (blocks interaction with the rest of the page) |

### PM7DialogContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `forceMount` | `boolean` | `false` | Force mounting when in a `Dialog.Portal` |
| `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | `undefined` | Event handler for escape key press |
| `onPointerDownOutside` | `(event: PointerDownOutsideEvent) => void` | `undefined` | Event handler for pointer down outside |
| `onInteractOutside` | `(event: React.MouseEvent | React.TouchEvent) => void` | `undefined` | Event handler for interaction outside |
| `onOpenAutoFocus` | `(event: Event) => void` | `undefined` | Event handler for auto-focusing on open |
| `onCloseAutoFocus` | `(event: Event) => void` | `undefined` | Event handler for auto-focusing on close |

## Examples

### Controlled Dialog

```tsx
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle
} from 'pm7-ui-style-guide';
import { PM7Button } from 'pm7-ui-style-guide';
import { useState } from 'react';

function ControlledDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PM7Button onClick={() => setOpen(true)}>
        Open Dialog
      </PM7Button>
      
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7DialogContent>
          <PM7DialogHeader>
            <PM7DialogTitle>Controlled Dialog</PM7DialogTitle>
          </PM7DialogHeader>
          <div className="py-4">
            <p>This dialog is controlled programmatically.</p>
          </div>
          <PM7DialogFooter>
            <PM7Button onClick={() => setOpen(false)}>
              Close
            </PM7Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </>
  );
}
```

### Dialog with Form

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle
} from 'pm7-ui-style-guide';
import { PM7Button } from 'pm7-ui-style-guide';
import { PM7Input } from 'pm7-ui-style-guide';
import { useState } from 'react';

function DialogWithForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });
    // Close dialog or handle submission
  };

  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <PM7Button>Open Form</PM7Button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>User Information</PM7DialogTitle>
        </PM7DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <PM7Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <PM7Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <PM7DialogFooter>
            <PM7Button type="submit">Submit</PM7Button>
          </PM7DialogFooter>
        </form>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

### Dialog with Custom Width

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle
} from 'pm7-ui-style-guide';
import { PM7Button } from 'pm7-ui-style-guide';

function WideDialog() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <PM7Button>Open Wide Dialog</PM7Button>
      </PM7DialogTrigger>
      <PM7DialogContent className="max-w-3xl">
        <PM7DialogHeader>
          <PM7DialogTitle>Wide Dialog</PM7DialogTitle>
        </PM7DialogHeader>
        <div className="py-4">
          <p>This dialog has a custom width using the max-w-3xl class.</p>
        </div>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

## Styling

The dialog component comes pre-styled with Winfakt's design system. The styling includes:

- Proper backdrop with overlay
- Animations for opening and closing
- Responsive sizing
- Proper spacing and padding
- Focus management for accessibility
- Close button styling

## TypeScript Support

The package includes full TypeScript definitions for all dialog components:

```tsx
import { 
  PM7DialogProps, 
  PM7DialogContentProps 
} from 'pm7-ui-style-guide';

// Define dialog props with type checking
const dialogProps: PM7DialogProps = {
  open: true,
  onOpenChange: (open) => console.log('Dialog open state:', open),
  modal: true
};

// Define dialog content props with type checking
const contentProps: PM7DialogContentProps = {
  className: 'max-w-md',
  onEscapeKeyDown: (e) => console.log('Escape key pressed'),
  onCloseAutoFocus: (e) => console.log('Dialog closed')
};
```
