import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import tokens from '../src/design-tokens/tokens.json';
import '../src/design-tokens/tokens.css';
// MUI-ADAPTER-IMPORT-START (stripped by template-builder for non-MUI libraries)
import { DesignSystemProvider } from '../src/components/adapters/mui/DesignSystemProvider';
// MUI-ADAPTER-IMPORT-END

const themes = (tokens as any).themes ? Object.keys((tokens as any).themes) : [];

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'default', title: 'Default (Light)' },
          ...themes.map(t => ({ 
            value: t.toLowerCase().replace(/ /g, '-'), 
            title: t 
          })),
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'default';
      useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        // Also add as class for selector flexibility
        document.body.className = theme === 'default' ? '' : `theme-${theme}`;
      }, [theme]);
      // MUI-ADAPTER-WRAP-START (stripped by template-builder for non-MUI libraries)
      // Wrap every story with the MUI ThemeProvider so palette.primary,
      // MuiButton overrides, and tokens.css vars are all active. Without this
      // wrap, MUI stories fall back to default theme and e.g. a Button
      // renders as a blue text link instead of the themed filled variant.
      return (
        <DesignSystemProvider>
          <Story />
        </DesignSystemProvider>
      );
      // MUI-ADAPTER-WRAP-END
    },
  ],
};

export default preview;
