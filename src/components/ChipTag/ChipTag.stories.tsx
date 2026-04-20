// src/components/ChipTag/ChipTag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ChipTag } from './ChipTag';

const meta = {
  title: 'Components/ChipTag',
  component: ChipTag,
  args: { children: 'Chip Content' },
} satisfies Meta<typeof ChipTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hover: Story = { args: { state: 'Hover' } };
export const Disabled: Story = { args: { isDisabled: true } };
export const Selected: Story = { args: { isSelected: true } };
export const WithIcon: Story = { args: { children: <><span>Icon</span> Chip Content</> } };