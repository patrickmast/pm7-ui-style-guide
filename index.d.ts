/**
 * PM7 UI Style Guide - TypeScript definitions
 * The official source of truth for UI, styling, and branding across all Winfakt applications.
 */

// Main component exports with both PM7-prefixed and alias versions
export { PM7MenuComponent, PM7MenuComponent as Menu } from './components/menu';
export { PM7Button, PM7Button as Button } from './components/button';
export { PM7Input, PM7Input as Input } from './components/input';
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
