// @ts-nocheck
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Dialog> = {
  title: 'System/Library Components (MUI)/Dialog',
  component: Dialog,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

const DialogDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Publish Tokens</DialogTitle>
        <DialogContent>
          <DialogContentText>Push 24 design tokens to GitHub and create a PR?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>Publish</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Default: Story = { render: () => <DialogDemo /> };
