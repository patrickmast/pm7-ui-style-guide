import React from 'react';
import { PM7Button } from '../src/components/button/pm7-button';
import { PM7Toaster } from '../src/components/toast';
import { toast } from '../src/components/toast';

const ExampleToastDemo = ({ theme }: { theme: 'light' | 'dark' }) => {
  const showDefaultToast = () => {
    toast({
      title: "Default Toast",
      description: "This is a default toast notification",
    });
  };

  const showSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Your changes have been saved successfully",
      variant: "success",
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  };

  const showWarningToast = () => {
    toast({
      title: "Warning",
      description: "This action cannot be undone",
      variant: "warning",
    });
  };

  const showInfoToast = () => {
    toast({
      title: "Information",
      description: "Your session will expire in 5 minutes",
      variant: "info",
    });
  };

  const showToastWithAction = () => {
    toast({
      title: "File Deleted",
      description: "The file has been moved to trash",
      action: {
        label: "Undo",
        onClick: () => {
          console.log("Undo clicked");
          toast({
            title: "Restored",
            description: "File has been restored",
            variant: "success",
          });
        }
      }
    });
  };

  const showLongToast = () => {
    toast({
      title: "Processing Request",
      description: "This is a longer toast that will stay visible for 10 seconds. You can dismiss it earlier by swiping or clicking the close button.",
      duration: 10000,
    });
  };

  const showMultipleToasts = () => {
    toast({
      title: "First Toast",
      description: "This is the first notification",
    });
    
    setTimeout(() => {
      toast({
        title: "Second Toast",
        description: "This is the second notification",
        variant: "info",
      });
    }, 500);
    
    setTimeout(() => {
      toast({
        title: "Third Toast",
        description: "This is the third notification",
        variant: "success",
      });
    }, 1000);
  };

  return (
    <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Toast Notifications Demo</h3>
      
      {/* Basic Variants */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Basic Variants</h4>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <PM7Button onClick={showDefaultToast} variant="secondary">
            Default Toast
          </PM7Button>
          <PM7Button onClick={showSuccessToast} variant="secondary" style={{ backgroundColor: '#10b981', color: 'white' }}>
            Success Toast
          </PM7Button>
          <PM7Button onClick={showErrorToast} variant="secondary" style={{ backgroundColor: '#ef4444', color: 'white' }}>
            Error Toast
          </PM7Button>
          <PM7Button onClick={showWarningToast} variant="secondary" style={{ backgroundColor: '#f59e0b', color: 'white' }}>
            Warning Toast
          </PM7Button>
          <PM7Button onClick={showInfoToast} variant="secondary" style={{ backgroundColor: '#3b82f6', color: 'white' }}>
            Info Toast
          </PM7Button>
        </div>
      </div>

      {/* Advanced Features */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Advanced Features</h4>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <PM7Button onClick={showToastWithAction} variant="secondary">
            Toast with Action
          </PM7Button>
          <PM7Button onClick={showLongToast} variant="secondary">
            Long Duration Toast
          </PM7Button>
          <PM7Button onClick={showMultipleToasts} variant="secondary">
            Multiple Toasts
          </PM7Button>
        </div>
      </div>

      {/* Code Examples */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Code Examples</h4>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ marginBottom: '0.5rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Basic Toast:</h5>
          <pre style={{ 
            backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '0.375rem',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
            <code>{`toast({
  title: "Notification Title",
  description: "This is the notification message",
});`}</code>
          </pre>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ marginBottom: '0.5rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Toast with Variant:</h5>
          <pre style={{ 
            backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '0.375rem',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
            <code>{`toast({
  title: "Success!",
  description: "Operation completed successfully",
  variant: "success", // "default" | "success" | "destructive" | "warning" | "info"
});`}</code>
          </pre>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ marginBottom: '0.5rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Toast with Action:</h5>
          <pre style={{ 
            backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '0.375rem',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
            <code>{`toast({
  title: "File Deleted",
  description: "The file has been moved to trash",
  action: {
    label: "Undo",
    onClick: () => {
      // Handle undo action
      console.log("Undo clicked");
    }
  }
});`}</code>
          </pre>
        </div>
      </div>

      {/* Usage Notes */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: '500', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Usage Notes</h4>
        <ul style={{ marginLeft: '1.5rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          <li style={{ marginBottom: '0.5rem' }}>Toasts automatically dismiss after 5 seconds by default</li>
          <li style={{ marginBottom: '0.5rem' }}>Users can swipe or click to dismiss toasts manually</li>
          <li style={{ marginBottom: '0.5rem' }}>Multiple toasts stack vertically with proper spacing</li>
          <li style={{ marginBottom: '0.5rem' }}>Toast messages are announced to screen readers</li>
          <li style={{ marginBottom: '0.5rem' }}>Make sure to add {'<PM7Toaster />'} to your app root</li>
        </ul>
      </div>

      {/* Add the toaster component for this demo */}
      <PM7Toaster theme={theme} />
    </div>
  );
};

export default ExampleToastDemo;