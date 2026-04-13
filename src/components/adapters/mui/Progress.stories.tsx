// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { withDesignSystem } from './decorator';

const meta: Meta = {
  title: 'System/Library Components (MUI)/Progress',
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 400 }}>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <CircularProgress size={24} />
        <CircularProgress />
        <CircularProgress size={56} />
        <CircularProgress variant="determinate" value={65} />
      </div>
      <LinearProgress />
      <LinearProgress variant="determinate" value={40} />
    </div>
  ),
};
