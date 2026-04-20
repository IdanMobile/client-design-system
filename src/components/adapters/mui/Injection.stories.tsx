// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InjectionView, TokenBinding } from '../../InjectionView';

const meta: Meta = {
  title: 'System/Library Components (MUI)/Overview',
};
export default meta;
type Story = StoryObj;

const bindings: TokenBinding[] = [
  // Colors (palette — resolved hex values from tokens.json)
  { designToken: '--color-action-primary', libraryProperty: 'palette.primary.main', category: 'Colors' },
  { designToken: '--color-brand-300', libraryProperty: 'palette.primary.light', category: 'Colors' },
  { designToken: '--color-brand-700', libraryProperty: 'palette.primary.dark', category: 'Colors' },
  { designToken: '--color-white', libraryProperty: 'palette.primary.contrastText', category: 'Colors' },
  { designToken: '--color-action-secondary', libraryProperty: 'palette.secondary.main', category: 'Colors' },
  { designToken: '--color-danger-500', libraryProperty: 'palette.error.main', category: 'Colors' },
  { designToken: '--color-warning-500', libraryProperty: 'palette.warning.main', category: 'Colors' },
  { designToken: '--color-success-500', libraryProperty: 'palette.success.main', category: 'Colors' },
  { designToken: '--color-background', libraryProperty: 'palette.background.default', category: 'Colors' },
  { designToken: '--color-surface', libraryProperty: 'palette.background.paper', category: 'Colors' },
  { designToken: '--color-text-main', libraryProperty: 'palette.text.primary', category: 'Colors' },
  { designToken: '--color-text-muted', libraryProperty: 'palette.text.secondary', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiButton containedPrimary backgroundColor', category: 'Colors' },
  { designToken: '--color-brand-700', libraryProperty: 'MuiButton containedPrimary :hover backgroundColor', category: 'Colors' },
  { designToken: '--color-brand-100', libraryProperty: 'MuiButton outlined :hover backgroundColor', category: 'Colors' },
  { designToken: '--color-neutral-300', libraryProperty: 'MuiButton outlined borderColor', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiTabs indicator backgroundColor', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiCheckbox checked color', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiRadio checked color', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiSlider root color', category: 'Colors' },
  { designToken: '--color-warning-500', libraryProperty: 'MuiRating iconFilled color', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiCircularProgress colorPrimary', category: 'Colors' },
  { designToken: '--color-brand-500', libraryProperty: 'MuiLinearProgress barColorPrimary', category: 'Colors' },
  { designToken: '--color-neutral-200', libraryProperty: 'MuiDivider borderColor', category: 'Colors' },
  { designToken: '--color-neutral-200', libraryProperty: 'MuiSkeleton backgroundColor', category: 'Colors' },

  // Typography
  { designToken: '--font-body-regular-family', libraryProperty: 'typography.fontFamily', category: 'Typography' },
  { designToken: '--font-heading-1-family', libraryProperty: 'typography.h1.fontFamily', category: 'Typography' },
  { designToken: '--font-heading-1-size', libraryProperty: 'typography.h1.fontSize', category: 'Typography' },
  { designToken: '--font-heading-1-weight', libraryProperty: 'typography.h1.fontWeight', category: 'Typography' },
  { designToken: '--font-heading-1-line-height', libraryProperty: 'typography.h1.lineHeight', category: 'Typography' },
  { designToken: '--font-heading-1-letter-spacing', libraryProperty: 'typography.h1.letterSpacing', category: 'Typography' },
  { designToken: '--font-heading-2-family', libraryProperty: 'typography.h2.fontFamily', category: 'Typography' },
  { designToken: '--font-heading-2-size', libraryProperty: 'typography.h2.fontSize', category: 'Typography' },
  { designToken: '--font-heading-2-weight', libraryProperty: 'typography.h2.fontWeight', category: 'Typography' },
  { designToken: '--font-heading-2-line-height', libraryProperty: 'typography.h2.lineHeight', category: 'Typography' },
  { designToken: '--font-heading-3-family', libraryProperty: 'typography.h3.fontFamily', category: 'Typography' },
  { designToken: '--font-heading-3-size', libraryProperty: 'typography.h3.fontSize', category: 'Typography' },
  { designToken: '--font-heading-3-weight', libraryProperty: 'typography.h3.fontWeight', category: 'Typography' },
  { designToken: '--font-heading-3-line-height', libraryProperty: 'typography.h3.lineHeight', category: 'Typography' },
  { designToken: '--font-body-regular-family', libraryProperty: 'typography.body1.fontFamily', category: 'Typography' },
  { designToken: '--font-body-regular-size', libraryProperty: 'typography.body1.fontSize', category: 'Typography' },
  { designToken: '--font-body-regular-weight', libraryProperty: 'typography.body1.fontWeight', category: 'Typography' },
  { designToken: '--font-body-regular-line-height', libraryProperty: 'typography.body1.lineHeight', category: 'Typography' },
  { designToken: '--font-body-small-family', libraryProperty: 'typography.body2.fontFamily', category: 'Typography' },
  { designToken: '--font-body-small-size', libraryProperty: 'typography.body2.fontSize', category: 'Typography' },
  { designToken: '--font-body-small-weight', libraryProperty: 'typography.body2.fontWeight', category: 'Typography' },
  { designToken: '--font-body-small-line-height', libraryProperty: 'typography.body2.lineHeight', category: 'Typography' },
  { designToken: '--font-caption-family', libraryProperty: 'typography.caption.fontFamily', category: 'Typography' },
  { designToken: '--font-caption-size', libraryProperty: 'typography.caption.fontSize', category: 'Typography' },
  { designToken: '--font-caption-weight', libraryProperty: 'typography.caption.fontWeight', category: 'Typography' },
  { designToken: '--font-caption-line-height', libraryProperty: 'typography.caption.lineHeight', category: 'Typography' },
  { designToken: '--font-caption-letter-spacing', libraryProperty: 'typography.caption.letterSpacing', category: 'Typography' },
  { designToken: '--font-caption-text-transform', libraryProperty: 'typography.caption.textTransform', category: 'Typography' },
  { designToken: '--font-display-family', libraryProperty: 'typography.display.fontFamily', category: 'Typography' },
  { designToken: '--font-display-size', libraryProperty: 'typography.display.fontSize', category: 'Typography' },
  { designToken: '--font-display-weight', libraryProperty: 'typography.display.fontWeight', category: 'Typography' },
  { designToken: '--font-display-line-height', libraryProperty: 'typography.display.lineHeight', category: 'Typography' },
  { designToken: '--font-display-letter-spacing', libraryProperty: 'typography.display.letterSpacing', category: 'Typography' },
  { designToken: '--font-body-large-family', libraryProperty: 'typography.subtitle1.fontFamily', category: 'Typography' },
  { designToken: '--font-body-large-size', libraryProperty: 'typography.subtitle1.fontSize', category: 'Typography' },
  { designToken: '--font-body-large-weight', libraryProperty: 'typography.subtitle1.fontWeight', category: 'Typography' },
  { designToken: '--font-body-large-line-height', libraryProperty: 'typography.subtitle1.lineHeight', category: 'Typography' },
  { designToken: '--font-code-family', libraryProperty: 'typography.code.fontFamily', category: 'Typography' },
  { designToken: '--font-code-size', libraryProperty: 'typography.code.fontSize', category: 'Typography' },
  { designToken: '--font-code-weight', libraryProperty: 'typography.code.fontWeight', category: 'Typography' },
  { designToken: '--font-code-line-height', libraryProperty: 'typography.code.lineHeight', category: 'Typography' },

  // Radius
  { designToken: '--radius-medium', libraryProperty: 'MuiButton borderRadius', category: 'Radius' },
  { designToken: '--radius-large', libraryProperty: 'MuiCard borderRadius', category: 'Radius' },
  { designToken: '--radius-round', libraryProperty: 'MuiChip borderRadius', category: 'Radius' },
  { designToken: '--radius-small', libraryProperty: 'MuiTooltip borderRadius', category: 'Radius' },
  { designToken: '--radius-large', libraryProperty: 'MuiDialog paper borderRadius', category: 'Radius' },
  { designToken: '--radius-round', libraryProperty: 'MuiLinearProgress borderRadius', category: 'Radius' },

  // Shadows
  { designToken: '--shadow-small', libraryProperty: 'MuiButton root boxShadow', category: 'Shadows' },
  { designToken: '--shadow-medium', libraryProperty: 'MuiButton root :hover boxShadow', category: 'Shadows' },
  { designToken: '--shadow-large', libraryProperty: 'MuiDialog paper :hover boxShadow', category: 'Shadows' },
  { designToken: '--shadow-inner', libraryProperty: 'MuiTextField :active boxShadow', category: 'Shadows' },
  { designToken: '--shadow-medium', libraryProperty: 'MuiSlider thumb boxShadow', category: 'Shadows' },
  { designToken: '--shadow-medium', libraryProperty: 'MuiTooltip boxShadow', category: 'Shadows' },

  // Borders
  { designToken: '--border-divider', libraryProperty: 'MuiCard border', category: 'Borders' },
  { designToken: '--border-divider', libraryProperty: 'MuiTableCell borderBottom', category: 'Borders' },
  { designToken: '--border-divider', libraryProperty: 'MuiAccordion border', category: 'Borders' },
  { designToken: '--border-focus-ring', libraryProperty: 'MuiButtonBase Mui-focusVisible outline', category: 'Borders' },

  // Elevations
  { designToken: '--elevation-level-1', libraryProperty: 'shadows[1]', category: 'Elevations' },
  { designToken: '--elevation-level-2', libraryProperty: 'shadows[2-3]', category: 'Elevations' },
  { designToken: '--elevation-level-3', libraryProperty: 'shadows[4-23]', category: 'Elevations' },
  { designToken: '--elevation-modal', libraryProperty: 'shadows[24]', category: 'Elevations' },
  { designToken: '--elevation-level-1', libraryProperty: 'MuiAppBar boxShadow', category: 'Elevations' },
  { designToken: '--elevation-level-2', libraryProperty: 'MuiCard boxShadow', category: 'Elevations' },
  { designToken: '--elevation-modal', libraryProperty: 'MuiDialog paper boxShadow', category: 'Elevations' },
  { designToken: '--elevation-level-2', libraryProperty: 'MuiFab boxShadow', category: 'Elevations' },

  // Gaps
  { designToken: '--gap-8', libraryProperty: 'MuiButton padding (vertical)', category: 'Gaps' },
  { designToken: '--gap-16', libraryProperty: 'MuiButton padding (horizontal)', category: 'Gaps' },
  { designToken: '--gap-4', libraryProperty: 'MuiTooltip padding (vertical)', category: 'Gaps' },
  { designToken: '--gap-8', libraryProperty: 'MuiTooltip padding (horizontal)', category: 'Gaps' },

  // Sizes
  { designToken: '--size-icon-sm', libraryProperty: 'MuiSvgIcon fontSizeSmall', category: 'Sizes' },
  { designToken: '--size-icon-md', libraryProperty: 'MuiSvgIcon fontSizeMedium', category: 'Sizes' },
  { designToken: '--size-icon-lg', libraryProperty: 'MuiSvgIcon fontSizeLarge', category: 'Sizes' },
  { designToken: '--size-avatar-sm', libraryProperty: 'MuiAvatar small width/height', category: 'Sizes' },
  { designToken: '--size-avatar-md', libraryProperty: 'MuiAvatar root width/height', category: 'Sizes' },
  { designToken: '--size-avatar-lg', libraryProperty: 'MuiAvatar large width/height', category: 'Sizes' },

  // Opacity
  { designToken: '--opacity-50', libraryProperty: 'MuiButtonBase Mui-disabled opacity', category: 'Opacity' },

  // Blurs
  { designToken: '--blur-glass-value', libraryProperty: 'MuiBackdrop backdropFilter', category: 'Blurs' },

  // Gradients (none mapped in MUI theme directly)
];

export const Injection: Story = {
  render: () => <InjectionView libraryName="MUI" approach="createTheme JS object with resolved hex palette and CSS var overrides in component styleOverrides" bindings={bindings} />,
};
