// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';

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
    const isIconButton = type === 'icon';

    const baseStyles = {
      gap: 'var(--dimension-8---0-5-rem)',
      paddingLeft: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      paddingRight: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      borderRadius: 'var(--radius-border-radius-none)',
      borderTopWidth: 'var(--border-width-thin)',
      borderBottomWidth: 'var(--border-width-thin)',
      borderLeftWidth: 'var(--border-width-thin)',
      borderRightWidth: 'var(--border-width-thin)',
      letterSpacing: 'var(--body-md-letter-spacing)',
      fontSize: 'var(--body-md-font-size)',
      fontFamily: 'var(--font-family-body)',
      lineHeight: 'var(--body-md-line-height-24)',
      fontWeight: 'var(--font-weight-medium---500)',
      '&:hover': {
        backgroundColor: 'var(--background/state-interaction/hover/neutral)',
      },
      '&:focus': {
        backgroundColor: 'var(--background-white-base)',
      },
      '&.Mui-disabled': {
        backgroundColor: 'var(--background/state-interaction/disabled/neutral)',
      },
    };

    return (
      <ButtonBase
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          ...baseStyles,
          ...sx,
        }}
      >
        {isLoading ? 'Loading...' : children}
      </ButtonBase>
    );
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };