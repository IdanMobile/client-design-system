import type { Meta, StoryObj } from '@storybook/react';
import { Popup } from './Popup';

const meta = {
  title: 'Components/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#051321' }],
    },
  },
  args: {
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed? This action cannot be undone.',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    open: true,
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DeleteConfirmation: Story = {
  args: {
    title: 'Delete Item',
    description: 'This will permanently delete the selected item. This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    confirmLabel: 'Confirm',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const LongContent: Story = {
  args: {
    title: 'Terms and Conditions',
    description:
      'Please read the following terms carefully before proceeding. By clicking confirm, you agree to our Terms of Service and Privacy Policy. Your data will be processed in accordance with our data protection policies. You can withdraw your consent at any time by contacting our support team.',
    confirmLabel: 'I Agree',
    cancelLabel: 'Decline',
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};
