import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Force a single copy of React / Emotion / MUI so hooks like MUI's
  // useThemeProps resolve a non-null dispatcher. Without dedupe, Vite's
  // dep pre-bundling can split React across chunks the first time a new
  // MUI subpath (e.g. @mui/material/Stack) is imported mid-session, which
  // surfaces as "Cannot read properties of null (reading 'useContext')".
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        dedupe: [
          'react',
          'react-dom',
          '@emotion/react',
          '@emotion/styled',
          '@mui/material',
          '@mui/system',
        ],
      },
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          '@emotion/react',
          '@emotion/styled',
          '@mui/material',
        ],
      },
    });
  },
};

export default config;
