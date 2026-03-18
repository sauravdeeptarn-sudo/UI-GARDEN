import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    text: 'Sample text',
    size: 'md',
    disabled: false,
    color: '#000000',
  },
  argTypes: {
    text: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
