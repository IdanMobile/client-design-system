import { Star } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonOutline } from './ButtonOutline';

const meta = {
  title: 'Components/Button/Outline',
  component: ButtonOutline,
  args: { children: "Button" },
  argTypes: {
    size: { control: { type: 'select' }, options: ["lg","md","sm","xs"] },
  },
} satisfies Meta<typeof ButtonOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { isDisabled: true } };
export const Loading: Story = { args: { isLoading: true } };

export const Size_lg: Story = { args: { size: 'large' } };
export const Size_md: Story = { args: { size: 'medium' } };
export const Size_sm: Story = { args: { size: 'small' } };
export const Size_xs: Story = { args: { size: 'small' } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const WithIcon: Story = { args: { icon: <Star size={16} /> } };
