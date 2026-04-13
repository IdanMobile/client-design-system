// @ts-nocheck
import { createTheme } from '@mui/material/styles';
import tokens from '../../../design-tokens/tokens.json';

/**
 * Resolve a color name from the design tokens to its hex value.
 * Falls back to the provided name if it looks like a valid CSS color,
 * otherwise returns a neutral gray so MUI's createTheme never crashes.
 */
function resolveColor(name: string, fallback = '#808080'): string {
  const colors: Array<{ name: string; value: string }> = (tokens as any).colors || [];
  const match = colors.find((c) => c.name === name);
  if (match?.value) return match.value;
  // If the name itself looks like a valid color (hex, rgb, hsl, named), use it
  if (/^(#|rgb|hsl|transparent|currentcolor)/i.test(name)) return name;
  return fallback;
}

// Resolve palette colors from tokens — MUI needs real hex values for
// internal calculations (contrast, alpha, ripple, etc.)
// If tokens are missing or mismatched, we fall back to the default semantic palette
const brand100 = resolveColor('Brand 100', '#e0f2fe');
const brand300 = resolveColor('Brand 300', '#7dd3fc');
const brand500 = resolveColor('Brand 500', '#0ea5e9');
const brand700 = resolveColor('Brand 700', '#0369a1');
const actionPrimary = resolveColor('Action Primary', '#0ea5e9');
const actionSecondary = resolveColor('Action Secondary', '#6b7280');
const success500 = resolveColor('Success 500', '#22c55e');
const warning500 = resolveColor('Warning 500', '#f59e0b');
const danger500 = resolveColor('Danger 500', '#ef4444');
const surface = resolveColor('Surface', '#ffffff');
const background = resolveColor('Background', '#f8fafc');
const textMain = resolveColor('Text Main', '#111827');
const textMuted = resolveColor('Text Muted', '#6b7280');
const white = resolveColor('White', '#ffffff');
const black = resolveColor('Black', '#000000');
const neutral300 = resolveColor('Neutral 300', '#d1d5db');

/**
 * MUI theme driven by the design system.
 *
 * - `palette` uses resolved hex values (required by MUI internals).
 * - `components.styleOverrides` and `typography` use CSS custom properties
 *   so they react to theme switching (Halloween, Christmas, Dark, etc.)
 *   at runtime without rebuilding the theme.
 */
export const designSystemTheme = createTheme({
  palette: {
    primary: {
      main: actionPrimary,
      light: brand300,
      dark: brand700,
      contrastText: white,
    },
    secondary: {
      main: actionSecondary,
      contrastText: white,
    },
    error: { main: danger500 },
    warning: { main: warning500 },
    success: { main: success500 },
    background: {
      default: background,
      paper: surface,
    },
    text: {
      primary: textMain,
      secondary: textMuted,
    },
  },
  typography: {
    fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
    h1: {
      fontFamily: 'var(--font-heading-1-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-1-size, 32px)',
      fontWeight: 'var(--font-heading-1-weight, 700)' as any,
      lineHeight: 'var(--font-heading-1-line-height, 1.2)',
      letterSpacing: 'var(--font-heading-1-letter-spacing, -0.5px)',
    },
    h2: {
      fontFamily: 'var(--font-heading-2-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-2-size, 24px)',
      fontWeight: 'var(--font-heading-2-weight, 700)' as any,
      lineHeight: 'var(--font-heading-2-line-height, 1.3)',
    },
    h3: {
      fontFamily: 'var(--font-heading-3-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-3-size, 20px)',
      fontWeight: 'var(--font-heading-3-weight, 600)' as any,
      lineHeight: 'var(--font-heading-3-line-height, 1.4)',
    },
    body1: {
      fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
      fontSize: 'var(--font-body-regular-size, 16px)',
      fontWeight: 'var(--font-body-regular-weight, 400)' as any,
      lineHeight: 'var(--font-body-regular-line-height, 1.5)',
    },
    body2: {
      fontFamily: 'var(--font-body-small-family, Roboto, sans-serif)',
      fontSize: 'var(--font-body-small-size, 14px)',
      fontWeight: 'var(--font-body-small-weight, 400)' as any,
      lineHeight: 'var(--font-body-small-line-height, 1.5)',
    },
    caption: {
      fontFamily: 'var(--font-caption-family, Roboto, sans-serif)',
      fontSize: 'var(--font-caption-size, 12px)',
      fontWeight: 'var(--font-caption-weight, 500)' as any,
      lineHeight: 'var(--font-caption-line-height, 1.4)',
      letterSpacing: 'var(--font-caption-letter-spacing, 1px)',
      textTransform: 'var(--font-caption-text-transform, uppercase)' as any,
    },
    display: {
      fontFamily: 'var(--font-display-family, Inter, sans-serif)',
      fontSize: 'var(--font-display-size, 48px)',
      fontWeight: 'var(--font-display-weight, 800)' as any,
      lineHeight: 'var(--font-display-line-height, 1.1)',
      letterSpacing: 'var(--font-display-letter-spacing, -1px)',
    },
    subtitle1: {
      fontFamily: 'var(--font-body-large-family, Roboto, sans-serif)',
      fontSize: 'var(--font-body-large-size, 18px)',
      fontWeight: 'var(--font-body-large-weight, 400)' as any,
      lineHeight: 'var(--font-body-large-line-height, 1.5)',
    },
    code: {
      fontFamily: 'var(--font-code-family, monospace)',
      fontSize: 'var(--font-code-size, 14px)',
      fontWeight: 'var(--font-code-weight, 400)' as any,
      lineHeight: 'var(--font-code-line-height, 1.6)',
    },
  } as any,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    'var(--elevation-level-1, 0px 1px 2px 0px rgba(0,0,0,0.05))',
    'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
    'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
    'var(--elevation-level-3, 0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1))',
    ...Array(19).fill('var(--elevation-level-3, 0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1))'),
    'var(--elevation-modal, 0px 24px 48px -12px rgba(0,0,0,0.25))',
  ] as any,
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: 'var(--border-focus-ring, 3px solid #0ea5e9)',
            outlineOffset: '2px',
          },
          '&.Mui-disabled': {
            opacity: 'var(--opacity-50, 0.5)',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'var(--blur-glass-value, blur(12px))',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          textTransform: 'none' as const,
          boxShadow: 'var(--shadow-small, 0px 2px 4px 0px rgba(0,0,0,0.1))',
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-regular-size, 16px)',
          fontWeight: 500,
          padding: 'var(--gap-8, 8px) var(--gap-16, 16px)',
          '&:hover': {
            boxShadow: 'var(--shadow-medium, 0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06))',
          },
        },
        containedPrimary: {
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
          '&:hover': {
            backgroundColor: 'var(--color-brand-700, #0369a1)',
          },
        },
        outlined: {
          borderColor: 'var(--color-neutral-300, #d1d5db)',
          color: 'var(--color-text-main, #111827)',
          '&:hover': {
            borderColor: 'var(--color-brand-500, #0ea5e9)',
            backgroundColor: 'var(--color-brand-100, #e0f2fe)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-large, 16px)',
          boxShadow: 'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
          border: 'var(--border-divider, 1px solid #e5e7eb)',
          backgroundColor: 'var(--color-surface, #ffffff)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 'var(--radius-medium, 8px)',
            fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
            fontSize: 'var(--font-body-regular-size, 16px)',
            '& fieldset': {
              borderColor: 'var(--color-neutral-300, #d1d5db)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-brand-500, #0ea5e9)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-brand-500, #0ea5e9)',
              borderWidth: '2px',
            },
            '&:active fieldset': {
              boxShadow: 'var(--shadow-inner, inset 0px 2px 4px 0px rgba(0,0,0,0.06))',
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
            color: 'var(--color-text-muted, #6b7280)',
            '&.Mui-focused': {
              color: 'var(--color-brand-500, #0ea5e9)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-round, 9999px)',
          fontFamily: 'var(--font-body-small-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-small-size, 14px)',
        },
        filled: {
          backgroundColor: 'var(--color-brand-100, #e0f2fe)',
          color: 'var(--color-brand-700, #0369a1)',
        },
        outlined: {
          borderColor: 'var(--color-neutral-300, #d1d5db)',
          color: 'var(--color-text-main, #111827)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: 'var(--color-brand-500, #0ea5e9)',
            '& + .MuiSwitch-track': {
              backgroundColor: 'var(--color-brand-300, #7dd3fc)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-surface, #ffffff)',
          color: 'var(--color-text-main, #111827)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
          color: 'var(--color-white, #ffffff)',
          width: 'var(--size-avatar-md, 48px)',
          height: 'var(--size-avatar-md, 48px)',
        },
      },
      variants: [
        {
          props: { variant: 'small' as any },
          style: {
            width: 'var(--size-avatar-sm, 32px)',
            height: 'var(--size-avatar-sm, 32px)',
            fontSize: 'var(--font-body-small-size, 14px)',
          },
        },
        {
          props: { variant: 'medium' as any },
          style: {
            width: 'var(--size-avatar-md, 48px)',
            height: 'var(--size-avatar-md, 48px)',
            fontSize: 'var(--font-body-regular-size, 16px)',
          },
        },
        {
          props: { variant: 'large' as any },
          style: {
            width: 'var(--size-avatar-lg, 64px)',
            height: 'var(--size-avatar-lg, 64px)',
            fontSize: 'var(--font-heading-3-size, 20px)',
          },
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: 'var(--size-icon-sm, 16px)',
        },
        fontSizeMedium: {
          fontSize: 'var(--size-icon-md, 24px)',
        },
        fontSizeLarge: {
          fontSize: 'var(--size-icon-lg, 32px)',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
        },
        colorError: {
          backgroundColor: 'var(--color-danger-500, #ef4444)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'var(--color-neutral-200, #e5e7eb)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          '&.Mui-selected': {
            backgroundColor: 'var(--color-brand-100, #e0f2fe)',
            color: 'var(--color-brand-700, #0369a1)',
          },
          '&:hover': {
            backgroundColor: 'var(--color-neutral-100, #f3f4f6)',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontWeight: 600,
            backgroundColor: 'var(--color-neutral-100, #f3f4f6)',
            color: 'var(--color-text-main, #111827)',
            fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-regular-size, 16px)',
          borderBottom: 'var(--border-divider, 1px solid #e5e7eb)',
          color: 'var(--color-text-main, #111827)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'var(--color-neutral-900, #111827)',
          color: 'var(--color-white, #ffffff)',
          fontFamily: 'var(--font-body-small-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-small-size, 14px)',
          borderRadius: 'var(--radius-small, 4px)',
          padding: 'var(--gap-4, 4px) var(--gap-8, 8px)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--radius-large, 16px)',
          boxShadow: 'var(--elevation-modal, 0px 24px 48px -12px rgba(0,0,0,0.25))',
          '&:hover': {
            boxShadow: 'var(--shadow-large, 0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05))',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-heading-3-family, Inter, sans-serif)',
          fontSize: 'var(--font-heading-3-size, 20px)',
          fontWeight: 'var(--font-heading-3-weight, 600)' as any,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: 'var(--color-brand-500, #0ea5e9)',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-round, 9999px)',
          backgroundColor: 'var(--color-neutral-200, #e5e7eb)',
        },
        barColorPrimary: {
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-neutral-200, #e5e7eb)',
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-neutral-900, #111827)',
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          borderRadius: 'var(--radius-medium, 8px)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'var(--color-neutral-400, #9ca3af)',
          '&.Mui-checked': {
            color: 'var(--color-brand-500, #0ea5e9)',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'var(--color-neutral-400, #9ca3af)',
          '&.Mui-checked': {
            color: 'var(--color-brand-500, #0ea5e9)',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: 'var(--color-brand-500, #0ea5e9)',
        },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 8px var(--color-brand-100, #e0f2fe)',
          },
        },
        track: {
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
        },
        rail: {
          backgroundColor: 'var(--color-neutral-300, #d1d5db)',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: 'var(--color-warning-500, #f59e0b)',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--radius-medium, 8px)',
          boxShadow: 'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
        },
        option: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-regular-size, 16px)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          textTransform: 'none' as const,
          '&.Mui-selected': {
            color: 'var(--color-brand-500, #0ea5e9)',
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-small-size, 14px)',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
            borderRadius: 'var(--radius-medium, 8px)',
            '&.Mui-selected': {
              backgroundColor: 'var(--color-brand-500, #0ea5e9)',
              color: 'var(--color-white, #ffffff)',
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--radius-medium, 8px)',
          boxShadow: 'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-regular-size, 16px)',
          '&.Mui-selected': {
            backgroundColor: 'var(--color-brand-100, #e0f2fe)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--color-surface, #ffffff)',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: 'var(--color-brand-500, #0ea5e9)',
          },
          '&.Mui-completed': {
            color: 'var(--color-success-500, #22c55e)',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          border: 'var(--border-divider, 1px solid #e5e7eb)',
          '&:before': { display: 'none' },
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-brand-700, #0369a1)',
          boxShadow: 'var(--elevation-level-1, 0px 1px 2px 0px rgba(0,0,0,0.05))',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
          '&:hover': {
            boxShadow: 'var(--elevation-level-3, 0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1))',
          },
        },
        primary: {
          backgroundColor: 'var(--color-brand-500, #0ea5e9)',
          '&:hover': {
            backgroundColor: 'var(--color-brand-700, #0369a1)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'var(--color-neutral-100, #f3f4f6)',
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          textTransform: 'none' as const,
          borderColor: 'var(--color-neutral-300, #d1d5db)',
          '&.Mui-selected': {
            backgroundColor: 'var(--color-brand-100, #e0f2fe)',
            color: 'var(--color-brand-700, #0369a1)',
            borderColor: 'var(--color-brand-500, #0ea5e9)',
          },
        },
      },
    },
  },
});
