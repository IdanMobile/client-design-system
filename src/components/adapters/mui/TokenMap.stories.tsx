// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TokenMapView } from '../../TokenMapView';
import data from './mappings.json';

const meta: Meta = {
  title: 'System/Library Components (MUI)/Overview/Token Map',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <TokenMapView library={data.library} approach={data.approach} mappings={data.mappings} />,
};
