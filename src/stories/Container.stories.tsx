import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Box, Typography, Card, CardContent } from '@mui/material';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const MaxWidths: Story = {
  render: () => (
    <>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((maxWidth) => (
        <Container key={maxWidth} maxWidth={maxWidth} sx={{ mb: 2 }}>
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>
            <Typography>maxWidth="{maxWidth}"</Typography>
          </Box>
        </Container>
      ))}
    </>
  ),
};

export const Fixed: Story = {
  render: () => (
    <Container fixed>
      <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 2, borderRadius: 1 }}>
        <Typography>Fixed width container</Typography>
      </Box>
    </Container>
  ),
};

export const TradingDashboard: Story = {
  render: () => (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Trading Dashboard</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2, mt: 3 }}>
        <Card>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Total Profit</Typography>
            <Typography variant="h5" color="success.main">+$12,450</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Active Trades</Typography>
            <Typography variant="h5">24</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>Win Rate</Typography>
            <Typography variant="h5" color="primary.main">68.5%</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  ),
};

export const DisableGutters: Story = {
  render: () => (
    <Container disableGutters>
      <Box sx={{ bgcolor: 'warning.main', color: 'white', p: 2 }}>
        <Typography>No horizontal padding</Typography>
      </Box>
    </Container>
  ),
};
