// src/components/ButtonPrimary/ButtonPrimary.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from './ButtonPrimary';

const meta = {
  title: 'Components/Button/Primary',
  component: ButtonPrimary,
  args: {
    children: 'Click me',
    type: 'Text button',
    size: 'md',
    width: 'Compact',
  },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: { isLoading: true },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};

export const WithIcon: Story = {
  args: {
    type: 'Icon button',
    children: <span role="img" aria-label="icon">🔍</span>,
  },
};

export const Hover: Story = {
  args: {
    sx: { ':hover': { backgroundColor: 'var(--color-background-state-interaction-hover-primary)' } },
  },
};

export const Focus: Story = {
  args: {
    sx: { ':focus': { backgroundColor: 'var(--color-background-white-base)' } },
  },
};