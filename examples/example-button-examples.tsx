import React, { useState } from 'react';
import { PM7Card } from '../src/components/card';
import { PM7Button as Button, buttonRules } from '../src/components/button/pm7-button';
import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from '../src/components/dialog/pm7-dialog';

const Separator = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div style={{
    height: '1px',
    backgroundColor: theme === 'dark' ? '#525252' : '#e2e8f0',
    margin: '24px 0',
    width: '100%'
  }}></div>
);

const ExampleButtonExamples = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeButtonInfo, setActiveButtonInfo] = useState({
    title: '',
    description: '',
    className: '',
    disabled: false
  });

  const showButtonInfo = (title: string, className: string = '', disabled: boolean = false) => {
    let description = '';
    if (className.includes('outline')) {
      description = 'This is an outline style button with a border and transparent background.';
    } else if (className.includes('secondary')) {
      description = 'This is a secondary style button with custom styling.';
    } else if (className.includes('ghost')) {
      description = 'This is a ghost style button that becomes visible on hover.';
    } else if (className.includes('link')) {
      description = 'This is a link style button with an underline.';
    } else if (className.includes('small')) {
      description = 'This is a small size button with reduced padding and font size.';
    } else if (className.includes('large')) {
      description = 'This is a large size button with increased padding and font size.';
    } else if (disabled) {
      description = 'This is a disabled button that cannot be clicked.';
    } else {
      description = 'This is a standard button with default styling.';
    }
    setActiveButtonInfo({ title, description, className, disabled });
    setDialogOpen(true);
  };

  return (
    <PM7Card>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default Style')}>
            Default Style
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} onClick={() => showButtonInfo('Outline Style', 'outline')}>
            Outline Style
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.secondary} onClick={() => showButtonInfo('Secondary Style', 'secondary')}>
            Secondary Style
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.ghost} onClick={() => showButtonInfo('Ghost Style', 'ghost')}>
            Ghost Style
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.link} onClick={() => showButtonInfo('Link Style', 'link')}>
            Link Style
          </Button>
        </div>
        <Separator theme={theme} />
        <h3 className="text-xl font-semibold mb-4 mt-6">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.small} onClick={() => showButtonInfo('Small Button', 'small')}>
            Small Button
          </Button>
          <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default Size')}>
            Default Size
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.large} onClick={() => showButtonInfo('Large Button', 'large')}>
            Large Button
          </Button>
        </div>
        <Separator theme={theme} />
        <h3 className="text-xl font-semibold mb-4 mt-6">Button States</h3>
        <div className="flex flex-wrap gap-4">
          <Button theme={theme} className={buttonRules.button} onClick={() => showButtonInfo('Default')}>
            Default
          </Button>
          <Button theme={theme} className={buttonRules.button} disabled onClick={() => showButtonInfo('Disabled', '', true)}>
            Disabled
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} disabled onClick={() => showButtonInfo('Disabled Outline', 'outline', true)}>
            Disabled Outline
          </Button>
        </div>
      </div>
      <PM7Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
          <PM7DialogHeader>
            <PM7DialogTitle>{activeButtonInfo.title}</PM7DialogTitle>
          </PM7DialogHeader>
          <PM7DialogDescription>
            {activeButtonInfo.description}
            {activeButtonInfo.className && (
              <div className="mt-2">
                <p><strong>CSS Classes:</strong> {activeButtonInfo.className}</p>
              </div>
            )}
            {activeButtonInfo.disabled && (
              <div className="mt-2">
                <p><strong>State:</strong> Disabled</p>
              </div>
            )}
          </PM7DialogDescription>
          <PM7DialogFooter>
            <Button theme={theme} onClick={() => setDialogOpen(false)}>Close</Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </PM7Card>
  );
};

export default ExampleButtonExamples;