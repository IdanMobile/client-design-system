import type { Meta, StoryObj } from '@storybook/react';
import { Elevations } from './Elevations';

const meta = {
  title: 'System/Tokens/Elevations',
  component: Elevations,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Elevations> = {};
