// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

export interface ButtonPrimaryProps {
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
  /** Custom styles */
  sx?: SxProps;
  /** Custom class name */
  className?: string;
  /** Button type: text or icon */
  type?: 'text' | 'icon';
  /** Button size: lg, md, sm, xs */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width: compact or fluid/block */
  width?: 'compact' | 'fluid/block';
}

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
    const isIcon = type === 'icon';
    const paddingSizes = {
      lg: isIcon ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIcon ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIcon ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIcon ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    };

    const borderRadiusSizes = {
      lg: 'var(--radius-border-radius-lg)',
      md: 'var(--radius-border-radius-lg)',
      sm: 'var(--radius-border-radius-lg)',
      xs: 'var(--radius-border-radius-md)',
    };

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
          gap: isIcon ? 'var(--dimension-4---0-25-rem)' : 'var(--dimension-8---0-5-rem)',
          paddingLeft: paddingSizes[size],
          paddingRight: paddingSizes[size],
          borderRadius: borderRadiusSizes[size],
          fontSize: size === 'xs' ? 'var(--font-text-xs-medium-size)' : 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: size === 'xs' ? 'var(--gap-body-xs-letter-spacing)' : 'var(--gap-body-md-letter-spacing)',
          lineHeight: size === 'xs' ? 'var(--body-xs-line-height)' : 'var(--body-md-line-height-24)',
          width: width === 'fluid/block' ? '100%' : 'auto',
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