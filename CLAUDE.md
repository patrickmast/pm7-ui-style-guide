# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the PM7 UI Style Guide - a React component library that provides PM7-branded components and design tokens for consistent styling across all PM7 applications. The library is built on top of Radix UI primitives with Tailwind CSS and provides PM7-specific styling rules and overrides for ShadCN/UI components.

**Purpose**: This library serves as the single source of truth for UI consistency across all PM7 applications, ensuring consistent branding without requiring individual applications to customize ShadCN/UI components themselves.

## Key Architectural Decisions

### Why This Library Exists
- Applications should **NOT** install ShadCN/UI components directly
- Instead, they import pre-styled components from this library
- This ensures 100% consistency across all PM7 applications
- Updates to PM7 branding can be rolled out centrally

### Build Strategy
- **Dual Vite Configuration**: Single `vite.config.js` handles both library builds and examples dev server
- **Library Mode**: When building (`npm run build`), Vite builds the library for distribution
- **Dev Mode**: When running (`npm run dev`), Vite serves the examples app for development
- **Examples Build**: Separate config (`vite.config.examples.js`) for deploying examples to Vercel

### Component Philosophy
- Components are thin wrappers around Radix UI primitives
- PM7 styling is applied through:
  - CSS classes using Tailwind utilities
  - CSS custom properties for theming
  - Component-specific CSS files when needed
- Components export both functionality and styling together

## Project Architecture

The project follows a layered architecture:

1. **Base Layer**: Tailwind CSS - Utility-first CSS framework
2. **Component Layer**: Radix UI / ShadCN/UI - Unstyled, accessible components  
3. **Branding Layer**: PM7 UI Style Guide - PM7-specific styling rules and overrides

### Key Technologies
- **React 18** with TypeScript
- **Vite** for build tooling (dual config for library and examples)
- **Tailwind CSS** for styling
- **Radix UI** for accessible component primitives
- **ESLint** for code quality

### Directory Structure
```
src/
  components/           # Component implementations
    button/            # Each component has its own directory
      index.ts         # Exports
      pm7-button.tsx   # Implementation
      README.md        # Component docs
    card/
    dialog/
    input/
    menu/
    tab-selector/
    theme-toggle/
  css/
    variables.css      # CSS custom properties
  colors.ts           # PM7 brand colors
  tokens.ts           # Design tokens
  index.ts            # Main library exports

examples/             # Example/demo app
  *.tsx              # Component examples
  main.tsx           # Examples app entry point
```

## Common Development Commands

### Library Development
```bash
npm install                    # Install dependencies
npm run dev                   # Start examples app (serves from /examples on port 5173)
npm run build                 # Build the library for distribution to dist/
npm run build:examples       # Build examples app for Vercel deployment
npm run lint                  # Run ESLint with TypeScript checking
npm run preview              # Preview built examples app
```

### Testing Changes Locally
```bash
# To test the library in another project locally:
npm link                      # In this repository
npm link pm7-ui-style-guide  # In the consuming project
```

### Key Development Patterns

1. **Dual Vite Configuration**: 
   - `vite.config.js` - Library build (production) and examples dev server
   - `vite.config.examples.js` - Examples app build for deployment

2. **Component Architecture**:
   - Each component has its own directory with implementation, exports, and docs
   - Components export both PM7-prefixed versions and clean aliases
   - CSS files are co-located with components when needed

3. **Export Strategy**:
   - Main exports in `src/index.ts` provide both clean names and PM7-prefixed versions
   - Example: `export { PM7Menu as Menu }` allows both `import { Menu }` and `import { PM7Menu }`

## PM7 Brand Guidelines & Styling Rules

### Colors
- **Primary Brand Color**: #1C86EF (bright blue)
- **Border Color**: #D4D4D4 (light mode), #525252 (dark mode)
- **Menu Hover Color**: #1C86EF

### Component Styling Standards

#### Menu/Dropdown Components
- Background: White (#FFFFFF) light mode, Dark (#23272F) dark mode
- Border: 1px solid, rounded corners (6px)
- Hover states: White text/icons on #1C86EF background
- Padding: 16px horizontal, 8px vertical (desktop), 12px vertical (mobile)
- Min-width: 12rem desktop, 16rem mobile; Max-width: 18.8rem

#### Form Elements
- **Input Fields**: Always show border, focus border = primary color, no focus ring
- **Buttons**: Always use pointer cursor on hover

#### General Rules
- All interactive elements use pointer cursor on hover
- Use design tokens rather than hardcoded values
- Components built on shadcn/ui primitives for consistency

## Development Workflow

### Component Development
1. Create component directory in `src/components/`
2. Implement component with PM7 styling rules
3. Create exports in `index.ts` file
4. Add component to main `src/index.ts` exports
5. Create example in `examples/` directory
6. Update examples app routing in `examples/App.tsx`

### Testing Components
1. Use `npm run dev` to start examples app
2. Navigate to component examples to test functionality
3. Test both light and dark modes
4. Verify responsive behavior

### Building and Publishing
1. Run `npm run lint` to ensure code quality
2. Run `npm run build` to build library
3. Test locally by linking: `npm link` in this repo, `npm link pm7-ui-style-guide` in test project
4. Update version with `npm version patch|minor|major`
5. Publish with `npm publish --access public`

## Important Implementation Notes

### Peer Dependencies
The library requires these peer dependencies to be installed by consuming applications:
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu` 
- `lucide-react`
- `react` and `react-dom`

### CSS Integration
- Main CSS variables in `src/css/variables.css`
- Component-specific CSS files (e.g., `pm7-menu.css`, `pm7-dialog.css`, `pm7-card.css`, `pm7-tab-selector.css`, `pm7-theme-toggle.css`)
- Global styles in `src/globals.css`
- Consuming apps must import component CSS files as needed

### TypeScript Configuration
- Targets ES2017 with CommonJS modules
- Declaration files generated for library consumers
- Includes both `src/` and `examples/` directories

### Build Configuration
- Library builds to `dist/` with UMD and ES module formats
- Examples app builds separately for Vercel deployment
- External dependencies (React, React DOM) not bundled
- Package.json `files` field includes:
  - `dist/` - Built library files
  - Component-specific CSS files (`pm7-menu.css`, `pm7-dialog.css`, `pm7-card.css`, `pm7-tab-selector.css`, `pm7-theme-toggle.css`)
  - `src/css/variables.css` and `src/globals.css` - Global styles
  - `index.d.ts`, `colors.d.ts`, `tokens.d.ts` - TypeScript definitions

## Component Usage Patterns

### Menu Component
The Menu component is the flagship component with two usage patterns:

1. **All-in-one Menu** (recommended for most cases):
```tsx
import { Menu } from 'pm7-ui-style-guide';

const menuItems = [
  { id: 'item1', label: 'Item 1', onClick: () => {} },
  { id: 'sep1', type: 'separator' },
  { id: 'item2', label: 'Item 2', onClick: () => {} }
];

<Menu 
  menuItems={menuItems}
  menuAlignment="start"
  menuTriggerIconColorLight="#1C86EF"
  menuTriggerIconColorDark="#FFDD00"
/>
```

2. **Primitive Components** (for custom implementations):
```tsx
import { PM7Menu, PM7MenuTrigger, PM7MenuContent, PM7MenuItem } from 'pm7-ui-style-guide';
```

### Design Tokens Usage
```tsx
import { colors, tokens } from 'pm7-ui-style-guide';
// Use colors.primary instead of hardcoding #1C86EF
```

## Deployment and Distribution

- **Library**: Published to npm as `pm7-ui-style-guide`
- **Examples App**: Deployed to Vercel for live demonstrations
- **Repository**: GitHub at `patrickmast/pm7-ui-style-guide`

The examples app serves as both development environment and public documentation, demonstrating proper usage of all components with PM7 branding applied.

## Release Process

1. Ensure all changes are committed and pushed to GitHub
2. Run `npm run lint` to ensure code quality
3. Run `npm run build` to verify the library builds correctly
4. Update version: `npm version patch|minor|major`
5. Publish to npm: `npm publish --access public`
6. Push the version tag to GitHub: `git push --tags`

## Common Patterns for Component Development

### Adding a New Component
1. Create directory: `src/components/[component-name]/`
2. Add files:
   - `index.ts` or `index.tsx` - Re-exports
   - `pm7-[name].tsx` - Implementation
   - `pm7-[name].css` - Styles (if needed)
   - `README.md` - Component documentation
3. Export from `src/index.ts` with both PM7-prefixed and clean names
4. Update `package.json` `files` array to include CSS file if created
5. Create example in `examples/example-[name].tsx`
6. Add route in `examples/App.tsx`

### Component Export Pattern
```typescript
// In component's index.ts
export { PM7ComponentName } from './pm7-component-name';

// In src/index.ts
export { PM7ComponentName, PM7ComponentName as ComponentName } from './components/component-name';
```

This allows consumers to use either:
- `import { ComponentName } from 'pm7-ui-style-guide'`
- `import { PM7ComponentName } from 'pm7-ui-style-guide'`

## Deployment Workflow

When I say "Deploy npm", do these tasks:
1. Bumped the version of our npm package in package.json
2. Built the npm package with `npm run build`
3. Published the package to npm with `npm publish`