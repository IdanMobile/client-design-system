import { Button } from "../src/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Generated/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    title: "Button",
    description: "Generated and synced by GUING",
    disabled: false,
    size: "md",
    variant: "primary",
    state: "default",
    disabled: false
  },
  argTypes: {
    size: { control: { type: "select" }, options: ["md"] },
    variant: { control: { type: "select" }, options: ["primary"] },
    state: { control: { type: "select" }, options: ["default"] },
    disabled: { control: { type: "boolean" } },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        story: "Generated and synced by GUING for Button"
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    title: "Button",
    description: "Generated and synced by GUING",
    disabled: true
    size: "md",
    variant: "primary",
    state: "default",
    disabled: true
  }
};