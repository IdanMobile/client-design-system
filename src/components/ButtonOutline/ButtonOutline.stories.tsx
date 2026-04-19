// src/components/ButtonOutline/ButtonOutline.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonOutline } from './ButtonOutline';
import { Star } from 'lucide-react';

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
export const WithIcon: Story = { args: { children: <><Star size={16} /> Click me</> } };