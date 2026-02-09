import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import { Box, Paper } from '@mui/material';

const meta: Meta<typeof Logo> = {
  title: 'Branding/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    width: 50,
  },
};

export const Large: Story = {
  args: {
    width: 120,
  },
};

export const CustomSize: Story = {
  args: {
    width: 100,
  },
};

export const NoLink: Story = {
  args: {
    href: undefined,
  },
};

export const InAppBar: Story = {
  render: () => (
    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
      <Logo width={70} />
    </Paper>
  ),
};

export const InFooter: Story = {
  render: () => (
    <Box sx={{ bgcolor: 'grey.900', p: 4 }}>
      <Logo width={90} />
    </Box>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Logo width={{ xs: 60, sm: 70, md: 80 }} />
  ),
};
