import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click me",
    disabled: false,
    variant: "primary",
    size: "md",
    loading: false,
    leftIcon: "",
    rightIcon: "",
  },
  argTypes: {
    leftIcon: { control: "text" },
    rightIcon: { control: "text" },
    loading: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: "⭐",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: "➡️",
  },
};
