# PM7Card

A flexible Card component for PM7 UI, inspired by PM7Dialog but for static content display. Supports header, footer, title, subtitle, and dark mode.

## Usage

```tsx
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from "@pm7-ui/card";

<PM7Card theme="dark">
  <PM7CardHeader theme="dark">
    <PM7CardTitle theme="dark">Card Title</PM7CardTitle>
    <PM7CardSubTitle theme="dark">Card subtitle or description</PM7CardSubTitle>
  </PM7CardHeader>
  <div>Card content goes here.</div>
  <PM7CardFooter theme="dark">
    <button>Action</button>
  </PM7CardFooter>
</PM7Card>
```

## Props

### PM7Card
- `theme?`: 'light' | 'dark' — Controls the card's color scheme. Default is 'light'.
- `className?`: string — Additional classes for the card container.
- All standard `div` props.

### PM7CardHeader, PM7CardFooter
- `theme?`: 'light' | 'dark' — Controls the header/footer color scheme. Default is 'light'.
- `className?`: string — Additional classes.
- All standard `div` props.

### PM7CardTitle
- `theme?`: 'light' | 'dark' — Controls the title color scheme. Default is 'light'.
- `className?`: string — Additional classes.
- All standard `h3` props.

### PM7CardSubTitle
- `theme?`: 'light' | 'dark' — Controls the subtitle color scheme. Default is 'light'.
- `className?`: string — Additional classes.
- All standard `p` props.

## Styling

- Card supports light and dark mode via the `theme` prop. Pass `theme="dark"` to enable dark mode, or omit for light mode.
- Theming is now controlled via the `theme` prop, not via class names.
- Use the provided CSS or extend as needed.

## License
MIT