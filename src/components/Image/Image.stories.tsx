import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  args: {
    src: 'https://via.placeholder.com/300',
    alt: 'Placeholder image',
    width: 300,
    height: 200,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
