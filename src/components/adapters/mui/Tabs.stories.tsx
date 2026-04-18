// @ts-nocheck
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Tabs> = {
  title: 'System/Library Components (MUI)/Tabs',
  component: Tabs,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

const TabsDemo = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: 400, border: 'var(--border-divider)', borderRadius: 'var(--radius-large)' }}>
      <Tabs value={value} onChange={(_, v) => setValue(v)}>
        <Tab label="Colors" />
        <Tab label="Typography" />
        <Tab label="Spacing" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {value === 0 && 'Color tokens define the palette.'}
        {value === 1 && 'Typography tokens define font styles.'}
        {value === 2 && 'Spacing tokens define gaps and margins.'}
      </Box>
    </Box>
  );
};

export const Default: Story = { render: () => <TabsDemo /> };
