import type { Meta, StoryObj } from '@storybook/react';
import { Borders } from './Borders';

const meta = {
  title: 'System/Tokens/Borders',
  component: Borders,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Borders> = {};
