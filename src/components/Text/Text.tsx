// @ts-nocheck
import React from 'react';
import { designTokens } from '../../design-tokens';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Convert a camelCase token key to a CSS variable prefix.
 *
 * e.g. "headlineMed18Med" → "--font-headline-med-18-med"
 *      "h1"               → "--font-h-1"
 *      "labelSml"         → "--font-label-sml"
 */
function toCssVarPrefix(camelKey: string): string {
  const kebab = camelKey
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .toLowerCase();
  return `--font-${kebab}`;
}

/**
 * Capitalise the first character of a string.
 * e.g. "headlineMed18Med" → "HeadlineMed18Med"
 *      "h1"               → "H1"
 */
function toPascalCase(key: string): string {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

// ---------------------------------------------------------------------------
// Per-token sub-components (auto-derived, no hardcoded names)
// ---------------------------------------------------------------------------

type TokenKey = keyof typeof designTokens.typography;

/**
 * Props accepted by every Typography sub-component.
 * Extends standard HTML attributes so all native props (onClick, className,
 * aria-*, data-*) work. The `as` prop lets callers choose the rendered tag
 * (default: `span`).
 */
type TextProps = React.HTMLAttributes<HTMLElement> & {
  /** HTML tag to render. Default: 'span'. Use 'p', 'h1'–'h6', 'label', etc. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
};

/**
 * The sub-component map: one React component per typography token key, keyed
 * by the PascalCase version of the token name.
 *
 * TypeScript infers the shape via `Capitalize<TokenKey>` so autocomplete
 * lists every available token as `Typography.<Name>`.
 */
type TypographySubComponents = {
  [K in TokenKey as Capitalize<K>]: React.FC<TextProps>;
};

const subComponents = Object.fromEntries(
  (Object.keys(designTokens.typography) as TokenKey[]).map((key) => {
    const prefix = toCssVarPrefix(key);
    const displayName = `Typography.${toPascalCase(key)}`;

    const Component: React.FC<TextProps> = ({ as: Tag = 'span', style, ...rest }) => (
      <Tag
        style={{
          fontFamily:    `var(${prefix}-family)`,
          fontSize:      `var(${prefix}-size)`,
          fontWeight:    `var(${prefix}-weight)`,
          lineHeight:    `var(${prefix}-line-height)`,
          letterSpacing: `var(${prefix}-letter-spacing)`,
          textTransform: `var(${prefix}-text-transform)` as React.CSSProperties['textTransform'],
          ...style,
        }}
        {...rest}
      />
    );

    Component.displayName = displayName;

    return [toPascalCase(key), Component];
  })
) as TypographySubComponents;

// ---------------------------------------------------------------------------
// Exported Typography namespace
// ---------------------------------------------------------------------------

/**
 * Token-driven typography namespace. Library-agnostic — renders plain HTML
 * elements with CSS custom properties from tokens.css. Works with any UI
 * library (MUI, shadcn, radix, daisyui, etc.) because it has no library
 * dependency.
 *
 * Sub-component names are auto-derived from Figma typography token names:
 *
 * ```tsx
 * <Typography.HeadlineMed18Med>Page Title</Typography.HeadlineMed18Med>
 * <Typography.LabelSml color="inherit">Subtitle</Typography.LabelSml>
 * <Typography.BodyMd as="p">Body paragraph</Typography.BodyMd>
 * ```
 *
 * Every typography token in Figma becomes a sub-component automatically —
 * no designer mapping or AI generation required. If the designer explicitly
 * maps a "Typography H1" component in Figma, that Figma-mapped version will
 * shadow this token-driven component in src/index.ts (the explicit named
 * export wins over the export * from Text.tsx).
 *
 * ⚠️ PROTECTED: This file must never be deleted. See .agent/rules.md §
 * "Design System Template — Protected Components".
 */
export const Typography = subComponents as TypographySubComponents;
