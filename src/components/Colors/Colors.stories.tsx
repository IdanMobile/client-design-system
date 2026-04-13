import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from './Colors';

const meta = {
  title: 'System/Tokens/Colors',
  component: Colors,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
