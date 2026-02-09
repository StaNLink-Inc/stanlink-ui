import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { Typography } from '@mui/material';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>
      <Typography>Basic Box</Typography>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>Primary</Box>
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 2, borderRadius: 1 }}>Secondary</Box>
      <Box sx={{ bgcolor: 'success.main', color: 'white', p: 2, borderRadius: 1 }}>Success</Box>
      <Box sx={{ bgcolor: 'error.main', color: 'white', p: 2, borderRadius: 1 }}>Error</Box>
      <Box sx={{ bgcolor: 'warning.main', color: 'white', p: 2, borderRadius: 1 }}>Warning</Box>
      <Box sx={{ bgcolor: 'info.main', color: 'white', p: 2, borderRadius: 1 }}>Info</Box>
    </Box>
  ),
};

export const Spacing: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ bgcolor: 'grey.200', p: 1, borderRadius: 1 }}>Padding: 1 (8px)</Box>
      <Box sx={{ bgcolor: 'grey.200', p: 2, borderRadius: 1 }}>Padding: 2 (16px)</Box>
      <Box sx={{ bgcolor: 'grey.200', p: 3, borderRadius: 1 }}>Padding: 3 (24px)</Box>
      <Box sx={{ bgcolor: 'grey.200', p: 4, borderRadius: 1 }}>Padding: 4 (32px)</Box>
    </Box>
  ),
};

export const Borders: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ border: 1, borderColor: 'primary.main', p: 2, borderRadius: 1 }}>Border</Box>
      <Box sx={{ border: 2, borderColor: 'secondary.main', p: 2, borderRadius: 2 }}>Thick Border</Box>
      <Box sx={{ borderBottom: 2, borderColor: 'success.main', p: 2 }}>Bottom Border</Box>
    </Box>
  ),
};

export const Shadows: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      {[0, 1, 2, 3, 4, 8, 12, 16, 24].map((elevation) => (
        <Box key={elevation} sx={{ boxShadow: elevation, p: 2, borderRadius: 1, bgcolor: 'white' }}>
          {elevation}
        </Box>
      ))}
    </Box>
  ),
};

export const TradingCard: Story = {
  render: () => (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        p: 3,
        maxWidth: 300,
        '&:hover': {
          boxShadow: 8,
          transform: 'translateY(-4px)',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <Typography variant="h6" gutterBottom>AAPL</Typography>
      <Typography variant="h4" color="success.main" gutterBottom>$175.50</Typography>
      <Typography variant="body2" color="text.secondary">+2.5% today</Typography>
    </Box>
  ),
};

export const FlexLayout: Story = {
  render: () => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
      <Typography>Label</Typography>
      <Typography fontWeight="bold">Value</Typography>
    </Box>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box key={item} sx={{ bgcolor: 'primary.light', color: 'white', p: 2, borderRadius: 1, textAlign: 'center' }}>
          {item}
        </Box>
      ))}
    </Box>
  ),
};
