// ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import { SxProps } from '@mui/system';

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
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the button is in a loading state.
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
   * Class name for custom styling.
   */
  className?: string;
  /**
   * Type of button, either 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button.
   */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * Primary button component.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({
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
  }, ref) => {
    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          backgroundColor: 'var(--color-background-primary-bold-100)',
          color: 'var(--color-text-white-base)',
          padding: size === 'lg' ? '12px 24px' : '8px 16px',
          width: width === 'Fluid/block' ? '100%' : 'auto',
          borderRadius: '5px',
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
        {isLoading ? <CircularProgress size={24} sx={{ color: 'var(--color-text-white-base)' }} /> : children}
      </MuiButton>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export const Button = { Primary: ButtonPrimary };