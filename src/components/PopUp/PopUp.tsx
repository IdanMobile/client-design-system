import React from 'react';
import type { SxProps } from '@mui/material';
import {
  MuiBox,
  MuiStack,
  MuiTypography,
  MuiButton,
  MuiIconButton,
  MuiDivider,
} from '../adapters/mui/internal';

export interface PopupProps {
  // Content props
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  // Events
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  onClick?: () => void;
  onHover?: () => void;
  // State
  isDisabled?: boolean;
  isLoading?: boolean;
  open?: boolean;
  // Slots
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
}

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  (
    {
      title = 'Confirm Action',
      description = 'Are you sure you want to proceed? This action cannot be undone.',
      confirmLabel = 'Confirm',
      cancelLabel = 'Cancel',
      onConfirm,
      onCancel,
      onClose,
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      open = true,
      children,
      sx,
      className,
    },
    ref
  ) => {
    if (!open) return null;

    return (
      <MuiBox
        ref={ref}
        data-figma-component="Popup"
        className={className}
        onMouseEnter={onHover}
        onClick={onClick}
        sx={{
          position: 'relative',
          width: '400px',
          backgroundColor: 'var(--color-surface, #091C2A)',
          border: '1px solid var(--color-border-divider, #2A4051)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0px 8px 32px 0px rgba(0,0,0,0.48)',
          color: 'var(--color-text-main, #D7E3EC)',
          display: 'flex',
          flexDirection: 'column',
          ...(sx as SxProps),
        }}
      >
        {/* Header */}
        <MuiStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 'var(--gap-space-xl, 24px)',
            pt: 'var(--gap-space-xl, 24px)',
            pb: 'var(--gap-space-m, 16px)',
          }}
        >
          <MuiTypography
            sx={{
              fontFamily: 'var(--font-heading-1-family, Inter)',
              fontSize: 'var(--font-heading-1-size, 18px)',
              fontWeight: 'var(--font-heading-1-weight, 600)',
              lineHeight: 'normal',
              color: 'var(--color-text-main, #D7E3EC)',
            }}
          >
            {title}
          </MuiTypography>

          <MuiIconButton
            onClick={onClose ?? onCancel}
            size="small"
            sx={{
              color: 'var(--color-text-muted, #90A3B1)',
              padding: '4px',
              '&:hover': {
                backgroundColor: 'var(--color-grey-buttons-bg, #1B293A)',
                color: 'var(--color-text-main, #D7E3EC)',
              },
            }}
          >
            <CloseIcon />
          </MuiIconButton>
        </MuiStack>

        {/* Divider */}
        <MuiDivider
          sx={{
            borderColor: 'var(--color-border-divider, #2A4051)',
            mx: 0,
          }}
        />

        {/* Body */}
        <MuiBox
          sx={{
            px: 'var(--gap-space-xl, 24px)',
            py: 'var(--gap-space-xl, 24px)',
            flex: 1,
          }}
        >
          <MuiTypography
            sx={{
              fontFamily: 'var(--font-body-regular-family, Inter)',
              fontSize: 'var(--font-body-regular-size, 14px)',
              fontWeight: 'var(--font-body-regular-weight, 400)',
              lineHeight: '1.6',
              color: 'var(--color-text-muted, #90A3B1)',
            }}
          >
            {description}
          </MuiTypography>
          {children}
        </MuiBox>

        {/* Divider */}
        <MuiDivider
          sx={{
            borderColor: 'var(--color-border-divider, #2A4051)',
          }}
        />

        {/* Footer / Actions */}
        <MuiStack
          direction="row"
          spacing='var(--gap-space-xs, 8px)'
          justifyContent="flex-end"
          sx={{
            px: 'var(--gap-space-xl, 24px)',
            py: 'var(--gap-space-m, 16px)',
            backgroundColor: 'var(--color-surface, #091C2A)',
          }}
        >
          {/* Cancel Button */}
          <MuiButton
            variant="outlined"
            onClick={onCancel}
            disabled={isDisabled || isLoading}
            sx={{
              fontFamily: 'var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)',
              fontSize: 'var(--font-headline-med-headline-reg-label-large-14-med-size, 14px)',
              fontWeight: 'var(--font-headline-med-headline-reg-label-large-14-med-weight, 500)',
              lineHeight: 'normal',
              color: 'var(--color-text-main, #D7E3EC)',
              borderColor: 'var(--color-border-divider, #2A4051)',
              backgroundColor: 'var(--color-grey-buttons-bg, #1B293A)',
              borderRadius: '8px',
              px: 'var(--gap-space-m, 16px)',
              py: '8px',
              textTransform: 'none',
              minWidth: '90px',
              '&:hover': {
                backgroundColor: 'var(--color-grey-text-field, #2F3649)',
                borderColor: 'var(--color-grey-stroke, #2A4051)',
              },
              '&:disabled': {
                opacity: 0.5,
                color: 'var(--color-text-muted, #90A3B1)',
                borderColor: 'var(--color-border-divider, #2A4051)',
              },
            }}
          >
            {cancelLabel}
          </MuiButton>

          {/* Confirm Button */}
          <MuiButton
            variant="contained"
            onClick={onConfirm}
            disabled={isDisabled || isLoading}
            sx={{
              fontFamily: 'var(--font-headline-med-headline-reg-label-large-14-med-family, Inter)',
              fontSize: 'var(--font-headline-med-headline-reg-label-large-14-med-size, 14px)',
              fontWeight: 'var(--font-headline-med-headline-reg-label-large-14-med-weight, 500)',
              lineHeight: 'normal',
              color: 'var(--color-white, #FFFFFF)',
              backgroundColor: 'var(--color-brand-500, #3074F3)',
              borderRadius: '8px',
              px: 'var(--gap-space-m, 16px)',
              py: '8px',
              textTransform: 'none',
              minWidth: '90px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'var(--color-brand-700, #2457B6)',
                boxShadow: 'none',
              },
              '&:disabled': {
                opacity: 0.5,
                backgroundColor: 'var(--color-brand-500, #3074F3)',
                color: 'var(--color-white, #FFFFFF)',
              },
            }}
          >
            {isLoading ? 'Loading...' : confirmLabel}
          </MuiButton>
        </MuiStack>
      </MuiBox>
    );
  }
);

Popup.displayName = 'Popup';

export { Popup };
