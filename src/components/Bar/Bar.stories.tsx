import type { Meta, StoryObj } from '@storybook/react';
import { Bar } from './Bar';
import referencePng from './Bar.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Bar',
  component: Bar,
  args: {
    variant: 'Home',
    showLabels: true,
  },
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HomeActive: Story = {
  args: { variant: 'Home' },
};

export const MeetingsActive: Story = {
  args: { variant: 'Meetings' },
};

export const ActionsActive: Story = {
  args: { variant: 'Actions' },
};

export const NotificationsActive: Story = {
  args: { variant: 'Notifications' },
};

export const Loading: Story = {
  args: { isLoading: true },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};
