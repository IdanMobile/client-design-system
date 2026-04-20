// src/components/ButtonPrimary/ButtonPrimary.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from './ButtonPrimary';
import { Star } from 'lucide-react';

const meta = {
  title: 'Components/Button/Primary',
  component: ButtonPrimary,
  args: { children: 'Click me' },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const WithIcon: Story = { args: { children: <><Star size={16} /> Click me</> } };
export const Hover: Story = { args: { sx: { '&:hover': { backgroundColor: 'var(--color-background-state-interaction-hover-primary)' } } } };
export const Focus: Story = { args: { sx: { '&:focus': { backgroundColor: 'var(--color-background-white-base)' } } } };
export const IconButton: Story = { args: { type: 'icon', children: <Star size={16} /> } };