import type { Meta, StoryObj } from '@storybook/react';
import { Structure } from './Structure';

const meta = {
  title: 'System/Tokens/Structure',
  component: Structure,
  parameters: { layout: 'fullscreen' },
};

export default meta;
export const Default: StoryObj<typeof Structure> = {};
