# PM7Dialog Component - Complete Integration Guide

**PM7Dialog** is a React dialog component based on Radix UI that provides PM7-branded styling for creating modal dialogs. It offers consistent styling, accessibility features, and automatic overlay management with configurable width options.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/dialog/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/dialog/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Dialog (React dialog component based on Radix UI)  
**CSS File**: pm7-dialog.css (required)  
**Peer Dependencies**: @radix-ui/react-dialog

## Installation

```bash
npm install pm7-ui-style-guide

# Required peer dependencies:
npm install @radix-ui/react-dialog
```

## Import

```typescript
import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogSeparator,
  PM7DialogIcon
} from 'pm7-ui-style-guide';

// CRITICAL: Import CSS for proper styling
import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';
```

## Basic Usage

```tsx
import React, { useState } from 'react';
import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Dialog
      </button>
      
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7DialogContent>
          <PM7DialogHeader>
            <PM7DialogTitle>Dialog Title</PM7DialogTitle>
            <PM7DialogDescription>
              Dialog description text here.
            </PM7DialogDescription>
          </PM7DialogHeader>
          
          <div>
            <p>Your dialog content goes here.</p>
          </div>
          
          <PM7DialogFooter>
            <button onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button onClick={() => setOpen(false)}>
              Confirm
            </button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </>
  );
}
```

## Dialog with Custom Width

```tsx
<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent maxWidth="max-w-2xl">
    <PM7DialogHeader>
      <PM7DialogTitle>Wide Dialog</PM7DialogTitle>
    </PM7DialogHeader>
    <div>Content for wider dialog...</div>
  </PM7DialogContent>
</PM7Dialog>
```

## Dialog with Close Button

```tsx
<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent showCloseButton={true}>
    <PM7DialogHeader>
      <PM7DialogTitle>Dialog with Close Button</PM7DialogTitle>
      <PM7DialogDescription>
        Click the X button in the top right to close this dialog.
      </PM7DialogDescription>
    </PM7DialogHeader>
    <div>Dialog content here...</div>
  </PM7DialogContent>
</PM7Dialog>
```

## Dialog with Separator

```tsx
<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent>
    <PM7DialogHeader>
      <PM7DialogTitle>Settings</PM7DialogTitle>
      <PM7DialogDescription>
        Configure your preferences below.
      </PM7DialogDescription>
    </PM7DialogHeader>
    
    <div>
      <p>General settings content...</p>
    </div>
    
    <PM7DialogSeparator marginTop="1rem" marginBottom="1rem" />
    
    <div>
      <p>Advanced settings content...</p>
    </div>
    
    <PM7DialogFooter>
      <button onClick={() => setOpen(false)}>Cancel</button>
      <button onClick={() => setOpen(false)}>Save</button>
    </PM7DialogFooter>
  </PM7DialogContent>
</PM7Dialog>
```

## Dialog with Icon

```tsx
import { Info } from 'lucide-react';

<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent>
    <PM7DialogIcon>
      <Info size={24} className="text-blue-500" />
    </PM7DialogIcon>
    <PM7DialogHeader>
      <PM7DialogTitle>Information</PM7DialogTitle>
      <PM7DialogDescription>
        This dialog displays an icon in the top-right corner.
      </PM7DialogDescription>
    </PM7DialogHeader>
    <div>
      <p>The icon is positioned absolutely in the top-right corner of the dialog.</p>
    </div>
    <PM7DialogFooter>
      <button onClick={() => setOpen(false)}>Got it</button>
    </PM7DialogFooter>
  </PM7DialogContent>
</PM7Dialog>
```

## Form Dialog Pattern

```tsx
const FormDialog = ({ open, onOpenChange, onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSave = () => {
    onSave(formData);
    onOpenChange(false);
  };

  return (
    <PM7Dialog open={open} onOpenChange={onOpenChange}>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Add User</PM7DialogTitle>
          <PM7DialogDescription>
            Fill out the form below to add a new user.
          </PM7DialogDescription>
        </PM7DialogHeader>
        
        <div style={{ padding: '1rem 0' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        
        <PM7DialogFooter>
          <button onClick={() => onOpenChange(false)}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
};
```

## API Reference

### PM7Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controls dialog visibility |
| `onOpenChange` | `(open: boolean) => void` | - | Called when dialog open state changes |
| `defaultOpen` | `boolean` | - | Initial open state (uncontrolled) |
| `modal` | `boolean` | `true` | Whether dialog is modal |

### PM7DialogContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxWidth` | `string` | `'max-w-lg'` | Maximum width CSS class |
| `showCloseButton` | `boolean` | `false` | Shows a close button in the top right corner of the dialog when set to true |
| `className` | `string` | - | Additional CSS classes |

### PM7DialogHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showHeaderBorder` | `boolean` | `true` | Shows a bottom border on the dialog header when set to true |
| `className` | `string` | - | Additional CSS classes |

### PM7DialogTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

*Note: Title uses 28px font size for prominent visual hierarchy*

### PM7DialogDescription Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

*Note: PM7DialogSubTitle is available as an alias for PM7DialogDescription. Both use 15px font size.*

### PM7DialogFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

### PM7DialogSeparator Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `marginTop` | `string` | `'0px'` | Top margin |
| `marginBottom` | `string` | `'0px'` | Bottom margin |
| `className` | `string` | - | Additional CSS classes |

### PM7DialogIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Icon content to display |

*Note: PM7DialogIcon is positioned absolutely in the top-right corner of the dialog content area (40x40px container). When present, the close button automatically adjusts its position.*

## Available Utility Components

For advanced implementations, the following utility components are also available:

- `PM7DialogPortal` - Portal component for custom rendering
- `PM7DialogOverlay` - Standalone overlay component
- `PM7DialogTrigger` - Trigger button component
- `PM7DialogClose` - Close button component

## Features

- **Optional Close Button**: Control close button visibility with showCloseButton prop (auto-adjusts position when icon is present)
- **Built-in Overlay**: Backdrop is automatically included and managed
- **Theme Awareness**: Adapts styling based on dark/light theme classes
- **Configurable Width**: Use maxWidth prop with Tailwind CSS classes
- **Accessibility**: Full keyboard navigation and screen reader support
- **Animation**: Smooth open/close animations included
- **Optimized Spacing**: Professional layout with carefully designed spacing
- **Large Dialog Titles**: Prominent title typography (28px) for better hierarchy
- **Icon Support**: Display icons in the top-right corner with PM7DialogIcon
- **Flexible Header**: Optional bottom border on header with showHeaderBorder prop
- **Enhanced Close Button**: Hover background effect for better user feedback

## Default Styling

### Built-in Layout
PM7Dialog components come with optimized default styling:

- **PM7DialogContent**: Top padding of 26px for proper visual balance
- **PM7DialogHeader**: No internal padding, optional bottom border (controlled by showHeaderBorder prop)
- **PM7DialogTitle**: Large, prominent text (28px) with semibold font weight
- **PM7DialogDescription/PM7DialogSubTitle**: Subtle subtitle text (15px) for supporting information
- **PM7DialogFooter**: Top border for visual separation from content
- **PM7DialogIcon**: 40x40px container positioned in top-right corner
- **Close Button**: Auto-adjusts position when icon is present, includes hover background effect
- **Layout**: Designed for professional, visually balanced dialogs

### Customizing Spacing
While default spacing is optimized, you can override with additional classes:

```tsx
<PM7DialogHeader className="p-6">
  <PM7DialogTitle>Custom Spaced Title</PM7DialogTitle>
</PM7DialogHeader>
```

## PM7 Brand Guidelines

### Design Principles
- Clean, minimal dialog design with balanced spacing
- Consistent typography hierarchy (28px titles, 15px descriptions)
- Accessible keyboard navigation
- PM7 brand color integration
- Professional appearance with refined visual details
- Hover effects on interactive elements (close button)
- Optional visual separators (header border, footer border)

## Important Notes

- **CSS Import Required**: Must import pm7-dialog.css for proper styling
- **Peer Dependencies**: Requires @radix-ui/react-dialog
- **Automatic Overlay**: PM7DialogContent includes overlay automatically
- **Close Button**: Optional X button available via showCloseButton prop (auto-adjusts position when icon present)
- **Theme Classes**: Add 'dark' class to className for dark mode styling
- **Typography**: Title (28px) and Description (15px) have fixed font sizes for consistency
- **Spacing**: Content has 26px top padding, no gap between grid items
- **Borders**: Header border optional via showHeaderBorder, footer has top border

## Browser Support

PM7Dialog supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*Built on Radix UI primitives for maximum compatibility and accessibility.*