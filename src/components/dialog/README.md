# PM7 Dialog Component

## Overview

The PM7 Dialog component provides a flexible, accessible modal dialog system for the PM7 UI Style Guide. It's built on top of Radix UI's Dialog primitive and styled according to PM7's design specifications.

## Usage

### Basic Dialog

```tsx
// For local development, use relative imports
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogClose
} from '../src/components/dialog/pm7-dialog';
// For production, use package imports
// import {
//   PM7Dialog,
//   PM7DialogTrigger,
//   PM7DialogContent,
//   PM7DialogHeader,
//   PM7DialogFooter,
//   PM7DialogTitle,
//   PM7DialogDescription,
//   PM7DialogClose
// } from 'pm7-ui-style-guide';

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
// For local development, use relative imports
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle
} from '../src/components/dialog/pm7-dialog';
// For production, use package imports
// import {
//   PM7Dialog,
//   PM7DialogTrigger,
//   PM7DialogContent,
//   PM7DialogHeader,
//   PM7DialogTitle
// } from 'pm7-ui-style-guide';

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

{/* Or using the backward-compatible name */}
<PM7DialogDescription>Additional information about the dialog</PM7DialogDescription>
```

**Note:** The `PM7DialogSubTitle` component was introduced to provide better semantic meaning for the dialog's secondary text. The `PM7DialogDescription` component is maintained for backward compatibility and is functionally identical to `PM7DialogSubTitle`.

### PM7DialogClose

A button that closes the dialog when clicked.

```tsx
<PM7DialogClose asChild>
  <button>Close</button>
</PM7DialogClose>
```

## Styling

The dialog components follow the PM7 UI Style Guide specifications:

- **Dialog Overlay**:
  - Semi-transparent black background (`bg-black/50`) with blur effect (`backdrop-blur-sm`)
  - Uses pointer cursor to indicate it's clickable to close the dialog
  - Animated fade-in and fade-out transitions when opening and closing

- **Dialog Content**:
  - Padding: 24px (p-6)
  - Rounded corners: 6px on medium screens and larger (sm:rounded-lg)
  - Fixed positioning in the center of the viewport
  - Animated entrance/exit with zoom and slide effects
  - Default cursor to indicate non-clickable area

- **Dark Mode Support**:
  - Background color: `#262626` in dark mode, `white` in light mode
  - Border color: `#525252` in dark mode, `#e2e8f0` in light mode

- **Close Button**:
  - Positioned in the top-right corner (right-4 top-4)
  - Partially transparent (opacity-70) with increased opacity on hover (hover:opacity-100)
  - Uses the PM7Button component with transparent background
  - Includes an SVG X icon and screen-reader text for accessibility

- **Footer**:
  - Mobile: Column layout with reverse order (buttons stacked with primary action on top)
  - Desktop: Row layout with buttons aligned to the right (sm:flex-row sm:justify-end)
  - Space between buttons on desktop (sm:space-x-2)

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
