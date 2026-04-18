import type { Meta, StoryObj } from '@storybook/react';
import { Themes } from './Themes';

const meta = {
  title: 'System/Tokens/Themes',
  component: Themes,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Themes> = {};
