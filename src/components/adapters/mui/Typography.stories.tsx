// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Typography> = {
  title: 'System/Library Components (MUI)/Typography',
  component: Typography,
  decorators: [withDesignSystem],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body1">Body 1 — The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="body2">Body 2 — The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="caption">Caption text — design tokens</Typography>
    </div>
  ),
};
