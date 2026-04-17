// src/components/ButtonOutline/ButtonOutline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonOutline } from './ButtonOutline';

const meta = {
  title: 'Components/Button/Outline',
  component: ButtonOutline,
  args: { children: 'Click me' },
} satisfies Meta<typeof ButtonOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const WithIcon: Story = { args: { children: <span><SomeIcon /> Click me</span> } };