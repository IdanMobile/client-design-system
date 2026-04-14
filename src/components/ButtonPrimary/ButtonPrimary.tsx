// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

/**
 * Props for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click event handler.
   */
  onClick?: () => void;
  /**
   * Mouse enter event handler.
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
   * Button type: 'text' or 'icon'.
   */
  type?: 'text' | 'icon';
  /**
   * Button size: 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Button width: 'compact' or 'fluid'.
   */
  width?: 'compact' | 'fluid';
}

/**
 * Primary button component with variant support.
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
    const paddingLeft = {
      lg: type === 'icon' ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: type === 'icon' ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: type === 'icon' ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: type === 'icon' ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    }[size];

    const paddingRight = paddingLeft;

    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';

    const fontSize = {
      lg: 'var(--body-md-font-size)',
      md: 'var(--body-md-font-size)',
      sm: 'var(--body-sm-font-size)',
      xs: 'var(--body-xs-font-size)',
    }[size];

    const lineHeight = {
      lg: 'var(--body-md-line-height-24)',
      md: 'var(--body-md-line-height-24)',
      sm: 'var(--body-sm-line-height-l-20)',
      xs: 'var(--body-xs-line-height)',
    }[size];

    const letterSpacing = {
      lg: 'var(--body-md-letter-spacing)',
      md: 'var(--body-md-letter-spacing)',
      sm: 'var(--body-sm-letter-spacing)',
      xs: 'var(--body-xs-letter-spacing)',
    }[size];

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
          borderRadius,
          fontSize,
          lineHeight,
          letterSpacing,
          fontWeight: 'var(--font-weight-medium---500)',
          fontFamily: 'var(--font-family-body)',
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