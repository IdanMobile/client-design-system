// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  /**
   * Hover handler for the button.
   */
  onHover?: () => void;
  /**
   * Disables the button if true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner if true.
   */
  isLoading?: boolean;
  /**
   * Content of the button.
   */
  children?: React.ReactNode;
  /**
   * Style overrides.
   */
  sx?: SxProps;
  /**
   * Class name overrides.
   */
  className?: string;
  /**
   * Type of the button, either 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button, one of 'lg', 'md', 'sm', 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button, either 'Compact' or 'Fluid/block'.
   */
  width?: 'Compact' | 'Fluid/block';
  /**
   * State of the button, one of 'Default', 'Hover', 'Focus', 'Disabled'.
   */
  state?: 'Default' | 'Hover' | 'Focus' | 'Disabled';
}

/**
 * ButtonOutline component using Material UI and design tokens.
 */
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx,
      className,
      type = 'Text button',
      size = 'md',
      width = 'Compact',
      state = 'Default',
    },
    ref
  ) => {
    const isIconButton = type === 'Icon button';
    const paddingLeft = isIconButton ? 'var(--dimension-8---0-5-rem)' : size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
    const paddingRight = paddingLeft;
    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';

    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          display: width === 'Fluid/block' ? 'block' : 'inline-block',
          width: width === 'Fluid/block' ? '100%' : 'auto',
          paddingLeft,
          paddingRight,
          borderRadius,
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          borderColor: 'currentColor',
          letterSpacing: size === 'xs' ? 'var(--body-xs-letter-spacing)' : 'var(--body-md-letter-spacing)',
          fontSize: size === 'xs' ? 'var(--body-xs-font-size)' : 'var(--body-md-font-size)',
          fontFamily: 'var(--font-family-body)',
          lineHeight: size === 'xs' ? 'var(--body-xs-line-height)' : 'var(--body-md-line-height-24)',
          fontWeight: 'var(--font-weight-medium---500)',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.5 : 1,
          position: 'relative',
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} sx={{ position: 'absolute' }} /> : children}
      </MuiButton>
    );
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };