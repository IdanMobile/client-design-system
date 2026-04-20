// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Slider from '@mui/material/Slider';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Slider> = {
  title: 'System/Library Components (MUI)/Slider',
  component: Slider,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Slider defaultValue={30} />
      <Slider defaultValue={40} step={10} marks />
      <Slider defaultValue={[20, 60]} />
      <Slider defaultValue={50} disabled />
      <Slider defaultValue={70} valueLabelDisplay="on" />
    </div>
  ),
};
