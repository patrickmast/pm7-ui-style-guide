/**
 * PM7 UI Style Guide - TypeScript definitions
 * The official source of truth for UI, styling, and branding across all PM7 applications.
 */

// Main component exports with both PM7-prefixed and alias versions
import { PM7Menu } from './components/menu';
import { buttonRules } from './components/button';
import { inputRules } from './components/input';

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
} from './components/dialog';

// Export all component types and utilities
export * from './components/menu';
export * from './components/button';
export * from './components/input';
export * from './components/dialog';
export * from './colors';
export * from './tokens';
