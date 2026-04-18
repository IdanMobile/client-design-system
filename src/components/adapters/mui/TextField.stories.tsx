// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from '@mui/material/TextField';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof TextField> = {
  title: 'System/Library Components (MUI)/TextField',
  component: TextField,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <TextField label="Default" placeholder="Enter text..." />
      <TextField label="With Value" defaultValue="Hello World" />
      <TextField label="Disabled" disabled defaultValue="Cannot edit" />
      <TextField label="Error" error helperText="This field is required" />
      <TextField label="Small" size="small" />
    </div>
  ),
};
