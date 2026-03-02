import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  args: {
    text: "Label text",
    disabled: false,
    color: "#000000",
  },
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
    color: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
