import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import { OrbitalLoader } from './OrbitalLoader';

const meta: Meta<typeof OrbitalLoader> = {
  title: 'Components/OrbitalLoader',
  component: OrbitalLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrbitalLoader>;

export const Default: Story = {
  args: {},
};

export const CustomColors: Story = {
  args: {
    colors: ['#D97757', '#8B6F47', '#FFB84D'],
  },
};

export const Large: Story = {
  args: {
    size: 200,
  },
};

export const Small: Story = {
  args: {
    size: 100,
  },
};

export const Fast: Story = {
  args: {
    speed: 1,
  },
};

export const Slow: Story = {
  args: {
    speed: 4,
  },
};

export const NoText: Story = {
  args: {
    text: '',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Processing...',
  },
};

export const BrandColors: Story = {
  args: {
    colors: ['#D97757', '#D97757', '#D97757'],
    text: 'StaNLink',
  },
};
