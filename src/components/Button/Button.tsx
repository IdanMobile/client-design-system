// ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

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
  /** Button content */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: SxProps;
  /** Class overrides */
  className?: string;
  /** Button type: Text or Icon */
  type?: 'Text button' | 'Icon button';
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * Primary button component for the design system.
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: size === 'lg' ? '12px 24px' : '8px 16px',
          borderRadius: '5px',
          backgroundColor: isDisabled
            ? 'var(--color-background-state-interaction-disabled-neutral)'
            : 'var(--color-background-primary-bold-100)',
          color: 'var(--color-text-white-base)',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary)',
          },
          '&:disabled': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
            color: 'var(--color-text-neutral-subtle-300)',
          },
          width: width === 'Fluid/block' ? '100%' : 'auto',
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} sx={{ color: 'var(--color-text-white-base)' }} /> : children}
      </MuiButton>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export const Button = { Primary: ButtonPrimary };