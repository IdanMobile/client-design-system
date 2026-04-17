// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
  /** Click handler */
  onClick?: () => void;
  /** Mouse enter handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Content of the button */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: SxProps;
  /** Class name overrides */
  className?: string;
  /** Button type: text or icon */
  type?: 'text' | 'icon';
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width */
  width?: 'compact' | 'fluid';
}

/**
 * ButtonOutline component for rendering a styled button with outline.
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
      type = 'text',
      size = 'md',
      width = 'compact',
    },
    ref
  ) => {
    const paddingMap = {
      lg: 'var(--dimension-24---1-5-rem)',
      md: 'var(--dimension-20---1-25-rem)',
      sm: 'var(--dimension-16---1-rem)',
      xs: 'var(--dimension-16---1-rem)',
    };

    const iconPaddingMap = {
      lg: 'var(--dimension-12---0-75-rem)',
      md: 'var(--dimension-8---0-5-rem)',
      sm: 'var(--dimension-8---0-5-rem)',
      xs: 'var(--dimension-8---0-5-rem)',
    };

    const borderRadiusMap = {
      lg: 'var(--border-radius-lg)',
      md: 'var(--border-radius-lg)',
      sm: 'var(--border-radius-lg)',
      xs: 'var(--border-radius-md)',
    };

    const fontSizeMap = {
      lg: 'var(--font-text-md-l-24-medium-size)',
      md: 'var(--font-text-md-l-24-medium-size)',
      sm: 'var(--font-text-sm-l-20-medium-size)',
      xs: 'var(--font-text-xs-medium-size)',
    };

    const lineHeightMap = {
      lg: 'var(--body-md-line-height-24)',
      md: 'var(--body-md-line-height-24)',
      sm: 'var(--body-sm-line-height-l-20)',
      xs: 'var(--body-xs-line-height)',
    };

    const letterSpacingMap = {
      lg: 'var(--body-md-letter-spacing)',
      md: 'var(--body-md-letter-spacing)',
      sm: 'var(--body-sm-letter-spacing)',
      xs: 'var(--body-xs-letter-spacing)',
    };

    const padding = type === 'icon' ? iconPaddingMap[size] : paddingMap[size];

    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          display: width === 'fluid' ? 'block' : 'inline-block',
          width: width === 'fluid' ? '100%' : 'auto',
          padding,
          borderRadius: borderRadiusMap[size],
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          fontSize: fontSizeMap[size],
          lineHeight: lineHeightMap[size],
          letterSpacing: letterSpacingMap[size],
          fontFamily: 'var(--font-family-body)',
          fontWeight: 'var(--font-weight-medium---500)',
          '&:hover': {
            backgroundColor: 'var(--background-state-interaction-hover-neutral)',
          },
          '&:focus': {
            backgroundColor: 'var(--background-white-base)',
          },
          '&:disabled': {
            backgroundColor: 'var(--background-state-interaction-disabled-neutral)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };