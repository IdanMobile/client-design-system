// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Chip from '@mui/material/Chip';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Chip> = {
  title: 'System/Library Components (MUI)/Chip',
  component: Chip,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip label="Filled" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Error" color="error" />
      <Chip label="Deletable" onDelete={() => {}} />
      <Chip label="Small" size="small" />
    </div>
  ),
};
