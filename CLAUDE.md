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

### Key Technologies & Tools
- **React 18** with TypeScript (hooks-based components)
- **Vite 5** for build tooling (dual config system for library and examples)
- **Tailwind CSS 3** for utility-first styling framework
- **Radix UI** for accessible, unstyled component primitives
- **Lucide React** for consistent icon system
- **ESLint** with TypeScript checking for code quality
- **Playwright/Puppeteer** for static documentation pre-rendering
- **PostCSS & Autoprefixer** for CSS processing

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
npm run build:static         # Build static HTML documentation files
npm run lint                  # Run ESLint with TypeScript checking
npm run preview              # Preview built examples app
npm run prerender            # Generate pre-rendered static documentation
```

### Testing Changes Locally
```bash
# To test the library in another project locally:
npm link                      # In this repository
npm link pm7-ui-style-guide  # In the consuming project
```

### Development Workflow Commands
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Watch for file changes while developing
npm run dev  # Auto-reloads on changes

# Test library build before publishing
npm run build && npm pack

# Clean build artifacts
rm -rf dist/ examples/dist/
```

### Key Development Patterns

1. **Dual Vite Configuration System**: 
   - `vite.config.js` - Conditional config: library build (production) vs examples dev server (development)
   - `vite.config.examples.js` - Dedicated config for examples app deployment to Vercel
   - **Critical**: `npm run dev` serves examples app from `examples/` directory, NOT the root

2. **Component Architecture Pattern**:
   - Each component has its own directory with implementation, exports, and docs
   - Components export both PM7-prefixed versions and clean aliases
   - CSS files are co-located with components when needed
   - **Pattern**: `pm7-[component].tsx` for implementation, `index.ts/tsx` for exports

3. **Export Strategy (Dual Export Pattern)**:
   - Main exports in `src/index.ts` provide both clean names and PM7-prefixed versions
   - Example: `export { PM7Menu as Menu }` allows both `import { Menu }` and `import { PM7Menu }`
   - **Important**: This allows consuming applications flexibility in naming

4. **CSS Architecture Pattern**:
   - Component-specific CSS files (e.g., `pm7-menu.css`, `pm7-dialog.css`) 
   - Global CSS variables in `src/css/variables.css`
   - Main bundle CSS in `src/style.css`
   - **Critical**: Consuming apps must import component CSS files separately

5. **Radix UI Wrapper Pattern**:
   - All components are wrappers around Radix UI primitives
   - PM7 styling applied via CSS classes and inline styles
   - Maintains accessibility while providing PM7 branding
   - **Example**: `PM7Menu` wraps `@radix-ui/react-dropdown-menu`

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
1. Create component directory in `src/components/[component-name]/`
2. Implement component in `pm7-[name].tsx` with PM7 styling rules
3. Create exports in `index.ts` or `index.tsx` file
4. Add component to main `src/index.ts` exports (both PM7-prefixed and clean alias)
5. Create CSS file if needed: `pm7-[name].css`
6. Update `package.json` `files` array if CSS file created
7. Create example files in `examples/` directory following naming pattern
8. Update examples app routing in `examples/App.tsx`

### Testing Components
1. Use `npm run dev` to start examples app (serves from `examples/` directory on port 5173)
2. Navigate to component examples to test functionality  
3. Test both light and dark modes using theme toggle
4. Verify responsive behavior on different screen sizes
5. Test with different props and configurations

### Building and Publishing
1. Run `npm run lint` to ensure code quality and TypeScript checking
2. Run `npm run build` to build library (outputs to `dist/`)
3. Test locally by linking: `npm link` in this repo, `npm link pm7-ui-style-guide` in test project
4. Update version with `npm version patch|minor|major`
5. Publish with `npm publish --access public`

### Debugging Common Issues

**Vite Config Issues:**
- If examples app doesn't start: Check that `vite.config.js` serves examples in dev mode
- If library doesn't build: Verify externals in `rollupOptions` are correct
- If CSS not loading: Ensure CSS imports are in correct locations

**Component Export Issues:**
- If imports fail: Check both PM7-prefixed and clean aliases are exported from `src/index.ts`
- If TypeScript errors: Verify component export patterns match the dual export strategy

**CSS Styling Issues:**  
- If styles not applying: Verify component CSS file is imported and listed in `package.json` files
- If theming broken: Check CSS variables are defined in `src/css/variables.css`
- If Radix components not styled: Ensure wrapper pattern is correctly applied

## CRITICAL DOCUMENTATION REQUIREMENT

**MEMORY: Documentation Synchronization Rule**

When modifying ANY component prop, interface, or functionality:

1. **ALWAYS update THREE locations simultaneously:**
   - Component implementation (`src/components/[name]/pm7-[name].tsx`)
   - Component README (`src/components/[name]/README.md`)
   - Usage page (`examples/example-[name]-usage.tsx`)

2. **ALL props MUST be documented in Usage pages:**
   - Every prop in the component interface MUST appear in the usage page
   - Include type, default value, and clear description
   - Provide examples showing how to use each prop
   - Update the props table with ALL available props

3. **Documentation must be complete and consistent:**
   - Props table in usage page must match component interface exactly
   - README examples must reflect current component API
   - No prop should exist in code without documentation
   - No documentation should exist for non-existent props

4. **Verification checklist:**
   - [ ] Component interface updated
   - [ ] README.md updated with new props/examples
   - [ ] Usage page props table updated
   - [ ] Usage page examples show new functionality
   - [ ] All three sources have consistent information

**This rule applies to ALL components: Button, Card, Dialog, Input, Menu, TabSelector, ThemeToggle, and any future components.**

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

## Component Documentation

### Documentation Structure
The PM7 UI Style Guide uses a "single source of truth" approach for component documentation:

1. **Source Documentation**: `/static/*-doc.html` files
   - These are the editable HTML documentation files
   - Example: `/static/dialog-doc.html` for the Dialog component
   - All component docs follow the pattern: `/static/[component-name]-doc.html`

2. **Build Output**: `/examples/dist/*/docs.html` (auto-generated, do not edit)
   - Generated during build process
   - Should not be edited directly

3. **Online Documentation**: `https://pm7.tools/[component]/docs.html`
   - Deployed from the build output
   - Public-facing documentation

### Editing Documentation
To update component documentation:
1. Edit the appropriate file in `/static/[component-name]-doc.html`
2. Build and deploy to see changes online
3. Never edit files in `/examples/dist/` - these are auto-generated

### Available Documentation Files
- `/static/button-doc.html` - Button component
- `/static/card-doc.html` - Card component
- `/static/dialog-doc.html` - Dialog component (includes CSS import requirements)
- `/static/input-doc.html` - Input component
- `/static/menu-doc.html` - Menu component (includes CSS import requirements)
- `/static/tab-selector-doc.html` - Tab Selector component (includes CSS import requirements)
- `/static/theme-toggle-doc.html` - Theme Toggle component (includes CSS import requirements)

### Important CSS Import Requirements
Components that require CSS imports for proper styling:
- Dialog: `import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css'`
- Menu: `import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css'`
- Card: `import 'pm7-ui-style-guide/src/components/card/pm7-card.css'`
- Tab Selector: `import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css'`
- Theme Toggle: `import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css'`

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
  menuTriggerIconColor="#1C86EF"
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