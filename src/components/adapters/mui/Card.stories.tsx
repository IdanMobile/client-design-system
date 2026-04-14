// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Card> = {
  title: 'System/Library Components (MUI)/Card',
  component: Card,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>Card Title</Typography>
          <Typography variant="body1" color="text.secondary">
            This card uses native MUI components styled by design system tokens.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>With Actions</Typography>
          <Typography variant="body1" color="text.secondary">A card with action buttons.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Cancel</Button>
          <Button size="small" variant="contained">Confirm</Button>
        </CardActions>
      </Card>
    </div>
  ),
};
