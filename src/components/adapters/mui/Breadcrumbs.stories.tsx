// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'System/Library Components (MUI)/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="#">Design System</Link>
      <Link underline="hover" color="inherit" href="#">Tokens</Link>
      <Typography color="text.primary">Colors</Typography>
    </Breadcrumbs>
  ),
};
