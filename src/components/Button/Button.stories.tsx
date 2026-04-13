// ButtonPrimary.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button/Primary',
  component: Button.Primary,
  args: {
    children: 'Click me',
    type: 'Text button',
    size: 'lg',
    width: 'Compact',
  },
} satisfies Meta<typeof Button.Primary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };