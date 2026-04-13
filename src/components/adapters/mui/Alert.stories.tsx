// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Alert from '@mui/material/Alert';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Alert> = {
  title: 'System/Library Components (MUI)/Alert',
  component: Alert,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllSeverities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 400 }}>
      <Alert severity="success">Tokens published successfully.</Alert>
      <Alert severity="info">12 tokens detected.</Alert>
      <Alert severity="warning">2 tokens have conflicts.</Alert>
      <Alert severity="error">Sync failed.</Alert>
      <Alert severity="success" variant="outlined">Outlined success</Alert>
      <Alert severity="error" variant="filled">Filled error</Alert>
    </div>
  ),
};
