import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  args: {
    src: 'https://picsum.photos/1200/400',
    alt: 'Hero banner',
    height: '300px',
    title: 'Welcome to UI Garden',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
