// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '@mui/material/Pagination';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Pagination> = {
  title: 'System/Library Components (MUI)/Pagination',
  component: Pagination,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <Pagination count={10} />
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} size="small" />
      <Pagination count={10} size="large" />
    </div>
  ),
};
