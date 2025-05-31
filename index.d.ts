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

// Export all component types and utilities
export * from './src/components/menu';
export * from './src/components/button';
export * from './src/components/input';
export * from './src/components/dialog';
export * from './src/components/card';
export * from './colors';
export * from './tokens';
