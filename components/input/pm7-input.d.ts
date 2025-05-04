import * as React from 'react';

/**
 * Input styling rules according to Winfakt's design system
 * @property focusBorderColor - The border color when input is focused (primary color #1C86EF)
 * @property alwaysShowBorder - Whether to always show a border (true per Winfakt guidelines)
 */
export declare const inputRules: {
    focusBorderColor: string;
    alwaysShowBorder: boolean;
};

/**
 * Properties for the PM7Input component
 * @property error - Whether to show error styling
 */
export interface PM7InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    error?: boolean;
    size?: 'default' | 'sm' | 'lg';
}

/**
 * Input component that follows Winfakt's design system
 * 
 * @example
 * ```tsx
 * import { PM7Input } from 'pm7-ui-style-guide';
 * import { useState } from 'react';
 * 
 * function MyComponent() {
 *   const [value, setValue] = useState('');
 *   
 *   return (
 *     <PM7Input
 *       type="text"
 *       placeholder="Enter text"
 *       value={value}
 *       onChange={(e) => setValue(e.target.value)}
 *     />
 *   );
 * }
 * ```
 */
export declare const PM7Input: React.ForwardRefExoticComponent<PM7InputProps & React.RefAttributes<HTMLInputElement>>;

/**
 * Alias for PM7Input for convenience
 */
export { PM7Input as Input };
