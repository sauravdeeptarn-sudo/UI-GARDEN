import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  args: {
    headers: ["Name", "Age", "City"],
    rows: [
      ["Alice", 25, "Toronto"],
      ["Bob", 30, "Winnipeg"],
      ["Charlie", 28, "Vancouver"],
    ],
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
