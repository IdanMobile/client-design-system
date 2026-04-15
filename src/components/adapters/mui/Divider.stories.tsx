// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Divider from '@mui/material/Divider';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Divider> = {
  title: 'System/Library Components (MUI)/Divider',
  component: Divider,
  decorators: [withDesignSystem],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p>Content above</p>
      <Divider />
      <p>Full width divider above</p>
      <Divider textAlign="center">OR</Divider>
      <p>Divider with text above</p>
    </div>
  ),
};
