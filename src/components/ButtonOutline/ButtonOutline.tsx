// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
  /** Click event handler */
  onClick?: () => void;
  /** Mouse enter event handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Button content */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: Record<string, unknown>;
  /** Class name overrides */
  className?: string;
  /** Button type */
  type?: 'text' | 'icon';
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width */
  width?: 'compact' | 'fluid';
}

/**
 * ButtonOutline component for rendering an outlined button with various styles.
 */
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
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
    const paddingLeft = size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
    const paddingRight = paddingLeft;
    const paddingIcon = size === 'xs' ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-12---0-75-rem)';
    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';
    const fontSize = size === 'lg' ? 'var(--font-text-md-l-24-medium-size)' : size === 'md' ? 'var(--font-text-md-l-24-medium-size)' : 'var(--font-text-sm-l-20-medium-size)';
    const fontFamily = 'var(--font-text-md-l-24-medium-family)';
    const fontWeight = 'var(--font-text-md-l-24-medium-weight)';

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
          paddingLeft: type === 'icon' ? paddingIcon : paddingLeft,
          paddingRight: type === 'icon' ? paddingIcon : paddingRight,
          borderRadius,
          fontSize,
          fontFamily,
          fontWeight,
          border: 'var(--border-width-thin) solid',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
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