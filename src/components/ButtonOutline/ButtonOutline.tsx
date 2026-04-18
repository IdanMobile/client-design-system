// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

export interface ButtonOutlineProps {
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
  /**
   * Type of button: 'text' or 'icon'.
   */
  type?: 'text' | 'icon';
  /**
   * Size of the button: 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button: 'compact' or 'fluid'.
   */
  width?: 'compact' | 'fluid';
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
    },
    ref
  ) => {
    const isIconButton = type === 'icon';
    const padding = {
      lg: isIconButton ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    };

    const fontSize = {
      lg: 'var(--font-text-md-l-24-medium-size)',
      md: 'var(--font-text-md-l-24-medium-size)',
      sm: 'var(--font-text-sm-l-20-medium-size)',
      xs: 'var(--font-text-xs-medium-size)',
    };

    const lineHeight = {
      lg: 'var(--body-md-line-height-24)',
      md: 'var(--body-md-line-height-24)',
      sm: 'var(--body-sm-line-height-l-20)',
      xs: 'var(--body-xs-line-height)',
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
          paddingLeft: padding[size],
          paddingRight: padding[size],
          borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          fontSize: fontSize[size],
          fontFamily: 'var(--font-family-body)',
          fontWeight: 'var(--font-weight-medium---500)',
          lineHeight: lineHeight[size],
          letterSpacing: size === 'xs' ? 'var(--body-xs-letter-spacing)' : 'var(--body-md-letter-spacing)',
          width: width === 'fluid' ? '100%' : 'auto',
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

export { ButtonOutline };