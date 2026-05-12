import { AiCreateAnAnalytics } from "../src/components/AiCreateAnAnalytics";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Generated/AiCreateAnAnalytics",
  component: AiCreateAnAnalytics,
  tags: ["autodocs"]
} satisfies Meta<typeof AiCreateAnAnalytics>;

export default meta;
type Story = StoryObj<typeof AiCreateAnAnalytics>;

export const Default: Story = {
  args: {
    title: "ai-create-an-analytics",
    description: "Generated and synced by GUING",
    size: "md",
    variant: "default",
    state: "default",
    disabled: false
  },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    variant: { control: { type: "select" }, options: ["default","outline","ghost"] },
    state: { control: { type: "select" }, options: ["default","hover","active"] },
    disabled: { control: { type: "boolean" } }
  }
};

export const Disabled: Story = {
  args: {
    title: "ai-create-an-analytics",
    description: "Disabled generated state",
    size: "md",
    variant: "default",
    state: "default",
    disabled: true
  }
};