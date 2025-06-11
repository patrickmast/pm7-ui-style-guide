/**
 * PM7 UI Style Guide - TypeScript definitions
 * The official source of truth for UI, styling, and branding across all PM7 applications.
 */

// Main component exports with both PM7-prefixed and alias versions
import { PM7Menu } from './src/components/menu';
import { buttonRules } from './src/components/button';
import { inputRules } from './src/components/input';

export { PM7Menu, PM7Menu as Menu };
export { buttonRules };
export { inputRules };
export { 
  PM7Dialog, PM7Dialog as Dialog,
  PM7DialogPortal, 
  PM7DialogOverlay, 
  PM7DialogClose, 
  PM7DialogTrigger, 
  PM7DialogContent, 
  PM7DialogHeader, 
  PM7DialogFooter, 
  PM7DialogTitle, 
  PM7DialogSubTitle, 
  PM7DialogDescription 
} from './src/components/dialog';

export {
  PM7Card, PM7Card as Card,
  PM7CardHeader, PM7CardHeader as CardHeader,
  PM7CardFooter, PM7CardFooter as CardFooter,
  PM7CardTitle, PM7CardTitle as CardTitle,
  PM7CardSubTitle, PM7CardSubTitle as CardSubTitle
} from './src/components/card';

export {
  PM7TabSelector, PM7TabSelector as TabSelector
} from './src/components/tab-selector';

// Export all component types and utilities
export * from './src/components/menu';
export * from './src/components/button';
export * from './src/components/input';
export * from './src/components/dialog';
export * from './src/components/card';
export * from './colors';
export * from './tokens';
