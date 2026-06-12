// src/components/PopUp/PopUp.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { PopUp } from './PopUp';

const meta = {
  title: 'Components/PopUp',
  component: PopUp,
  args: {
    children: 'This is a pop-up content',
  },
} satisfies Meta<typeof PopUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };