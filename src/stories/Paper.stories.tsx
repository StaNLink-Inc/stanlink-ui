import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from './Paper';
import { Box, Typography, Stack } from '@mui/material';

const meta: Meta<typeof Paper> = {
  title: 'Display/Paper',
  component: Paper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Elevations: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
        <Paper key={elevation} elevation={elevation} sx={{ p: 2, minWidth: 100, textAlign: 'center' }}>
          <Typography variant="body2">elevation={elevation}</Typography>
        </Paper>
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Paper variant="elevation" elevation={3} sx={{ p: 2 }}>
        <Typography>Elevation variant</Typography>
      </Paper>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography>Outlined variant</Typography>
      </Paper>
    </Stack>
  ),
};

export const Squared: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Paper sx={{ p: 2 }}>
        <Typography>Default (rounded)</Typography>
      </Paper>
      <Paper square sx={{ p: 2 }}>
        <Typography>Square corners</Typography>
      </Paper>
    </Stack>
  ),
};

export const TradingCard: Story = {
  render: () => (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 300 }}>
      <Typography variant="h6" gutterBottom>AAPL</Typography>
      <Typography variant="h4" color="success.main" gutterBottom>$175.50</Typography>
      <Typography variant="body2" color="text.secondary">+$4.25 (+2.48%)</Typography>
      <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">Volume</Typography>
          <Typography variant="body2">52.4M</Typography>
        </Stack>
      </Box>
    </Paper>
  ),
};

export const SkillMetrics: Story = {
  render: () => (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 400 }}>
      <Typography variant="h6" gutterBottom>Performance Metrics</Typography>
      <Stack spacing={1.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Accuracy</Typography>
          <Typography fontWeight="bold" color="success.main">87.5%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Sharpe Ratio</Typography>
          <Typography fontWeight="bold">2.4</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Win Rate</Typography>
          <Typography fontWeight="bold" color="primary.main">68.5%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">Total Trades</Typography>
          <Typography fontWeight="bold">142</Typography>
        </Stack>
      </Stack>
    </Paper>
  ),
};

export const WithHover: Story = {
  render: () => (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        maxWidth: 300,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          elevation: 8,
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Typography variant="h6">Hover me!</Typography>
      <Typography color="text.secondary">This card lifts on hover</Typography>
    </Paper>
  ),
};
