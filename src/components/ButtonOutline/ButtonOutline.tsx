// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

export interface ButtonOutlineProps {
  /** Click handler */
  onClick?: () => void;
  /** Mouse enter handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Content slot */
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
  /** Button state */
  state?: 'default' | 'hover' | 'focus' | 'disabled';
}

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
      state = 'default',
    },
    ref
  ) => {
    const isIcon = type === 'icon';
    const isFluid = width === 'fluid';

    const paddingStyles = {
      lg: isIcon ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIcon ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIcon ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIcon ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    };

    const fontStyles = {
      lg: {
        fontSize: 'var(--font-text-md-l-24-medium-size)',
        fontFamily: 'var(--font-text-md-l-24-medium-family)',
        fontWeight: 'var(--font-text-md-l-24-medium-weight)',
      },
      md: {
        fontSize: 'var(--font-text-md-l-24-medium-size)',
        fontFamily: 'var(--font-text-md-l-24-medium-family)',
        fontWeight: 'var(--font-text-md-l-24-medium-weight)',
      },
      sm: {
        fontSize: 'var(--body-sm-font-size)',
        fontFamily: 'var(--font-family-body)',
        fontWeight: 'var(--font-weight-medium---500)',
      },
      xs: {
        fontSize: 'var(--body-xs-font-size)',
        fontFamily: 'var(--font-family-body)',
        fontWeight: 'var(--font-weight-medium---500)',
      },
    };

    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';

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
          paddingLeft: paddingStyles[size],
          paddingRight: paddingStyles[size],
          borderRadius,
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          borderColor: 'var(--color-border-neutral-subtle-400)',
          letterSpacing: 'var(--body-md-letter-spacing)',
          lineHeight: 'var(--body-md-line-height-24)',
          ...fontStyles[size],
          width: isFluid ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
          },
          '&:focus': {
            backgroundColor: 'var(--background-white-base)',
          },
          '&:disabled': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
            borderColor: 'var(--color-border-neutral-subtle-300)',
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