// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

export interface ButtonPrimaryProps {
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
  sx?: Record<string, unknown>;
  /** Class overrides */
  className?: string;
  /** Button type */
  type?: 'text' | 'icon';
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width */
  width?: 'compact' | 'fluid';
}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx = {},
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: padding,
          paddingRight: padding,
          borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
          fontSize: fontSizeMap[size],
          lineHeight: lineHeightMap[size],
          letterSpacing: letterSpacingMap[size],
          fontFamily: 'var(--font-family-body)',
          fontWeight: 'var(--font-weight-medium---500)',
          width: width === 'fluid' ? '100%' : 'auto',
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };