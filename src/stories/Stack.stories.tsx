import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Box, Button, Chip, Typography, Divider } from '@mui/material';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1, textAlign: 'center' }}>
    {children}
  </Box>
);

export const Vertical: Story = {
  render: () => (
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

export const Spacing: Story = {
  render: () => (
    <>
      {[0, 1, 2, 3, 4].map((spacing) => (
        <Box key={spacing} sx={{ mb: 4 }}>
          <Typography variant="body2" gutterBottom>spacing={spacing}</Typography>
          <Stack direction="row" spacing={spacing}>
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Stack>
        </Box>
      ))}
    </>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <Stack spacing={2} divider={<Divider />}>
      <Typography>Section 1</Typography>
      <Typography>Section 2</Typography>
      <Typography>Section 3</Typography>
    </Stack>
  ),
};

export const TradingActions: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">Buy</Button>
      <Button variant="contained" color="error">Sell</Button>
      <Button variant="outlined">Cancel</Button>
    </Stack>
  ),
};

export const SkillTags: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      <Chip label="Machine Learning" color="primary" />
      <Chip label="High Accuracy" color="success" />
      <Chip label="Low Risk" color="info" />
      <Chip label="Trending" color="secondary" />
      <Chip label="Verified" color="success" variant="outlined" />
    </Stack>
  ),
};

export const MetricsDisplay: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary">Win Rate</Typography>
        <Typography fontWeight="bold" color="success.main">68.5%</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary">Total Trades</Typography>
        <Typography fontWeight="bold">142</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary">Profit</Typography>
        <Typography fontWeight="bold" color="success.main">+$12,450</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary">Sharpe Ratio</Typography>
        <Typography fontWeight="bold">2.4</Typography>
      </Stack>
    </Stack>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Item>Start</Item>
        <Item>Start</Item>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Item>Center</Item>
        <Item>Center</Item>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="flex-end">
        <Item>End</Item>
        <Item>End</Item>
      </Stack>
    </Stack>
  ),
};
