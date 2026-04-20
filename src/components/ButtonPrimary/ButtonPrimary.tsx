// src/components/ButtonPrimary/ButtonPrimary.tsx

import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonPrimaryProps {
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
  type?: 'text' | 'icon';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  width?: 'compact' | 'fluid';
}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(({
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
}, ref) => {
  const getPadding = () => {
    if (type === 'icon') {
      switch (size) {
        case 'lg':
          return 'var(--dimension-12---0-75-rem)';
        case 'md':
        case 'sm':
        case 'xs':
          return 'var(--dimension-8---0-5-rem)';
        default:
          return 'var(--dimension-8---0-5-rem)';
      }
    } else {
      switch (size) {
        case 'lg':
          return 'var(--dimension-24---1-5-rem)';
        case 'md':
          return 'var(--dimension-20---1-25-rem)';
        case 'sm':
          return 'var(--dimension-16---1-rem)';
        case 'xs':
          return 'var(--dimension-16---1-rem)';
        default:
          return 'var(--dimension-20---1-25-rem)';
      }
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'lg':
      case 'md':
        return 'var(--font-text-md-l-24-medium-size)';
      case 'sm':
        return 'var(--font-text-sm-l-20-medium-size)';
      case 'xs':
        return 'var(--font-text-xs-medium-size)';
      default:
        return 'var(--font-text-md-l-24-medium-size)';
    }
  };

  const getLineHeight = () => {
    switch (size) {
      case 'lg':
      case 'md':
        return 'var(--body-md-line-height-24)';
      case 'sm':
        return 'var(--body-sm-line-height-l-20)';
      case 'xs':
        return 'var(--body-xs-line-height)';
      default:
        return 'var(--body-md-line-height-24)';
    }
  };

  return (
    <ButtonBase
      ref={ref}
      onClick={onClick}
      onMouseEnter={onHover}
      disabled={isDisabled || isLoading}
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: getPadding(),
        paddingRight: getPadding(),
        borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
        fontSize: getFontSize(),
        fontFamily: 'var(--font-text-md-l-24-medium-family)',
        fontWeight: 'var(--font-text-md-l-24-medium-weight)',
        lineHeight: getLineHeight(),
        letterSpacing: 'var(--body-md-letter-spacing)',
        '&:hover': {
          backgroundColor: 'var(--color-background-state-interaction-hover-primary)',
        },
        '&:disabled': {
          backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
        },
        // Additional properties from the Style Manifest
        gap: 'var(--dimension-8---0-5-rem)',
        borderTopLeftRadius: 'var(--border-radius-lg)',
        borderTopRightRadius: 'var(--border-radius-lg)',
        borderBottomLeftRadius: 'var(--border-radius-lg)',
        borderBottomRightRadius: 'var(--border-radius-lg)',
        paragraphSpacing: 'var(--body-md-paragaph-spacing)',
        ...sx,
      }}
    >
      {isLoading ? <CircularProgress size={24} /> : children}
    </ButtonBase>
  );
});

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };
