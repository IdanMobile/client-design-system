// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Rating> = {
  title: 'System/Library Components (MUI)/Rating',
  component: Rating,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Rating defaultValue={5} readOnly /><Typography variant="body2">Read only</Typography></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Rating defaultValue={3} /><Typography variant="body2">Interactive</Typography></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Rating defaultValue={2} size="large" /><Typography variant="body2">Large</Typography></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Rating defaultValue={4} size="small" /><Typography variant="body2">Small</Typography></div>
    </div>
  ),
};
