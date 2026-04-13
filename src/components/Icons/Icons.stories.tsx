import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

const meta = {
  title: 'System/Tokens/Icons',
  component: Icons,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Icons> = {};
