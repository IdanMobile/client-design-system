// src/components/ButtonOutline/ButtonOutline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonOutline } from './ButtonOutline';

const meta = {
  title: 'Components/Button/Outline',
  component: ButtonOutline,
  args: {
    children: 'Click me',
    type: 'text',
    size: 'md',
    width: 'compact',
    state: 'default',
  },
} satisfies Meta<typeof ButtonOutline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const WithIcon: Story = { args: { type: 'icon', children: <span>🔍</span> } };
export const Hover: Story = { args: { sx: { backgroundColor: 'var(--color-background-state-interaction-hover-neutral)' } } };
export const Focus: Story = { args: { sx: { backgroundColor: 'var(--background-white-base)' } } };