// Enhancement: Rebuilt the Dialog example to match the styling and layout of TabSelector and Card examples.
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { PM7TabSelector } from '../src/components/tab-selector';
import { PM7Card } from '../src/components/card';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter,
  PM7DialogSeparator
} from '../src/components/dialog/pm7-dialog';
import '../src/components/dialog/pm7-dialog.css';
import '../src/components/tab-selector/pm7-tab-selector.css';
import '../src/components/card/pm7-card.css';

// Static README content for API tab
const dialogReadme = `# PM7Dialog

A flexible Dialog component for PM7 UI that provides modal dialogs with various configurations. Supports headers, footers, titles, descriptions, and dark mode.

## Usage

\`\`\`tsx
import { 
  PM7Dialog, 
  PM7DialogContent, 
  PM7DialogHeader, 
  PM7DialogTitle, 
  PM7DialogDescription, 
  PM7DialogFooter 
} from "@pm7-ui/dialog";

// Basic dialog
<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent>
    <PM7DialogHeader>
      <PM7DialogTitle>Dialog Title</PM7DialogTitle>
      <PM7DialogDescription>Dialog description or subtitle</PM7DialogDescription>
    </PM7DialogHeader>
    <div>Dialog content goes here.</div>
    <PM7DialogFooter>
      <button onClick={() => setOpen(false)}>Close</button>
    </PM7DialogFooter>
  </PM7DialogContent>
</PM7Dialog>
\`\`\`

## Props

### PM7Dialog
- \`open\`: boolean — Controls whether the dialog is open.
- \`onOpenChange\`: (open: boolean) => void — Callback when the open state changes.
- All standard Radix UI Dialog props.

### PM7DialogContent
- \`className?\`: string — Additional classes for the dialog container.
- All standard Radix UI DialogContent props.

### PM7DialogHeader, PM7DialogFooter
- \`className?\`: string — Additional classes.
- All standard \`div\` props.

### PM7DialogTitle
- \`className?\`: string — Additional classes.
- All standard Radix UI DialogTitle props.

### PM7DialogDescription
- \`className?\`: string — Additional classes.
- All standard Radix UI DialogDescription props.

### PM7DialogSeparator
- \`className?\`: string — Additional classes.
- \`marginTop?\`: string — Custom top margin (default: '0px').
- \`marginBottom?\`: string — Custom bottom margin (default: '0px').
- All standard \`div\` props.

## Styling

- Dialog supports light and dark mode.
- Use the provided CSS or extend as needed.

## License
MIT`;

type TabType = 'Overview' | 'Usage' | 'API' | 'Examples';
type ThemeType = 'light' | 'dark';

const DialogExample = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Overview');
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme as ThemeType;
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Dialog states
  const [basicDialogOpen, setBasicDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [customFooterDialogOpen, setCustomFooterDialogOpen] = useState(false);
  const [scrollableDialogOpen, setScrollableDialogOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [loadingDialogOpen, setLoadingDialogOpen] = useState(false);
  const [nestedDialogOpen, setNestedDialogOpen] = useState(false);
  const [innerNestedDialogOpen, setInnerNestedDialogOpen] = useState(false);

  // Form state
  const [formValue, setFormValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'pm7-theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue as ThemeType);
      }
    };
    
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme as ThemeType);
      }
    };
    
    const intervalId = setInterval(checkTheme, 500);
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, [theme]);

  const handleTabChange = (tabId: string) => {
    if (tabId === 'Overview' || tabId === 'Usage' || tabId === 'API' || tabId === 'Examples') {
      setActiveTab(tabId as TabType);
    }
  };

  return (
    <>
      <PM7TabSelector
        tabs={[
          { id: "Overview", label: "Overview" },
          { id: "Usage", label: "Usage" },
          { id: "API", label: "API" },
          { id: "Examples", label: "Examples" }
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        initialTheme={theme}
        className="mb-4"
      />
      
      {activeTab === "Overview" && (
        <PM7Card className="mb-6">
          <h3 className="text-xl font-semibold mb-3">PM7Dialog</h3>
          <p className="mb-4">The PM7Dialog component provides a flexible, theme-aware modal dialog system with support for headers, footers, titles, and descriptions.</p>
          <h4 className="text-lg font-medium mt-4 mb-2">Key Features</h4>
          <ul className="list-disc ml-5 mt-1 mb-4">
            <li>Light and dark theme support</li>
            <li>Header, footer, title, and description subcomponents</li>
            <li>Customizable via className and CSS</li>
            <li>Accessible with proper ARIA attributes</li>
            <li>Built on Radix UI's Dialog primitive</li>
          </ul>
        </PM7Card>
      )}

      {activeTab === "Examples" && (
        <>
          <PM7Card className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Dialog Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div>
                <h4 className="text-lg font-medium mb-2">Basic & Confirmation</h4>
                <div className="border border-gray-300 dark:border-gray-600 rounded p-4 mb-6">
                  <button 
                    onClick={() => setBasicDialogOpen(true)} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Basic Dialog
                  </button>
                  <button 
                    onClick={() => setConfirmDialogOpen(true)} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #e53e3e', background: '#e53e3e', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Confirmation Dialog
                  </button>
                </div>
                
                <h4 className="text-lg font-medium mb-2">Form & Custom Footer</h4>
                <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
                  <button 
                    onClick={() => { setFormDialogOpen(true); setFormSubmitted(false); }} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #228B22', background: '#228B22', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Form Dialog
                  </button>
                  <button 
                    onClick={() => setCustomFooterDialogOpen(true)} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #444', background: '#444', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Dialog with Custom Footer
                  </button>
                </div>
              </div>
              
              {/* Column 2 */}
              <div>
                <h4 className="text-lg font-medium mb-2">Scrollable & Media</h4>
                <div className="border border-gray-300 dark:border-gray-600 rounded p-4 mb-6">
                  <button 
                    onClick={() => setScrollableDialogOpen(true)} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #4299e1', background: '#4299e1', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Scrollable Dialog
                  </button>
                  <button 
                    onClick={() => setImageDialogOpen(true)} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #9f7aea', background: '#9f7aea', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Dialog with Image
                  </button>
                </div>
                
                <h4 className="text-lg font-medium mb-2">Loading & Nested</h4>
                <div className="border border-gray-300 dark:border-gray-600 rounded p-4">
                  <button 
                    onClick={() => { 
                      setLoadingDialogOpen(true); 
                      setLoading(true); 
                      setTimeout(() => setLoading(false), 2000); 
                    }} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #ed8936', background: '#ed8936', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Loading Dialog
                  </button>
                  <button 
                    onClick={() => setNestedDialogOpen(true)} 
                    className="w-full mb-2" 
                    style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #E75480', background: '#E75480', color: 'white', cursor: 'pointer', fontWeight: 500 }}
                  >
                    Open Nested Dialog
                  </button>
                </div>
              </div>
            </div>
          </PM7Card>
          
          {/* Basic Dialog */}
          <PM7Dialog open={basicDialogOpen} onOpenChange={setBasicDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Basic Dialog</PM7DialogTitle>
                <PM7DialogDescription>This is a basic dialog with a title, description, and footer.</PM7DialogDescription>
              </PM7DialogHeader>
              <div style={{ margin: '1rem 0' }}>
                <p>This is the main content of the dialog. You can put any React node here.</p>
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setBasicDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}
                >
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Confirmation Dialog */}
          <PM7Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Confirm Action</PM7DialogTitle>
                <PM7DialogDescription>Are you sure you want to perform this action?</PM7DialogDescription>
              </PM7DialogHeader>
              <PM7DialogFooter>
                <button 
                  onClick={() => setConfirmDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer', marginRight: 8 }}
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setConfirmDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #e53e3e', background: '#e53e3e', color: 'white', cursor: 'pointer' }}
                >
                  Confirm
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Form Dialog */}
          <PM7Dialog open={formDialogOpen} onOpenChange={setFormDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Form Dialog</PM7DialogTitle>
                <PM7DialogDescription>Fill out this form and submit it.</PM7DialogDescription>
              </PM7DialogHeader>
              {formSubmitted ? (
                <div style={{ margin: '1rem 0', color: '#228B22' }}>
                  Form submitted successfully! You entered: {formValue}
                </div>
              ) : (
                <div style={{ margin: '1rem 0' }}>
                  <label style={{ display: 'block', marginBottom: 8 }}>
                    Enter some text:
                    <input 
                      type="text" 
                      value={formValue} 
                      onChange={(e) => setFormValue(e.target.value)} 
                      style={{ 
                        display: 'block', 
                        width: '100%', 
                        padding: '8px', 
                        marginTop: 4, 
                        border: '1px solid #ccc', 
                        borderRadius: 4 
                      }} 
                    />
                  </label>
                </div>
              )}
              <PM7DialogFooter>
                <button 
                  onClick={() => setFormDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer', marginRight: 8 }}
                >
                  Cancel
                </button>
                {!formSubmitted && (
                  <button 
                    onClick={() => setFormSubmitted(true)} 
                    style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #228B22', background: '#228B22', color: 'white', cursor: 'pointer' }}
                    disabled={!formValue.trim()}
                  >
                    Submit
                  </button>
                )}
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Custom Footer Dialog */}
          <PM7Dialog open={customFooterDialogOpen} onOpenChange={setCustomFooterDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Custom Footer Dialog</PM7DialogTitle>
                <PM7DialogDescription>This dialog has a custom footer with multiple buttons.</PM7DialogDescription>
              </PM7DialogHeader>
              <div style={{ margin: '1rem 0' }}>
                <p>The footer of this dialog has multiple buttons with different styles.</p>
              </div>
              <PM7DialogFooter>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <button 
                    onClick={() => setCustomFooterDialogOpen(false)} 
                    style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: 'transparent', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                  <div>
                    <button 
                      onClick={() => setCustomFooterDialogOpen(false)} 
                      style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer', marginRight: 8 }}
                    >
                      Save Draft
                    </button>
                    <button 
                      onClick={() => setCustomFooterDialogOpen(false)} 
                      style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #444', background: '#444', color: 'white', cursor: 'pointer' }}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Scrollable Dialog */}
          <PM7Dialog open={scrollableDialogOpen} onOpenChange={setScrollableDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Scrollable Dialog</PM7DialogTitle>
                <PM7DialogDescription>This dialog has scrollable content.</PM7DialogDescription>
              </PM7DialogHeader>
              <div style={{ maxHeight: '200px', overflowY: 'auto', margin: '1rem 0', padding: '0 8px' }}>
                {Array.from({ length: 20 }).map((_, i) => (
                  <p key={i} style={{ marginBottom: '12px' }}>
                    This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                ))}
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setScrollableDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}
                >
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Image Dialog */}
          <PM7Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Dialog with Image</PM7DialogTitle>
                <PM7DialogDescription>This dialog contains an image.</PM7DialogDescription>
              </PM7DialogHeader>
              <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                <div 
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    backgroundColor: '#f0f0f0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: '4px'
                  }}
                >
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p style={{ marginTop: '12px' }}>Image placeholder</p>
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setImageDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}
                >
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Loading Dialog */}
          <PM7Dialog open={loadingDialogOpen} onOpenChange={setLoadingDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Loading Dialog</PM7DialogTitle>
              </PM7DialogHeader>
              <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#1C86EF" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      style={{ animation: 'spin 1s linear infinite' }}
                    >
                      <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    <span>Loading, please wait...</span>
                  </div>
                ) : (
                  <div style={{ color: '#228B22' }}>Data loaded successfully!</div>
                )}
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setLoadingDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}
                >
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Nested Dialog */}
          <PM7Dialog open={nestedDialogOpen} onOpenChange={setNestedDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Parent Dialog</PM7DialogTitle>
              </PM7DialogHeader>
              <div style={{ margin: '1rem 0' }}>
                <p>This is a parent dialog. You can open another dialog from here.</p>
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setNestedDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer', marginRight: 8 }}
                >
                  Close
                </button>
                <button 
                  onClick={() => setInnerNestedDialogOpen(true)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #E75480', background: '#E75480', color: 'white', cursor: 'pointer' }}
                >
                  Open Inner Dialog
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          
          {/* Inner Nested Dialog */}
          <PM7Dialog open={innerNestedDialogOpen} onOpenChange={setInnerNestedDialogOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Inner Dialog</PM7DialogTitle>
              </PM7DialogHeader>
              <div style={{ margin: '1rem 0' }}>
                <p>This is a nested dialog opened from the parent dialog.</p>
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setInnerNestedDialogOpen(false)} 
                  style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}
                >
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
        </>
      )}
      
      {activeTab === "Usage" && (
        <PM7Card className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
          <p className="mb-4">Here's how to use the PM7Dialog component in your React application:</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 overflow-x-auto">
            <code className="font-mono">{`import { 
  PM7Dialog, 
  PM7DialogContent, 
  PM7DialogHeader, 
  PM7DialogTitle, 
  PM7DialogDescription, 
  PM7DialogFooter 
} from '@pm7-ui/dialog';

// Basic dialog
const [open, setOpen] = useState(false);

<PM7Dialog open={open} onOpenChange={setOpen}>
  <PM7DialogContent>
    <PM7DialogHeader>
      <PM7DialogTitle>Dialog Title</PM7DialogTitle>
      <PM7DialogDescription>Dialog description or subtitle</PM7DialogDescription>
    </PM7DialogHeader>
    <div>Dialog content goes here.</div>
    <PM7DialogFooter>
      <button onClick={() => setOpen(false)}>Close</button>
    </PM7DialogFooter>
  </PM7DialogContent>
</PM7Dialog>`}</code>
          </pre>
        </PM7Card>
      )}
      
      {activeTab === "API" && (
        <PM7Card className="mb-6">
          <div className="markdown-container dark:text-white">
            <ReactMarkdown>{dialogReadme}</ReactMarkdown>
          </div>
        </PM7Card>
      )}
    </>
  );
};

export default DialogExample;
