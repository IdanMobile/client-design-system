// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

/**
 * Props for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  /**
   * Mouse enter handler for the button.
   */
  onHover?: () => void;
  /**
   * Disables the button when true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner when true.
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
   * Class name for styling overrides.
   */
  className?: string;
  /**
   * Type of button, either 'text' or 'icon'.
   */
  type?: 'text' | 'icon';
  /**
   * Size of the button, either 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button, either 'compact' or 'fluid'.
   */
  width?: 'compact' | 'fluid';
}

/**
 * ButtonPrimary component for displaying a primary button with various states and sizes.
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

    const paddingLeft = type === 'icon' ? iconPaddingMap[size] : paddingMap[size];
    const paddingRight = paddingLeft;

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
          paddingLeft,
          paddingRight,
          borderRadius: size === 'xs' ? 'var(--radius-border-radius-md)' : 'var(--radius-border-radius-lg)',
          fontSize: size === 'xs' ? 'var(--font-text-xs-medium-size)' : 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: 'var(--gap-body-md-letter-spacing)',
          lineHeight: 'var(--font-text-md-l-24-medium-line-height)',
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