// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Switch> = {
  title: 'System/Library Components (MUI)/Switch',
  component: Switch,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <FormControlLabel control={<Switch />} label="Unchecked" />
      <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
      <FormControlLabel control={<Switch disabled />} label="Disabled" />
      <FormControlLabel control={<Switch disabled defaultChecked />} label="Disabled Checked" />
    </div>
  ),
};
