// Enhancement: Improved layout for the Dialog example page: dialog sample open buttons are now grouped and arranged in a visually pleasing 2-column grid, with section headings for clarity. Includes basic, confirmation, form, custom footer, scrollable, image, loading, and nested dialogs.
import React, { useState } from 'react';

import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '../src/components/dialog/pm7-dialog';

const DialogExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('dialog-component-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [customFooterOpen, setCustomFooterOpen] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [innerNestedOpen, setInnerNestedOpen] = useState(false);

  // Form state
  const [formValue, setFormValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Loading/progress state
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('dialog-component-theme', theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'light');
  };

  return (
    <>
      <div className="example-container">
        <div className="component-example">
          <div className="component-header">
            <h2>Dialog</h2>
            <div className="theme-toggle">
              <span>Theme:</span>
              <button onClick={toggleTheme} className="ml-2" style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}>
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>

          {/* Dialog Example Grid Section */}
          <div className="mb-8" style={{ padding: '2rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Basic & Confirmation</h3>
                <button onClick={() => setDialogOpen(true)} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer', fontWeight: 500 }}>
                  Open Basic Dialog
                </button>
                <button onClick={() => setConfirmOpen(true)} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #e53e3e', background: '#e53e3e', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                  Open Confirmation Dialog
                </button>
                <h3 className="text-xl font-semibold mt-6 mb-3">Form & Custom Footer</h3>
                <button onClick={() => { setFormOpen(true); setFormSubmitted(false); }} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #228B22', background: '#228B22', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                  Open Form Dialog
                </button>
                <button onClick={() => setCustomFooterOpen(true)} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #444', background: '#444', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                  Open Dialog with Custom Footer
                </button>
              </div>
              {/* Column 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Advanced Dialogs</h3>
                <button onClick={() => setScrollOpen(true)} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #6C63FF', background: '#6C63FF', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                  Open Scrollable Dialog
                </button>
                <button onClick={() => setImageOpen(true)} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #FFD43B', background: '#FFD43B', color: '#333', cursor: 'pointer', fontWeight: 500 }}>
                  Open Dialog with Image
                </button>
                <button onClick={() => { setLoadingOpen(true); setLoading(true); setTimeout(() => setLoading(false), 2000); }} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #1C86EF', background: '#1C86EF', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                  Open Loading Dialog
                </button>
                <button onClick={() => setNestedOpen(true)} className="w-full mb-2" style={{ padding: '12px 0', borderRadius: 6, border: '1px solid #E75480', background: '#E75480', color: 'white', cursor: 'pointer', fontWeight: 500 }}>
                  Open Nested Dialog Example
                </button>
              </div>
            </div>
          </div>

          {/* Dialog with Scrollable Content */}
          <PM7Dialog open={scrollOpen} onOpenChange={setScrollOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''} style={{ maxHeight: 400, overflowY: 'auto' }}>
              <PM7DialogHeader>
                <PM7DialogTitle>Dialog with Scrollable Content</PM7DialogTitle>
              </PM7DialogHeader>
              <PM7DialogDescription>
                <div style={{ maxHeight: 250, overflowY: 'auto', paddingRight: 8 }}>
                  {[...Array(20)].map((_, i) => (
                    <p key={i}>This is line {i + 1} of long dialog content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  ))}
                </div>
              </PM7DialogDescription>
              <PM7DialogFooter>
                <button onClick={() => setScrollOpen(false)} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}>
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>

          {/* Dialog with Image/Illustration */}
          <PM7Dialog open={imageOpen} onOpenChange={setImageOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Dialog with Illustration</PM7DialogTitle>
              </PM7DialogHeader>
              <PM7DialogDescription>
                <img src="https://undraw.co/api/illustrations/undraw_online_information_6pbt.svg" alt="Illustration" style={{ width: 180, display: 'block', margin: '0 auto 16px' }} />
                This dialog includes an illustration to make it more engaging and visually appealing.
              </PM7DialogDescription>
              <PM7DialogFooter>
                <button onClick={() => setImageOpen(false)} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}>
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>

          {/* Dialog with Loading/Progress Indicator */}
          <PM7Dialog open={loadingOpen} onOpenChange={setLoadingOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Dialog with Loading State</PM7DialogTitle>
              </PM7DialogHeader>
              <PM7DialogDescription>
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C86EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" style={{ marginRight: 8 }}>
                      <circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Loading, please wait...
                  </div>
                ) : (
                  <div style={{ color: '#228B22' }}>Data loaded successfully!</div>
                )}
              </PM7DialogDescription>
              <PM7DialogFooter>
                <button onClick={() => setLoadingOpen(false)} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}>
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>

          {/* Dialog with Nested Dialogs */}
          <PM7Dialog open={nestedOpen} onOpenChange={setNestedOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Parent Dialog</PM7DialogTitle>
              </PM7DialogHeader>
              <PM7DialogDescription>
                This is a parent dialog. You can open another dialog from here.
              </PM7DialogDescription>
              <PM7DialogFooter>
                <button onClick={() => setNestedOpen(false)} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}>
                  Close
                </button>
                <button onClick={() => setInnerNestedOpen(true)} style={{ marginLeft: 8, padding: '8px 16px', borderRadius: 6, border: '1px solid #E75480', background: '#E75480', color: 'white', cursor: 'pointer' }}>
                  Open Inner Dialog
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
          <PM7Dialog open={innerNestedOpen} onOpenChange={setInnerNestedOpen}>
            <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
              <PM7DialogHeader>
                <PM7DialogTitle>Inner Dialog</PM7DialogTitle>
              </PM7DialogHeader>
              <PM7DialogDescription>
                This is a nested dialog opened from the parent dialog.
              </PM7DialogDescription>
              <PM7DialogFooter>
                <button onClick={() => setInnerNestedOpen(false)} style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc', background: '#f7f7f7', cursor: 'pointer' }}>
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
        </div>
        <div className="example-code">
          <h3>Usage</h3>
          <pre>
            <code>{`import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from 'pm7-ui-style-guide';

`}</code>
          </pre>
        </div>
      </div>
    </> 
  );
};
export default DialogExample;
