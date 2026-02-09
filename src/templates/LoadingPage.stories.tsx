import type { Meta, StoryObj } from '@storybook/react';
import { LoadingPage } from './LoadingPage';

const meta: Meta<typeof LoadingPage> = {
  title: 'Templates/LoadingPage',
  component: LoadingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingPage>;

export const Default: Story = {
  args: {},
};

export const BrandColors: Story = {
  args: {
    colors: ['#D97757', '#8B6F47', '#FFB84D'],
    text: 'Loading StaNLink...',
  },
};

export const Processing: Story = {
  args: {
    text: 'Processing Strategy...',
    colors: ['#D97757', '#D97757', '#D97757'],
  },
};

export const NoText: Story = {
  args: {
    text: '',
  },
};
