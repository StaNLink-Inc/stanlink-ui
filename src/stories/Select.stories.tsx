import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Chip } from './Chip';

const meta: Meta<typeof Select> = {
  title: 'StaNLink/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Strategy Type</InputLabel>
        <Select value={value} label="Strategy Type" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value="momentum">Momentum</MenuItem>
          <MenuItem value="reversal">Reversal</MenuItem>
          <MenuItem value="scalping">Scalping</MenuItem>
          <MenuItem value="swing">Swing Trading</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Timeframe</InputLabel>
        <Select value={value} label="Timeframe" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value="1m">1 Minute</MenuItem>
          <MenuItem value="5m">5 Minutes</MenuItem>
          <MenuItem value="15m">15 Minutes</MenuItem>
          <MenuItem value="1h">1 Hour</MenuItem>
          <MenuItem value="4h">4 Hours</MenuItem>
          <MenuItem value="1d">1 Day</MenuItem>
        </Select>
        <FormHelperText>Select your preferred trading timeframe</FormHelperText>
      </FormControl>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <FormControl sx={{ minWidth: 200 }} required>
        <InputLabel>Currency Pair</InputLabel>
        <Select value={value} label="Currency Pair" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value="EURUSD">EUR/USD</MenuItem>
          <MenuItem value="GBPUSD">GBP/USD</MenuItem>
          <MenuItem value="USDJPY">USD/JPY</MenuItem>
          <MenuItem value="AUDUSD">AUD/USD</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <FormControl sx={{ minWidth: 200 }} error>
        <InputLabel>Risk Level</InputLabel>
        <Select value={value} label="Risk Level" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
        <FormHelperText>Please select a risk level</FormHelperText>
      </FormControl>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }} disabled>
      <InputLabel>Status</InputLabel>
      <Select value="active" label="Status">
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="paused">Paused</MenuItem>
        <MenuItem value="stopped">Stopped</MenuItem>
      </Select>
    </FormControl>
  ),
};

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = React.useState<string[]>([]);

    return (
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel>Trading Pairs</InputLabel>
        <Select
          multiple
          value={values}
          label="Trading Pairs"
          onChange={(e) => setValues(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
          renderValue={(selected) => (
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} size="small" />
              ))}
            </div>
          )}
        >
          <MenuItem value="EURUSD">EUR/USD</MenuItem>
          <MenuItem value="GBPUSD">GBP/USD</MenuItem>
          <MenuItem value="USDJPY">USD/JPY</MenuItem>
          <MenuItem value="AUDUSD">AUD/USD</MenuItem>
          <MenuItem value="USDCAD">USD/CAD</MenuItem>
          <MenuItem value="NZDUSD">NZD/USD</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [value, setValue] = React.useState('medium');

    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Small</InputLabel>
          <Select value={value} label="Small" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Medium</InputLabel>
          <Select value={value} label="Medium" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  },
};

export const TradingForm: Story = {
  render: () => {
    const [strategy, setStrategy] = React.useState('');
    const [pair, setPair] = React.useState('');
    const [timeframe, setTimeframe] = React.useState('');
    const [risk, setRisk] = React.useState('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <FormControl fullWidth>
          <InputLabel>Strategy Type</InputLabel>
          <Select value={strategy} label="Strategy Type" onChange={(e) => setStrategy(e.target.value)}>
            <MenuItem value="momentum">Momentum</MenuItem>
            <MenuItem value="reversal">Reversal</MenuItem>
            <MenuItem value="scalping">Scalping</MenuItem>
            <MenuItem value="swing">Swing Trading</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Currency Pair</InputLabel>
          <Select value={pair} label="Currency Pair" onChange={(e) => setPair(e.target.value)}>
            <MenuItem value="EURUSD">EUR/USD</MenuItem>
            <MenuItem value="GBPUSD">GBP/USD</MenuItem>
            <MenuItem value="USDJPY">USD/JPY</MenuItem>
            <MenuItem value="AUDUSD">AUD/USD</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Timeframe</InputLabel>
          <Select value={timeframe} label="Timeframe" onChange={(e) => setTimeframe(e.target.value)}>
            <MenuItem value="1m">1 Minute</MenuItem>
            <MenuItem value="5m">5 Minutes</MenuItem>
            <MenuItem value="15m">15 Minutes</MenuItem>
            <MenuItem value="1h">1 Hour</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Risk Level</InputLabel>
          <Select value={risk} label="Risk Level" onChange={(e) => setRisk(e.target.value)}>
            <MenuItem value="low">Low (1-2%)</MenuItem>
            <MenuItem value="medium">Medium (3-5%)</MenuItem>
            <MenuItem value="high">High (6-10%)</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  },
};
