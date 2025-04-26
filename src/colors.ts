// Brand and semantic color tokens for pm7-ui-style-guide
// Enhancement: Modified colors.ts to export CSS variable references instead of hardcoded values
// This ensures consistency between JS/TS code and CSS styles

export const colors = {
  // Reference CSS variables from globals.css
  primary: 'var(--primary)',
  border: 'var(--border)',
  inputBg: 'var(--input)',
  foreground: 'var(--foreground)',
  // Add more semantic tokens as needed
};
