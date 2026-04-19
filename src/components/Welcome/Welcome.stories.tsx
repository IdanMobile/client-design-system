import type { Meta, StoryObj } from '@storybook/react';
import { Welcome } from './Welcome';

const meta = {
  title: 'System/Welcome',
  component: Welcome,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
