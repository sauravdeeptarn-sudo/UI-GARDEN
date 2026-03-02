import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  args: {
    label: "Select me",
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
export const Checked: Story = {
  args: {
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
