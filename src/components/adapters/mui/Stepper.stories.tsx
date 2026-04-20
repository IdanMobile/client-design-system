// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Stepper> = {
  title: 'System/Library Components (MUI)/Stepper',
  component: Stepper,
  decorators: [withDesignSystem],
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof meta>;

const steps = ['Select Library', 'Configure Tokens', 'Connect GitHub', 'Publish'];

export const AllSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Stepper activeStep={0}>{steps.map((s) => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={2}>{steps.map((s) => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={4}>{steps.map((s) => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
    </div>
  ),
};
