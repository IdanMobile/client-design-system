// @ts-nocheck
import { createTheme } from '@mui/material/styles';
import tokens from '../../../design-tokens/tokens.json';
import { vars } from '../../../design-tokens/vars';

/**
 * MUI theme driven by the design system.
 *
 * ### How it works
 *  1. `palette` uses **resolved hex values** (required — MUI computes contrast,
 *     alpha, hover ripple internally and cannot reason about CSS variables).
 *  2. Every other property (`typography`, `shape`, `shadows`, component overrides)
 *     references the typed `vars` object from `src/design-tokens/vars.ts`. That
 *     object exposes `var(--token)` strings generated from the live tokens, so
 *     theme switching, dark mode, and new Figma tokens flow in automatically
 *     without rebuilding the theme.
 *
 * Token names are guaranteed to exist by the server token pipeline:
 *   - Colors: brand100-900, neutral50-900, success/warning/danger 100/500/700,
 *     background, surface, text-main, text-muted, border-divider, white, black
 *   - Radius: small, medium, large, round
 *   - Elevations: level-1, level-2, level-3, modal
 *   - Borders: focus-ring, divider
 *   - Gaps: gap-4, gap-8, gap-16
 *   - Sizes: avatar-sm/md/lg, icon-sm/md/lg
 */

function resolveColor(name: string, fallback = '#808080'): string {
  const colors: Array<{ name: string; value: string }> = (tokens as any).colors || [];
  const match = colors.find((c) => c.name === name);
  if (match?.value) return match.value;
  if (/^(#|rgb|hsl|transparent|currentcolor)/i.test(name)) return name;
  return fallback;
}

// Typed CSS-variable helpers — generated vars.ts doesn't emit an entry unless
// the token exists, so we gracefully fall back when the library is missing a
// shade. This keeps dev mode rendering even on a fresh Figma file.
const varColor = (key: keyof typeof vars.color, fallback: string): string =>
  (vars.color as Record<string, string>)[key] ?? fallback;

const varColorToken = (name: string, fallback: string): string => {
  const tokenObj = (vars as any).colorToken as Record<string, string> | undefined;
  return tokenObj?.[name] ?? fallback;
};

const varRadius = (key: 'small' | 'medium' | 'large' | 'round', fallback: string): string =>
  (vars as any).radius?.[key] ?? fallback;

const varElevation = (name: string, fallback: string): string =>
  (vars as any).elevation?.[name] ?? fallback;

const varShadow = (name: string, fallback: string): string =>
  (vars as any).shadow?.[name] ?? fallback;

const varBorder = (name: string, fallback: string): string =>
  (vars as any).border?.[name] ?? fallback;

const varSize = (name: string, fallback: string): string =>
  (vars as any).size?.[name] ?? fallback;

const varSpacing = (name: string, fallback: string): string =>
  (vars as any).spacing?.[name] ?? fallback;

const varOpacity = (name: string, fallback: string | number): string | number =>
  (vars as any).opacity?.[name] ?? fallback;

const varBlur = (name: string, fallback: string): string =>
  (vars as any).blur?.[name] ?? fallback;

const varFont = (name: string, prop: 'family' | 'size' | 'weight' | 'lineHeight' | 'letterSpacing' | 'textTransform', fallback: string): string => {
  const f = (vars as any).font?.[name];
  return f?.[prop] ?? fallback;
};

// ── Palette resolution (MUI needs real hex values) ──────────────────────────
const brand100 = resolveColor('Brand 100', '#e0f2fe');
const brand300 = resolveColor('Brand 300', '#7dd3fc');
const brand500 = resolveColor('Brand 500', '#0ea5e9');
const brand700 = resolveColor('Brand 700', '#0369a1');
const actionPrimary = resolveColor('Action Primary', brand500);
const actionSecondary = resolveColor('Action Secondary', '#6b7280');
const success500 = resolveColor('Success 500', '#22c55e');
const warning500 = resolveColor('Warning 500', '#f59e0b');
const danger500 = resolveColor('Danger 500', '#ef4444');
const surface = resolveColor('Surface', '#ffffff');
const background = resolveColor('Background', '#f8fafc');
const textMain = resolveColor('Text Main', '#111827');
const textMuted = resolveColor('Text Muted', '#6b7280');
const white = resolveColor('White', '#ffffff');

// Silence "unused" warnings for tokens referenced only via CSS var fallbacks
void brand100; void brand300; void brand700;

export const designSystemTheme = createTheme({
  palette: {
    primary:   { main: actionPrimary, light: brand300, dark: brand700, contrastText: white },
    secondary: { main: actionSecondary, contrastText: white },
    error:     { main: danger500 },
    warning:   { main: warning500 },
    success:   { main: success500 },
    background: { default: background, paper: surface },
    text:       { primary: textMain, secondary: textMuted },
  },
  typography: {
    fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
    h1: {
      fontFamily:    varFont('heading1', 'family', 'Inter, sans-serif'),
      fontSize:      varFont('heading1', 'size', '32px'),
      fontWeight:    varFont('heading1', 'weight', '700') as any,
      lineHeight:    varFont('heading1', 'lineHeight', '1.2'),
      letterSpacing: varFont('heading1', 'letterSpacing', '-0.5px'),
    },
    h2: {
      fontFamily: varFont('heading2', 'family', 'Inter, sans-serif'),
      fontSize:   varFont('heading2', 'size', '24px'),
      fontWeight: varFont('heading2', 'weight', '700') as any,
      lineHeight: varFont('heading2', 'lineHeight', '1.3'),
    },
    h3: {
      fontFamily: varFont('heading3', 'family', 'Inter, sans-serif'),
      fontSize:   varFont('heading3', 'size', '20px'),
      fontWeight: varFont('heading3', 'weight', '600') as any,
      lineHeight: varFont('heading3', 'lineHeight', '1.4'),
    },
    body1: {
      fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
      fontSize:   varFont('bodyRegular', 'size', '16px'),
      fontWeight: varFont('bodyRegular', 'weight', '400') as any,
      lineHeight: varFont('bodyRegular', 'lineHeight', '1.5'),
    },
    body2: {
      fontFamily: varFont('bodySmall', 'family', 'Roboto, sans-serif'),
      fontSize:   varFont('bodySmall', 'size', '14px'),
      fontWeight: varFont('bodySmall', 'weight', '400') as any,
      lineHeight: varFont('bodySmall', 'lineHeight', '1.5'),
    },
    caption: {
      fontFamily:    varFont('caption', 'family', 'Roboto, sans-serif'),
      fontSize:      varFont('caption', 'size', '12px'),
      fontWeight:    varFont('caption', 'weight', '500') as any,
      lineHeight:    varFont('caption', 'lineHeight', '1.4'),
      letterSpacing: varFont('caption', 'letterSpacing', '1px'),
      textTransform: varFont('caption', 'textTransform', 'uppercase') as any,
    },
    display: {
      fontFamily:    varFont('display', 'family', 'Inter, sans-serif'),
      fontSize:      varFont('display', 'size', '48px'),
      fontWeight:    varFont('display', 'weight', '800') as any,
      lineHeight:    varFont('display', 'lineHeight', '1.1'),
      letterSpacing: varFont('display', 'letterSpacing', '-1px'),
    },
    subtitle1: {
      fontFamily: varFont('bodyLarge', 'family', 'Roboto, sans-serif'),
      fontSize:   varFont('bodyLarge', 'size', '18px'),
      fontWeight: varFont('bodyLarge', 'weight', '400') as any,
      lineHeight: varFont('bodyLarge', 'lineHeight', '1.5'),
    },
    code: {
      fontFamily: varFont('code', 'family', 'monospace'),
      fontSize:   varFont('code', 'size', '14px'),
      fontWeight: varFont('code', 'weight', '400') as any,
      lineHeight: varFont('code', 'lineHeight', '1.6'),
    },
  } as any,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    varElevation('level1', '0px 1px 2px 0px rgba(0,0,0,0.05)'),
    varElevation('level2', '0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1)'),
    varElevation('level2', '0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1)'),
    varElevation('level3', '0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1)'),
    ...Array(19).fill(varElevation('level3', '0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1)')),
    varElevation('modal', '0px 24px 48px -12px rgba(0,0,0,0.25)'),
  ] as any,
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: varBorder('focusRing', '3px solid #0ea5e9'),
            outlineOffset: '2px',
          },
          '&.Mui-disabled': {
            opacity: varOpacity('50', 0.5),
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: varBlur('glass', 'blur(12px)'),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium', '8px'),
          textTransform: 'none' as const,
          boxShadow: varShadow('small', '0px 2px 4px 0px rgba(0,0,0,0.1)'),
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodyRegular', 'size', '16px'),
          fontWeight: 500,
          padding: `${varSpacing('gap8', '8px')} ${varSpacing('gap16', '16px')}`,
          '&:hover': {
            boxShadow: varShadow('medium', '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06))'),
          },
        },
        containedPrimary: {
          backgroundColor: varColor('brand500', '#0ea5e9'),
          '&:hover': {
            backgroundColor: varColor('brand700', '#0369a1'),
          },
        },
        outlined: {
          borderColor: varColor('neutral300', '#d1d5db'),
          color:       varColor('textMain', '#111827'),
          '&:hover': {
            borderColor:     varColor('brand500', '#0ea5e9'),
            backgroundColor: varColor('brand100', '#e0f2fe'),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('large', '16px'),
          boxShadow:    varElevation('level2', '0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1)'),
          border:       varBorder('divider', '1px solid #e5e7eb'),
          backgroundColor: varColor('surface', '#ffffff'),
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: varRadius('medium', '8px'),
            fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
            fontSize:   varFont('bodyRegular', 'size', '16px'),
            '& fieldset': {
              borderColor: varColor('neutral300', '#d1d5db'),
            },
            '&:hover fieldset': {
              borderColor: varColor('brand500', '#0ea5e9'),
            },
            '&.Mui-focused fieldset': {
              borderColor: varColor('brand500', '#0ea5e9'),
              borderWidth: '2px',
            },
            '&:active fieldset': {
              boxShadow: varShadow('inner', 'inset 0px 2px 4px 0px rgba(0,0,0,0.06)'),
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
            color: varColor('textMuted', '#6b7280'),
            '&.Mui-focused': {
              color: varColor('brand500', '#0ea5e9'),
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('round', '9999px'),
          fontFamily: varFont('bodySmall', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodySmall', 'size', '14px'),
        },
        filled: {
          backgroundColor: varColor('brand100', '#e0f2fe'),
          color:           varColor('brand700', '#0369a1'),
        },
        outlined: {
          borderColor: varColor('neutral300', '#d1d5db'),
          color:       varColor('textMain', '#111827'),
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium', '8px'),
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: varColor('brand500', '#0ea5e9'),
            '& + .MuiSwitch-track': {
              backgroundColor: varColor('brand300', '#7dd3fc'),
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: varColor('surface', '#ffffff'),
          color:           varColor('textMain', '#111827'),
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          backgroundColor: varColor('brand500', '#0ea5e9'),
          color: varColor('white', '#ffffff'),
          width:  varSize('avatarMd', '48px'),
          height: varSize('avatarMd', '48px'),
        },
      },
      variants: [
        {
          props: { variant: 'small' as any },
          style: {
            width:    varSize('avatarSm', '32px'),
            height:   varSize('avatarSm', '32px'),
            fontSize: varFont('bodySmall', 'size', '14px'),
          },
        },
        {
          props: { variant: 'medium' as any },
          style: {
            width:    varSize('avatarMd', '48px'),
            height:   varSize('avatarMd', '48px'),
            fontSize: varFont('bodyRegular', 'size', '16px'),
          },
        },
        {
          props: { variant: 'large' as any },
          style: {
            width:    varSize('avatarLg', '64px'),
            height:   varSize('avatarLg', '64px'),
            fontSize: varFont('heading3', 'size', '20px'),
          },
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall:  { fontSize: varSize('iconSm', '16px') },
        fontSizeMedium: { fontSize: varSize('iconMd', '24px') },
        fontSizeLarge:  { fontSize: varSize('iconLg', '32px') },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: { backgroundColor: varColor('brand500', '#0ea5e9') },
        colorError:   { backgroundColor: varColor('danger500', '#ef4444') },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: varColor('neutral200', '#e5e7eb') },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif') },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium', '8px'),
          '&.Mui-selected': {
            backgroundColor: varColor('brand100', '#e0f2fe'),
            color:           varColor('brand700', '#0369a1'),
          },
          '&:hover': {
            backgroundColor: varColor('neutral100', '#f3f4f6'),
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontWeight: 600,
            backgroundColor: varColor('neutral100', '#f3f4f6'),
            color:           varColor('textMain', '#111827'),
            fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodyRegular', 'size', '16px'),
          borderBottom: varBorder('divider', '1px solid #e5e7eb'),
          color: varColor('textMain', '#111827'),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: varColor('neutral900', '#111827'),
          color:           varColor('white', '#ffffff'),
          fontFamily: varFont('bodySmall', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodySmall', 'size', '14px'),
          borderRadius: varRadius('small', '4px'),
          padding: `${varSpacing('gap4', '4px')} ${varSpacing('gap8', '8px')}`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('large', '16px'),
          boxShadow: varElevation('modal', '0px 24px 48px -12px rgba(0,0,0,0.25)'),
          '&:hover': {
            boxShadow: varShadow('large', '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)'),
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: varFont('heading3', 'family', 'Inter, sans-serif'),
          fontSize:   varFont('heading3', 'size', '20px'),
          fontWeight: varFont('heading3', 'weight', '600') as any,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: { color: varColor('brand500', '#0ea5e9') },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('round', '9999px'),
          backgroundColor: varColor('neutral200', '#e5e7eb'),
        },
        barColorPrimary: {
          backgroundColor: varColor('brand500', '#0ea5e9'),
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: { backgroundColor: varColor('neutral200', '#e5e7eb') },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: varColor('neutral900', '#111827'),
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          borderRadius: varRadius('medium', '8px'),
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: varColor('neutral400', '#9ca3af'),
          '&.Mui-checked': { color: varColor('brand500', '#0ea5e9') },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: varColor('neutral400', '#9ca3af'),
          '&.Mui-checked': { color: varColor('brand500', '#0ea5e9') },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium', '8px'),
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root:  { color: varColor('brand500', '#0ea5e9') },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0 0 0 8px ${varColor('brand100', '#e0f2fe')}`,
          },
        },
        track: { backgroundColor: varColor('brand500', '#0ea5e9') },
        rail:  { backgroundColor: varColor('neutral300', '#d1d5db') },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: { color: varColor('warning500', '#f59e0b') },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('medium', '8px'),
          boxShadow:    varElevation('level2', '0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1)'),
        },
        option: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodyRegular', 'size', '16px'),
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: varColor('brand500', '#0ea5e9') },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          textTransform: 'none' as const,
          '&.Mui-selected': { color: varColor('brand500', '#0ea5e9') },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodySmall', 'size', '14px'),
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
            borderRadius: varRadius('medium', '8px'),
            '&.Mui-selected': {
              backgroundColor: varColor('brand500', '#0ea5e9'),
              color: varColor('white', '#ffffff'),
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('medium', '8px'),
          boxShadow:    varElevation('level2', '0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1)'),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          fontSize:   varFont('bodyRegular', 'size', '16px'),
          '&.Mui-selected': {
            backgroundColor: varColor('brand100', '#e0f2fe'),
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: varColor('surface', '#ffffff') },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active':    { color: varColor('brand500', '#0ea5e9') },
          '&.Mui-completed': { color: varColor('success500', '#22c55e') },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: { fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif') },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium', '8px'),
          border: varBorder('divider', '1px solid #e5e7eb'),
          '&:before': { display: 'none' },
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: varColor('brand700', '#0369a1'),
          boxShadow: varElevation('level1', '0px 1px 2px 0px rgba(0,0,0,0.05)'),
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: varElevation('level2', '0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1)'),
          '&:hover': {
            boxShadow: varElevation('level3', '0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1)'),
          },
        },
        primary: {
          backgroundColor: varColor('brand500', '#0ea5e9'),
          '&:hover': {
            backgroundColor: varColor('brand700', '#0369a1'),
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: varColor('neutral100', '#f3f4f6') },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: { borderRadius: varRadius('medium', '8px') },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family', 'Roboto, sans-serif'),
          textTransform: 'none' as const,
          borderColor: varColor('neutral300', '#d1d5db'),
          '&.Mui-selected': {
            backgroundColor: varColor('brand100', '#e0f2fe'),
            color:           varColor('brand700', '#0369a1'),
            borderColor:     varColor('brand500', '#0ea5e9'),
          },
        },
      },
    },
  },
});

// Re-export the typed `vars` object so consumers can reach tokens directly:
//   import { vars } from '<your-design-system>';
//   <Box sx={{ color: vars.color.actionPrimary, boxShadow: vars.elevation.level2 }} />
export { vars, varColorToken };
