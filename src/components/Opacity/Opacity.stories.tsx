import type { Meta, StoryObj } from '@storybook/react';
import { Opacity } from './Opacity';

const meta = {
  title: 'System/Tokens/Opacity',
  component: Opacity,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Opacity> = {};
