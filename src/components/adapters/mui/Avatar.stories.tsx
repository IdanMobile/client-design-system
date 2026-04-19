// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Avatar> = {
  title: 'System/Library Components (MUI)/Avatar',
  component: Avatar,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>S</Avatar>
      <Avatar>M</Avatar>
      <Avatar sx={{ width: 56, height: 56, fontSize: 24 }}>L</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">Q</Avatar>
    </div>
  ),
};
