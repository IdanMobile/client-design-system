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
export const Hover: Story = { args: { sx: { backgroundColor: 'var(--color-background-state-interaction-hover-primary)' } } };
export const Focus: Story = { args: { sx: { boxShadow: '0 0 0 3px var(--color-background-white-base)' } } };