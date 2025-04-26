# PM7 Dialog Component

## Overview

The PM7 Dialog component provides a flexible, accessible modal dialog system for the Winfakt UI Style Guide. It's built on top of Radix UI's Dialog primitive and styled according to Winfakt's design specifications.

## Usage

### Basic Dialog

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogClose
} from 'pm7-ui-style-guide';

function BasicDialog() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <button>Open Dialog</button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Dialog Title</PM7DialogTitle>
          <PM7DialogDescription>
            This is a description of the dialog content.
          </PM7DialogDescription>
        </PM7DialogHeader>
        <div className="py-4">
          {/* Your dialog content goes here */}
          <p>Main content of the dialog</p>
        </div>
        <PM7DialogFooter>
          <button className="secondary-button">Cancel</button>
          <button className="primary-button">Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

### Dialog with Custom Trigger

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle
} from 'pm7-ui-style-guide';

function DialogWithCustomTrigger() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <button className="custom-button">
          <span>Custom Trigger</span>
          <IconSettings />
        </button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Settings</PM7DialogTitle>
        </PM7DialogHeader>
        {/* Dialog content */}
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

## Component API

### PM7Dialog

Root component that manages the state of the dialog.

```tsx
<PM7Dialog open={boolean} onOpenChange={(open: boolean) => void}>
  {/* children */}
</PM7Dialog>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controls the open state of the dialog |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when open state changes |

### PM7DialogTrigger

The button that opens the dialog. Use `asChild` to use a custom element as the trigger.

```tsx
<PM7DialogTrigger asChild>
  <button>Open Dialog</button>
</PM7DialogTrigger>
```

### PM7DialogContent

The container for the dialog content.

```tsx
<PM7DialogContent className="optional-extra-classes">
  {/* dialog content */}
</PM7DialogContent>
```

### PM7DialogHeader

Container for the dialog title and description.

```tsx
<PM7DialogHeader>
  <PM7DialogTitle>Title</PM7DialogTitle>
  <PM7DialogDescription>Description</PM7DialogDescription>
</PM7DialogHeader>
```

### PM7DialogFooter

Container for dialog action buttons, aligned to the right.

```tsx
<PM7DialogFooter>
  <button>Cancel</button>
  <button>Submit</button>
</PM7DialogFooter>
```

### PM7DialogTitle

The title of the dialog.

```tsx
<PM7DialogTitle>Dialog Title</PM7DialogTitle>
```

### PM7DialogSubTitle / PM7DialogDescription

A description or subtitle for the dialog. `PM7DialogDescription` is kept for backward compatibility.

```tsx
<PM7DialogSubTitle>Additional information about the dialog</PM7DialogSubTitle>
```

### PM7DialogClose

A button that closes the dialog when clicked.

```tsx
<PM7DialogClose asChild>
  <button>Close</button>
</PM7DialogClose>
```

## Styling

The dialog components follow the Winfakt UI Style Guide specifications:

- Dialog overlay has a semi-transparent black background with blur effect
- Dialog content has appropriate padding (24px) and rounded corners (6px)
- Dialog has a subtle animation when opening and closing
- Close button is positioned in the top-right corner
- Footer buttons are aligned to the right on desktop and stacked on mobile
- All interactive elements show pointer cursor on hover

## Accessibility

The PM7Dialog component is built with accessibility in mind:

- Keyboard navigation: Dialog can be closed with the Escape key
- Focus management: Focus is trapped inside the dialog when open
- Screen readers: Appropriate ARIA attributes are applied
- Close button has a visible icon and screen reader text

## Best Practices

1. **Clear Titles**: Always provide a clear, concise title that describes the purpose of the dialog

2. **Descriptive Text**: Include a description when the purpose of the dialog needs additional explanation

3. **Action Buttons**: Place the primary action button on the right in the footer

4. **Responsive Design**: The dialog is responsive by default, but ensure your content adapts to different screen sizes

5. **Error Handling**: If the dialog contains a form, provide clear error messages within the dialog
