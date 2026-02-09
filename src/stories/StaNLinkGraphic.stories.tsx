import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StaNLinkGraphic } from './StaNLinkGraphic';
import { Box } from '@mui/material';

const meta: Meta<typeof StaNLinkGraphic> = {
  title: 'Display/StaNLinkGraphic',
  component: StaNLinkGraphic,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ bgcolor: '#0a0a0f', p: 4, minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StaNLinkGraphic>;

export const Default: Story = {
  args: {},
};

export const CustomText: Story = {
  args: {
    text: 'PYPROJECT',
  },
};

export const HigherOpacity: Story = {
  args: {
    opacity: 0.15,
  },
};

export const ColoredGraphic: Story = {
  args: {
    color: '#9c27b0',
    opacity: 0.1,
  },
};

export const InFooter: Story = {
  render: () => (
    <Box sx={{ width: '100%', bgcolor: 'black', p: 8 }}>
      <Box sx={{ mb: 8 }}>
        <StaNLinkGraphic />
      </Box>
      <Box sx={{ textAlign: 'center', color: 'white', opacity: 0.5 }}>
        © 2024 StaNLink. All rights reserved.
      </Box>
    </Box>
  ),
};
