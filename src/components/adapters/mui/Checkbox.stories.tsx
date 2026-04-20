// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Checkbox> = {
  title: 'System/Library Components (MUI)/Checkbox',
  component: Checkbox,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled defaultChecked />} label="Disabled checked" />
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
    </div>
  ),
};
