// src/components/ChipTag/ChipTag.tsx
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';

/**
 * Props for the ChipTag component.
 */
export interface ChipTagProps {
  /** Click handler */
  onClick?: () => void;
  /** Hover handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Content of the chip */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: Record<string, unknown>;
  /** Class overrides */
  className?: string;
  /** Type variant */
  type?: 'Gray' | 'Gray - outline' | 'Primary' | 'Primary - outline';
  /** Size variant */
  size?: 'xs' | 'sm' | 'md';
  /** State variant */
  state?: 'Default' | 'Hover' | 'Disabled';
  /** Selection state */
  isSelected?: boolean;
}

/**
 * ChipTag component for displaying tags or chips with various styles.
 */
const ChipTag = React.forwardRef<HTMLButtonElement, ChipTagProps>(({
  onClick,
  onHover,
  isDisabled = false,
  isLoading = false,
  children,
  sx = {},
  className,
  type = 'Gray',
  size = 'xs',
  state = 'Default',
  isSelected = false,
}, ref) => {
  const baseStyles = {
    gap: 'var(--gap-body-xs-letter-spacing)',
    padding: size === 'xs' ? '4px 8px' : '6px 8px',
    borderRadius: 'var(--radius-border-radius-xs)',
    fontSize: size === 'xs' ? 'var(--font-text-xs-medium-size)' : 'var(--font-text-sm-l-20-medium-size)',
    fontFamily: 'var(--font-text-xs-medium-family)',
    fontWeight: 'var(--font-text-xs-medium-weight)',
    lineHeight: size === 'xs' ? 'var(--font-text-xs-medium-line-height)' : 'var(--font-text-sm-l-20-medium-line-height)',
    letterSpacing: size === 'xs' ? 'var(--gap-body-xs-letter-spacing)' : 'var(--gap-body-sm-letter-spacing)',
    '&:hover': {
      backgroundColor: state === 'Hover' ? 'var(--color-background-state-interaction-hover-neutral)' : undefined,
    },
    '&.Mui-disabled': {
      backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
      color: 'var(--color-text-neutral-subtle-300)',
    },
  };

  return (
    <ButtonBase
      ref={ref}
      onClick={onClick}
      onMouseEnter={onHover}
      disabled={isDisabled || isLoading}
      className={className}
      sx={{ ...baseStyles, ...sx }}
    >
      {isLoading ? 'Loading...' : children}
    </ButtonBase>
  );
});

export { ChipTag };