import type { Meta, StoryObj } from '@storybook/react';
import { ModelMap } from './ModelMap';

const meta = {
  title: 'System/Tokens/Model Map',
  component: ModelMap,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModelMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
