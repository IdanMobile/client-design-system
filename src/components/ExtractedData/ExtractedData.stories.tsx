import type { Meta, StoryObj } from '@storybook/react';
import { ExtractedData } from './ExtractedData';

const meta = {
  title: 'System/Tokens/Extracted Data',
  component: ExtractedData,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ExtractedData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
