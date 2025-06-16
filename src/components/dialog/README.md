# PM7Dialog Component - Complete Integration Guide

**PM7Dialog** is a React dialog component based on Radix UI that provides PM7-branded styling for creating modal dialogs. It offers consistent styling, accessibility features, and proper overlay management.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/dialog/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/dialog/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/dialog/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Dialog (React dialog component based on Radix UI)  
**CSS File**: pm7-dialog.css (required)  
**Peer Dependencies**: @radix-ui/react-dialog, lucide-react

## ⚠️ IMPORTANT: Do NOT use PM7DialogOverlay separately!

**PM7DialogContent automatically includes its own overlay. Adding PM7DialogOverlay separately will create duplicate overlays!**

- ❌ **WRONG**: Using both PM7DialogOverlay and PM7DialogContent (creates duplicate overlays)
- ✅ **CORRECT**: Using only PM7DialogContent (it includes the overlay automatically)

## Installation

```bash
npm install pm7-ui-style-guide

# Required peer dependencies:
npm install @radix-ui/react-dialog@^1.0.5 lucide-react@^0.501.0
```

## Import

```typescript
import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
} from 'pm7-ui-style-guide';

// CRITICAL: Import CSS for proper styling
import 'pm7-ui-style-guide/pm7-dialog.css';
```

## Basic Usage

```tsx
import React, { useState } from 'react';
import { 
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogDescription,
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/pm7-dialog.css';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Open Dialog
      </button>
      
      <PM7Dialog open={open} onOpenChange={setOpen}>
        <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
          
          <PM7DialogHeader className="p-6 pb-4">
            <PM7DialogTitle className="text-lg font-semibold">
              Dialog Title
            </PM7DialogTitle>
            <PM7DialogDescription className="mt-2 text-sm text-muted-foreground">
              Dialog description text here.
            </PM7DialogDescription>
          </PM7DialogHeader>
          
          <div className="px-6 py-4">
            <p>Your dialog content goes here.</p>
          </div>
          
          <PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t">
            <button 
              onClick={() => setOpen(false)}
              className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button 
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Confirm
            </button>
          </PM7DialogFooter>
          
        </PM7DialogContent>
      </PM7Dialog>
    </>
  );
}
```

## 🔧 Critical Styling Requirements

### PM7DialogContent MUST have:

- `p-0 overflow-hidden` - Prevents white borders around footer
- `fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]` - Perfect centering
- `bg-background shadow-lg sm:rounded-lg` - Proper background and shadow

### PM7DialogHeader should have:

- `className="p-6 pb-4"` - Proper spacing
- Title: `className="text-lg font-semibold"`
- Description: `className="mt-2 text-sm text-muted-foreground"`

### PM7DialogFooter MUST have:

- `className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"`
- Cancel button: `className="mr-auto"` to push it left
- Action button: `className="bg-blue-600 hover:bg-blue-700 text-white"`

## Confirmation Dialog Pattern

```tsx
const ConfirmDialog = ({ open, onOpenChange, onConfirm, title, message }) => {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <PM7Dialog open={open} onOpenChange={onOpenChange}>
      <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
        
        <PM7DialogHeader className="p-6 pb-4">
          <PM7DialogTitle className="text-lg font-semibold">
            {title}
          </PM7DialogTitle>
          <PM7DialogDescription className="mt-2 text-sm text-muted-foreground">
            {message}
          </PM7DialogDescription>
        </PM7DialogHeader>
        
        <PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t">
          <button 
            onClick={() => onOpenChange(false)}
            className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button 
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Confirm
          </button>
        </PM7DialogFooter>
        
      </PM7DialogContent>
    </PM7Dialog>
  );
};
```

## Form Dialog Pattern

```tsx
const FormDialog = ({ open, onOpenChange, onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await onSave(formData);
      onOpenChange(false);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PM7Dialog open={open} onOpenChange={onOpenChange}>
      <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
        
        <PM7DialogHeader className="p-6 pb-4">
          <PM7DialogTitle className="text-lg font-semibold">Add User</PM7DialogTitle>
          <PM7DialogDescription className="mt-2 text-sm text-muted-foreground">
            Fill out the form below to add a new user.
          </PM7DialogDescription>
        </PM7DialogHeader>
        
        <div className="px-6 py-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t">
          <button
            onClick={() => onOpenChange(false)}
            className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading || !formData.name || !formData.email}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>
        </PM7DialogFooter>
        
      </PM7DialogContent>
    </PM7Dialog>
  );
};
```

## ❌ Common Mistakes to Avoid

- ❌ **Using PM7DialogOverlay separately** - PM7DialogContent already includes an overlay!
- ❌ Using default padding on PM7DialogContent (causes white borders)
- ❌ Not setting `mr-auto` on cancel button (wrong positioning)
- ❌ Forgetting `bg-gray-50` on footer (no background contrast)
- ❌ Missing `border-t` on footer (no visual separation)
- ❌ Not using `overflow-hidden` (footer bleeds outside rounded corners)
- ❌ Using `flex-col-reverse sm:flex-row` instead of `flex-row`
- ❌ Forgetting to import pm7-dialog.css

## Complete Production Example

```tsx
import React, { useState } from 'react';
import { 
  PM7Dialog, 
  PM7DialogContent, 
  PM7DialogHeader, 
  PM7DialogTitle, 
  PM7DialogDescription, 
  PM7DialogFooter
} from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/pm7-dialog.css';

const SaveConfigDialog = ({ open, onOpenChange, configurationData }) => {
  const [configName, setConfigName] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!configName.trim()) return;
    
    setIsSaving(true);
    try {
      await saveConfig(configName.trim(), configurationData);
      onOpenChange(false);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <PM7Dialog open={open} onOpenChange={onOpenChange}>
      <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
        
        <PM7DialogHeader className="p-6 pb-4">
          <PM7DialogTitle className="text-lg font-semibold">Opslaan</PM7DialogTitle>
          <PM7DialogDescription className="mt-2 text-sm text-muted-foreground">
            Geef een naam op voor deze configuratie.
          </PM7DialogDescription>
        </PM7DialogHeader>
        
        <div className="px-6 py-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="config-name" className="text-sm font-medium">
              Configuratie naam
            </label>
            <input
              id="config-name"
              type="text"
              value={configName}
              onChange={(e) => setConfigName(e.target.value)}
              placeholder="Nieuwe configuratie naam..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              autoFocus
            />
          </div>
        </div>
        
        <PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t">
          <button
            onClick={() => onOpenChange(false)}
            className="mr-auto px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Annuleren
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving || !configName.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
          >
            {isSaving ? 'Bezig...' : 'Opslaan'}
          </button>
        </PM7DialogFooter>
        
      </PM7DialogContent>
    </PM7Dialog>
  );
};
```

## API Reference

### PM7Dialog Props

| Prop | Type | Description |
|------|------|-------------|
| `open` | boolean | Controls dialog visibility |
| `onOpenChange` | `(open: boolean) => void` | Callback when open state changes |
| `children` | ReactNode | Dialog content (typically PM7DialogContent) |

### PM7DialogContent Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | string | CSS classes (MUST include proper positioning and overflow) |
| `children` | ReactNode | Dialog content (header, body, footer) |

### Required CSS Classes for PM7DialogContent

```typescript
className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden"
```

### Required CSS Classes for PM7DialogFooter

```typescript
className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t"
```