import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Box, Typography, Stack, Chip } from '@mui/material';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography>Content above</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography>Content below</Typography>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" gutterBottom>Fullwidth (default)</Typography>
        <Divider />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>Inset</Typography>
        <Divider variant="inset" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>Middle</Typography>
        <Divider variant="middle" />
      </Box>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <Typography>Section 1</Typography>
      <Typography>Section 2</Typography>
      <Typography>Section 3</Typography>
    </Stack>
  ),
};

export const WithText: Story = {
  render: () => (
    <Stack spacing={3}>
      <Divider>CENTER</Divider>
      <Divider textAlign="left">LEFT</Divider>
      <Divider textAlign="right">RIGHT</Divider>
    </Stack>
  ),
};

export const WithChip: Story = {
  render: () => (
    <Box>
      <Typography>Content above</Typography>
      <Divider sx={{ my: 2 }}>
        <Chip label="OR" size="small" />
      </Divider>
      <Typography>Content below</Typography>
    </Box>
  ),
};

export const TradingMetrics: Story = {
  render: () => (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Performance Summary</Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={1.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Total Profit</Typography>
          <Typography fontWeight="bold" color="success.main">+$12,450</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Win Rate</Typography>
          <Typography fontWeight="bold">68.5%</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ my: 2 }}>
        <Chip label="Today" size="small" color="primary" />
      </Divider>
      <Stack spacing={1.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Trades</Typography>
          <Typography fontWeight="bold">8</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Profit</Typography>
          <Typography fontWeight="bold" color="success.main">+$450</Typography>
        </Stack>
      </Stack>
    </Box>
  ),
};

export const SkillSections: Story = {
  render: () => (
    <Box>
      <Typography variant="h6">Skill Information</Typography>
      <Typography variant="body2" color="text.secondary">Basic details about this trading skill</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Performance</Typography>
      <Typography variant="body2" color="text.secondary">Historical performance metrics</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Deployment</Typography>
      <Typography variant="body2" color="text.secondary">Active deployments and configurations</Typography>
    </Box>
  ),
};
