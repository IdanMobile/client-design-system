import { Card } from "../src/components/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Generated/Card",
  component: Card,
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card",
    description: "Generated and synced by GUING",
    disabled: false,
    size: "md",
    variant: "default",
    state: "default",
  },
  argTypes: {
    size: { control: { type: "select" }, options: ["md"] },
    variant: { control: { type: "select" }, options: ["default"] },
    state: { control: { type: "select" }, options: ["default"] },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
  },
  parameters: {
    docs: {
      description: {
        story: "Generated and synced by GUING for Card"
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    title: "Card",
    description: "Generated and synced by GUING",
    disabled: false,
    size: "md",
    variant: "default",
    state: "default",
  }
};