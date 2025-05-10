import React, { useState } from 'react';
import { PM7Card } from '../src/components/card';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogDescription,
  PM7DialogFooter
} from '../src/components/dialog/pm7-dialog';

const ExampleDialogExamples = ({ theme }: { theme: 'light' | 'dark' }) => {
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

  return (
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
    </PM7Card>
  );
};

export default ExampleDialogExamples;