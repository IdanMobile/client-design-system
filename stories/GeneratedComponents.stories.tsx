import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Generated/Approved Components",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ApprovedCatalog: Story = {
  render: () => null,
  parameters: {
    docs: {
      description: {
        story: "Approved components: Button, Card"
      }
    }
  }
};