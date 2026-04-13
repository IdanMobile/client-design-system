import type { Meta, StoryObj } from '@storybook/react';
import { Blurs } from './Blurs';

const meta = {
  title: 'System/Tokens/Blurs',
  component: Blurs,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Blurs> = {};
