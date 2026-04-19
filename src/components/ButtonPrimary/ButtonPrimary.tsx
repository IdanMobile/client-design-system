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
   * Hover event handler.
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
   * Class name overrides.
   */
  className?: string;
  /**
   * Type of button, either 'Text' or 'Icon'.
   */
  type?: 'Text' | 'Icon';
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
 * ButtonPrimary component for primary button actions.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({
    onClick,
    onHover,
    isDisabled = false,
    isLoading = false,
    children,
    sx = {},
    className,
    type = 'Text',
    size = 'md',
    width = 'Compact',
  }, ref) => {
    const paddingLeft = size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
    const paddingRight = paddingLeft;
    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';
    const fontSize = size === 'xs' ? 'var(--body-xs-font-size)' : size === 'sm' ? 'var(--body-sm-font-size)' : 'var(--body-md-font-size)';
    const lineHeight = size === 'xs' ? 'var(--body-xs-line-height)' : size === 'sm' ? 'var(--body-sm-line-height-l-20)' : 'var(--body-md-line-height-24)';
    const letterSpacing = size === 'xs' ? 'var(--body-xs-letter-spacing)' : size === 'sm' ? 'var(--body-sm-letter-spacing)' : 'var(--body-md-letter-spacing)';
    const itemSpacing = size === 'xs' ? 'var(--dimension-4---0-25-rem)' : 'var(--dimension-8---0-5-rem)';
    const paddingHorizontal = type === 'Icon' ? 'var(--dimension-8---0-5-rem)' : paddingLeft;

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
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          borderRadius: borderRadius,
          fontSize: fontSize,
          lineHeight: lineHeight,
          letterSpacing: letterSpacing,
          fontWeight: 'var(--font-weight-medium---500)',
          fontFamily: 'var(--font-family-body)',
          gap: itemSpacing,
          width: width === 'Fluid/block' ? '100%' : 'auto',
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

export { ButtonPrimary };