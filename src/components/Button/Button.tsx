// ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import { SxProps } from '@mui/system';

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
   * Custom styles.
   */
  sx?: SxProps;
  /**
   * Custom class name.
   */
  className?: string;
  /**
   * Type of button: 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button: 'lg', 'md', 'sm', 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button: 'Compact' or 'Fluid/block'.
   */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * ButtonOutline component renders a button with outline style.
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
      size = 'lg',
      width = 'Compact',
    },
    ref
  ) => {
    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          borderColor: 'var(--color-border-primary-bold-100)',
          color: 'var(--color-text-primary-base)',
          padding: size === 'lg' ? '12px 24px' : size === 'md' ? '10px 20px' : size === 'sm' ? '8px 16px' : '6px 12px',
          width: width === 'Fluid/block' ? '100%' : 'auto',
          borderRadius: 'var(--radius-border-radius-sm)',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary)',
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
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export const Button = { Outline: ButtonOutline };