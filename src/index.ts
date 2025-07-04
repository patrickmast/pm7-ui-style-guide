// Enhancement: Updated exports to allow selective importing of components and renamed PM7MenuComponent to PM7Menu for consistency

// Import main CSS bundle to ensure all styles are included
import './style.css';

// Core UI components
export { PM7Menu as Menu } from './components/menu';
export * from './components/dialog';
export * from './components/card';
export * from './components/tab-selector';

// Form components
export * from './components/input';
export * from './components/button';

// Design tokens
export * from './colors';
export * from './tokens';

// Primitive UI components
export {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuLabel,
  PM7MenuSeparator,
  PM7MenuPortal
} from './components/menu';

// Re-export card components with clean aliases
export { PM7Card as Card } from './components/card';
export { PM7CardHeader as CardHeader } from './components/card';
export { PM7CardFooter as CardFooter } from './components/card';
export { PM7CardTitle as CardTitle } from './components/card';
export { PM7CardSubTitle as CardSubTitle } from './components/card';

// Re-export tab selector with clean alias
export { PM7TabSelector as TabSelector } from './components/tab-selector';

// Theme toggle component
export * from './components/theme-toggle';
export { PM7ThemeToggle as ThemeToggle } from './components/theme-toggle';

// Toast components
export * from './components/toast';
export { PM7Toaster as Toaster } from './components/toast';
