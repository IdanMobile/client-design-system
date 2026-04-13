// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '@mui/material/Skeleton';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Skeleton> = {
  title: 'System/Library Components (MUI)/Skeleton',
  component: Skeleton,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" height={120} />
      <Skeleton variant="rounded" height={80} />
    </div>
  ),
};
