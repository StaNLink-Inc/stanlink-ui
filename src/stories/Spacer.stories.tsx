import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';
import { Box, Typography, Paper } from '@mui/material';

const meta: Meta<typeof Spacer> = {
  title: 'Layout/Spacer',
  component: Spacer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Vertical: Story = {
  render: () => (
    <Box>
      <Paper sx={{ p: 2 }}>Section 1</Paper>
      <Spacer size={2} />
      <Paper sx={{ p: 2 }}>Section 2</Paper>
      <Spacer size={4} />
      <Paper sx={{ p: 2 }}>Section 3</Paper>
    </Box>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ display: 'flex' }}>
      <Paper sx={{ p: 2 }}>Item 1</Paper>
      <Spacer direction="horizontal" size={2} />
      <Paper sx={{ p: 2 }}>Item 2</Paper>
      <Spacer direction="horizontal" size={4} />
      <Paper sx={{ p: 2 }}>Item 3</Paper>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box>
      {[1, 2, 3, 4, 5].map((size) => (
        <Box key={size}>
          <Typography variant="body2">Size {size}</Typography>
          <Spacer size={size} sx={{ bgcolor: 'primary.light' }} />
        </Box>
      ))}
    </Box>
  ),
};

export const TradingLayout: Story = {
  render: () => (
    <Box>
      <Typography variant="h5">Portfolio Overview</Typography>
      <Spacer size={3} />
      <Paper sx={{ p: 2 }}>
        <Typography>Total Value: $125,450</Typography>
      </Paper>
      <Spacer size={2} />
      <Paper sx={{ p: 2 }}>
        <Typography>Today's P&L: +$1,250</Typography>
      </Paper>
    </Box>
  ),
};
