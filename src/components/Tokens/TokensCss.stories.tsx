import type { Meta, StoryObj } from '@storybook/react';
import { TokensCss } from './TokensCss';

const meta = {
  title: 'System/Tokens/tokens.css',
  component: TokensCss,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The generated CSS custom-properties file shipped with the design system. ' +
          'Every `var(--…)` referenced by a component resolves to a declaration shown ' +
          'on this page. The file is regenerated on every Figma sync.',
      },
    },
  },
} satisfies Meta<typeof TokensCss>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
