// @ts-nocheck
/**
 * MUI adapter — full pass-through + adapter infra.
 *
 * Re-exports ALL of @mui/material so the client app never needs to import
 * from @mui/material directly.  The DS package is the single UI dependency.
 *
 * Figma-mapped components (Button.Primary, Typography.H1, etc.) are exported
 * from src/index.ts AFTER this adapter, using explicit named exports that
 * TypeScript resolves as taking precedence over the export * below.
 *
 * AI-generated components should NOT import from this file — they use
 * ./internal which provides Mui* aliases.
 */

// ── Full library pass-through ─────────────────────────────────────────────────
export * from '@mui/material';

// ── Adapter infra (not in @mui/material) ─────────────────────────────────────
export { DesignSystemProvider } from './DesignSystemProvider';
export { designSystemTheme } from './theme';
