import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from './Table';
import { Paper, Chip, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const meta: Meta<typeof Table> = {
  title: 'Display/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Item 1</TableCell>
            <TableCell>100</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item 2</TableCell>
            <TableCell>200</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

export const TradingHistory: Story = {
  render: () => {
    const trades = [
      { id: 1, symbol: 'AAPL', type: 'BUY', shares: 100, price: 175.50, pnl: 450, status: 'Closed' },
      { id: 2, symbol: 'TSLA', type: 'BUY', shares: 50, price: 245.20, pnl: 1250, status: 'Closed' },
      { id: 3, symbol: 'MSFT', type: 'SELL', shares: 75, price: 380.00, pnl: -225, status: 'Closed' },
      { id: 4, symbol: 'GOOGL', type: 'BUY', shares: 25, price: 142.50, pnl: 0, status: 'Open' },
    ];
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="right">Shares</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">P&L</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id} hover>
                <TableCell><Typography fontWeight="bold">{trade.symbol}</Typography></TableCell>
                <TableCell>
                  <Chip label={trade.type} color={trade.type === 'BUY' ? 'success' : 'error'} size="small" />
                </TableCell>
                <TableCell align="right">{trade.shares}</TableCell>
                <TableCell align="right">${trade.price.toFixed(2)}</TableCell>
                <TableCell align="right">
                  <Typography color={trade.pnl > 0 ? 'success.main' : trade.pnl < 0 ? 'error.main' : 'text.primary'} fontWeight="bold">
                    {trade.pnl > 0 ? '+' : ''}${trade.pnl}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={trade.status} color={trade.status === 'Open' ? 'primary' : 'default'} size="small" variant="outlined" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

export const SkillMarketplace: Story = {
  render: () => {
    const skills = [
      { name: 'AAPL Momentum', accuracy: 87.5, sharpe: 2.4, price: 49.99, rating: 4.8 },
      { name: 'TSLA Predictor', accuracy: 82.3, sharpe: 1.9, price: 39.99, rating: 4.5 },
      { name: 'SPY Trend Follower', accuracy: 75.8, sharpe: 1.5, price: 29.99, rating: 4.2 },
    ];
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Skill Name</TableCell>
              <TableCell align="right">Accuracy</TableCell>
              <TableCell align="right">Sharpe</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.name} hover sx={{ cursor: 'pointer' }}>
                <TableCell><Typography fontWeight="bold">{skill.name}</Typography></TableCell>
                <TableCell align="right">
                  <Chip label={`${skill.accuracy}%`} color="success" size="small" />
                </TableCell>
                <TableCell align="right">{skill.sharpe}</TableCell>
                <TableCell align="right">
                  <Typography fontWeight="bold">${skill.price}</Typography>
                </TableCell>
                <TableCell align="right">⭐ {skill.rating}</TableCell>
                <TableCell align="right">
                  <IconButton size="small" color="primary"><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" color="error"><DeleteIcon fontSize="small" /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

export const Dense: Story = {
  render: () => (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN'].map((symbol) => (
            <TableRow key={symbol}>
              <TableCell>{symbol}</TableCell>
              <TableCell align="right">$175.50</TableCell>
              <TableCell align="right"><Typography color="success.main">+2.5%</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

export const Sticky: Story = {
  render: () => (
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 20 }, (_, i) => (
            <TableRow key={i}>
              <TableCell>STOCK{i + 1}</TableCell>
              <TableCell align="right">${(100 + i * 10).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
