import type { Meta, StoryObj } from '@storybook/react';
import { Grids } from './Grids';

const meta = {
  title: 'System/Tokens/Grids',
  component: Grids,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Grids> = {};
