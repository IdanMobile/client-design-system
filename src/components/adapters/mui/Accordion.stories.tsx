// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Accordion> = {
  title: 'System/Library Components (MUI)/Accordion',
  component: Accordion,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 500 }}>
      {['Colors', 'Typography', 'Spacing', 'Shadows'].map((title) => (
        <Accordion key={title} defaultExpanded={title === 'Colors'} disableGutters>
          <AccordionSummary>▾ {title}</AccordionSummary>
          <AccordionDetails>{title} tokens define your design system.</AccordionDetails>
        </Accordion>
      ))}
    </div>
  ),
};
