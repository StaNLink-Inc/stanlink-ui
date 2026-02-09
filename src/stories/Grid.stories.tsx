import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Box, Paper, Typography, Card, CardContent } from '@mui/material';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  render: () => (
    <Grid container spacing={2}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={3} key={item}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>Item {item}</Paper>
        </Grid>
      ))}
    </Grid>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>xs=12 sm=6 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>xs=12 sm=6 md=4</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>xs=12 sm=6 md=4</Paper>
      </Grid>
    </Grid>
  ),
};

export const TradingLayout: Story = {
  render: () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Portfolio Overview</Typography>
            <Typography color="text.secondary">Total Value: $125,450</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ height: 300 }}>
          <CardContent>
            <Typography variant="h6">Price Chart</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 240, bgcolor: 'grey.100', borderRadius: 1 }}>
              Chart Area
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: 300 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Active Positions</Typography>
            {['AAPL', 'TSLA', 'MSFT'].map((symbol) => (
              <Box key={symbol} sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
                <Typography variant="body2">{symbol}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Win Rate</Typography>
            <Typography variant="h6" color="success.main">68.5%</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Total Trades</Typography>
            <Typography variant="h6">142</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Profit</Typography>
            <Typography variant="h6" color="success.main">+$12,450</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="text.secondary">Sharpe Ratio</Typography>
            <Typography variant="h6">2.4</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  ),
};

export const Spacing: Story = {
  render: () => (
    <>
      {[0, 1, 2, 3, 4].map((spacing) => (
        <Box key={spacing} sx={{ mb: 3 }}>
          <Typography variant="body2" gutterBottom>spacing={spacing}</Typography>
          <Grid container spacing={spacing}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={4} key={item}>
                <Paper sx={{ p: 1, textAlign: 'center', bgcolor: 'primary.light', color: 'white' }}>
                  Item {item}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  ),
};
