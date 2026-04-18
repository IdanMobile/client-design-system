// src/components/ButtonOutline/ButtonOutline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonOutline } from './ButtonOutline';
import { Star } from 'lucide-react';

const meta = {
  title: 'Components/Button/Outline',
  component: ButtonOutline,
  args: {
    children: 'Click me',
    type: 'Text button',
    size: 'md',
    width: 'Compact',
    state: 'Default',
  },
} satisfies Meta<typeof ButtonOutline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const WithIcon: Story = { args: { type: 'Icon button', children: <Star size={16} /> } };
export const Hover: Story = { args: { state: 'Hover', sx: { ':hover': { backgroundColor: 'var(--color-background-state-interaction-hover-neutral)' } } } };
export const Focus: Story = { args: { state: 'Focus', sx: { ':focus': { backgroundColor: 'var(--background-white-base)' } } } };
export const Compact: Story = { args: { width: 'Compact' } };
export const Fluid: Story = { args: { width: 'Fluid/block' } };