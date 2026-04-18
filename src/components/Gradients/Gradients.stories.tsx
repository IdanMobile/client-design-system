import type { Meta, StoryObj } from '@storybook/react';
import { Gradients } from './Gradients';

const meta = {
  title: 'System/Tokens/Gradients',
  component: Gradients,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Gradients> = {};
