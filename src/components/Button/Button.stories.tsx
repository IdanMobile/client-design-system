// ButtonOutline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button/Outline',
  component: Button.Outline,
  args: { children: 'Click me' },
} satisfies Meta<typeof Button.Outline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };