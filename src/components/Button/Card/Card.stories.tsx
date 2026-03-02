import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Card Title",
    children: "This is a simple card component.",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithoutTitle: Story = {
  args: {
    title: "",
  },
};
