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
    description: "Generated and synced by GUING"
  }
};