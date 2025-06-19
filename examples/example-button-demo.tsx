import React, { useState } from 'react';
import { PM7Card } from '../src/components/card';
import { PM7Button as Button, buttonRules } from '../src/components/button/pm7-button';
import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from '../src/components/dialog/pm7-dialog';
import { Download, Upload, Settings, Save, ArrowRight, Edit, Trash2, Sparkles, Zap } from 'lucide-react';
import '../src/components/button/pm7-button.css';

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
    disabled: false,
    code: ''
  });

  const showButtonInfo = (title: string, className: string = '', disabled: boolean = false, hasIcon: boolean = false, iconPosition?: string, effect?: string, iconName?: string, buttonText?: string) => {
    let description = '';
    if (hasIcon && !title.includes('Button')) {
      if (iconPosition === 'right') {
        description = 'This button demonstrates icon positioning on the right side of the text with automatic spacing and sizing.';
      } else if (title.includes('Icon Only')) {
        description = 'This is an icon-only button without text, perfect for toolbars and compact interfaces.';
      } else {
        description = 'This button demonstrates icon integration with automatic sizing (1rem) and spacing (0.5rem gap from text).';
      }
    } else if (className.includes('outline')) {
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
    
    if (effect) {
      description += ` This button has the "${effect}" visual effect applied.`;
    }
    
    // Generate the code for this button
    let code = `import { PM7Button } from 'pm7-ui-style-guide';\n`;
    if (iconName) {
      code += `import { ${iconName} } from 'lucide-react';\n`;
    }
    if (effect === '6stars') {
      code += `import 'pm7-ui-style-guide/src/components/button/pm7-button.css';\n`;
    }
    code += `\n`;
    code += `<PM7Button`;
    
    // Add props in a readable format
    const props = [];
    if (className && className !== buttonRules.button) {
      props.push(`  className="${className}"`);
    }
    if (effect) {
      props.push(`  effect="${effect}"`);
    }
    if (iconName) {
      props.push(`  icon={<${iconName} />}`);
    }
    if (iconPosition && iconPosition !== 'left') {
      props.push(`  iconPosition="${iconPosition}"`);
    }
    if (disabled) {
      props.push(`  disabled`);
    }
    props.push(`  onClick={() => console.log('Button clicked!')}`);
    
    if (props.length > 0) {
      code += '\n' + props.join('\n') + '\n';
    }
    
    code += `>`;
    if (buttonText) {
      code += `\n  ${buttonText}\n</PM7Button>`;
    } else {
      code += ' />'; // Self-closing for icon-only buttons
    }
    
    setActiveButtonInfo({ title, description, className, disabled, code });
    setDialogOpen(true);
  };
  
  // Helper function to create button with tooltip showing className
  const ButtonWithTooltip = ({ children, className, theme, ...props }: any) => {
    const [showTooltip, setShowTooltip] = useState(false);
    
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button
          theme={theme}
          className={className}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          {...props}
        >
          {children}
        </Button>
        {showTooltip && (
          <div style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            padding: '4px 8px',
            backgroundColor: theme === 'dark' ? '#374151' : '#1f2937',
            color: 'white',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            {className || 'No className'}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
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
        <div className="flex flex-wrap gap-4 mb-6">
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
        <Separator theme={theme} />
        <h3 className="text-xl font-semibold mb-4 mt-6">Icon Buttons</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button theme={theme} className={buttonRules.button} icon={<Download />} onClick={() => showButtonInfo('Download File', '', false, true)}>
            Download File
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} icon={<Upload />} onClick={() => showButtonInfo('Upload', 'outline', false, true)}>
            Upload
          </Button>
          <Button theme={theme} className={buttonRules.button} icon={<ArrowRight />} iconPosition="right" onClick={() => showButtonInfo('Continue', '', false, true, 'right')}>
            Continue
          </Button>
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.secondary} icon={<Save />} onClick={() => showButtonInfo('Save Changes', 'secondary', false, true)}>
            Save Changes
          </Button>
        </div>
        <h4 className="text-lg font-medium mb-3 mt-4">Icon-Only Buttons</h4>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button theme={theme} className={buttonRules.button} icon={<Settings />} onClick={() => showButtonInfo('Settings Icon Only', '', false, true)} />
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.outline} icon={<Edit />} onClick={() => showButtonInfo('Edit Icon Only', 'outline', false, true)} />
          <Button theme={theme} className={buttonRules.button + ' ' + buttonRules.ghost} icon={<Trash2 />} onClick={() => showButtonInfo('Delete Icon Only', 'ghost', false, true)} />
        </div>
        <Separator theme={theme} />
        <h3 className="text-xl font-semibold mb-4 mt-6">Visual Effects</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <ButtonWithTooltip 
            theme={theme} 
            className={buttonRules.button} 
            effect="6stars" 
            onClick={() => showButtonInfo('Export with Effect', buttonRules.button, false, false, undefined, '6stars', undefined, 'Export Data')}
          >
            Export Data
          </ButtonWithTooltip>
          <ButtonWithTooltip 
            theme={theme} 
            className={buttonRules.button} 
            effect="6stars" 
            icon={<Download />} 
            onClick={() => showButtonInfo('Download with Effect', buttonRules.button, false, true, undefined, '6stars', 'Download', 'Export CSV')}
          >
            Export CSV
          </ButtonWithTooltip>
          <ButtonWithTooltip 
            theme={theme} 
            className={buttonRules.button + ' ' + buttonRules.outline} 
            effect="6stars" 
            icon={<Sparkles />} 
            onClick={() => showButtonInfo('Magic Effect', buttonRules.button + ' ' + buttonRules.outline, false, true, undefined, '6stars', 'Sparkles', 'Apply Magic')}
          >
            Apply Magic
          </ButtonWithTooltip>
          <ButtonWithTooltip 
            theme={theme} 
            className={buttonRules.button + ' ' + buttonRules.outline} 
            effect="6stars" 
            icon={<Zap />} 
            iconPosition="right" 
            onClick={() => showButtonInfo('Power Mode', buttonRules.button + ' ' + buttonRules.outline, false, true, 'right', '6stars', 'Zap', 'Power Mode')}
          >
            Power Mode
          </ButtonWithTooltip>
        </div>
        <h4 className="text-lg font-medium mb-3 mt-4">Effect States</h4>
        <div className="flex flex-wrap gap-4 mb-6">
          <ButtonWithTooltip 
            theme={theme} 
            className={buttonRules.button} 
            effect="6stars" 
            onClick={() => showButtonInfo('Effect Enabled', buttonRules.button, false, false, undefined, '6stars', undefined, 'Effect Enabled')}
          >
            Effect Enabled
          </ButtonWithTooltip>
          <ButtonWithTooltip 
            theme={theme} 
            className={buttonRules.button} 
            effect="6stars" 
            disabled 
            onClick={() => showButtonInfo('Effect Disabled', buttonRules.button, true, false, undefined, '6stars', undefined, 'Effect Disabled')}
          >
            Effect Disabled
          </ButtonWithTooltip>
        </div>
      </div>
      <PM7Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <PM7DialogContent className={theme === 'dark' ? 'dark' : ''} maxWidth="sm">
          <PM7DialogHeader>
            <PM7DialogTitle>{activeButtonInfo.title}</PM7DialogTitle>
            <PM7DialogDescription>
              {activeButtonInfo.description}
            </PM7DialogDescription>
          </PM7DialogHeader>
          <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
            {activeButtonInfo.code && (
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Code to create this button:</h4>
                <pre style={{
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                  padding: '1rem',
                  borderRadius: '0.375rem',
                  overflow: 'auto',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: theme === 'dark' ? '#e5e7eb' : '#111827',
                  border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}>
                  <code>{activeButtonInfo.code}</code>
                </pre>
                <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>
                  <p>Click the code above to select it, then copy with Ctrl+C (or Cmd+C on Mac)</p>
                </div>
              </div>
            )}
          </div>
          <PM7DialogFooter>
            <Button theme={theme} onClick={() => setDialogOpen(false)}>Close</Button>
          </PM7DialogFooter>
        </PM7DialogContent>
      </PM7Dialog>
    </>
  );
};

export default ExampleButtonExamples;