// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
  /**
   * Click event handler.
   */
  onClick?: () => void;
  /**
   * Hover event handler.
   */
  onHover?: () => void;
  /**
   * Disables the button.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner instead of children.
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
   * Class name for styling.
   */
  className?: string;
  /**
   * Type of the button, either 'text' or 'icon'.
   */
  type?: 'text' | 'icon';
  /**
   * Size of the button.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button.
   */
  width?: 'compact' | 'fluid';
}

/**
 * ButtonOutline component for displaying an outlined button.
 */
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(({
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
}, ref) => {
  const paddingLeft = size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
  const paddingRight = paddingLeft;
  const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';
  const fontSize = size === 'lg' ? 'var(--font-text-md-l-24-medium-size)' : size === 'md' ? 'var(--font-text-md-l-24-medium-size)' : 'var(--font-text-sm-l-20-medium-size)';
  const lineHeight = size === 'lg' ? 'var(--body-md-line-height-24)' : 'var(--body-sm-line-height-l-20)';
  const letterSpacing = size === 'lg' ? 'var(--body-md-letter-spacing)' : 'var(--body-sm-letter-spacing)';
  const fontWeight = 'var(--font-weight-medium---500)';

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
        fontWeight,
        border: 'var(--border-width-thin) solid',
        borderColor: 'var(--color-border-neutral-subtle-200)',
        '&:hover': {
          backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
        },
        '&:disabled': {
          backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
          color: 'var(--color-text-neutral-subtle-300)',
        },
        ...sx,
      }}
    >
      {isLoading ? <CircularProgress size={24} /> : children}
    </MuiButton>
  );
});

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };