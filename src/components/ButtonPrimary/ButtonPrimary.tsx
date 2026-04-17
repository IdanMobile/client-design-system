// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonPrimary component.
 */
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
  sx?: SxProps;
  /** Class name overrides */
  className?: string;
  /** Type of button */
  type?: 'text' | 'icon';
  /** Size of the button */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Width of the button */
  width?: 'compact' | 'fluid';
}

/**
 * ButtonPrimary component for primary button actions.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
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
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: 'var(--body-md-letter-spacing)',
          lineHeight: 'var(--body-md-line-height-24)',
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