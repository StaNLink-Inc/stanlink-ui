import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';
import { TextField, Chip, Avatar } from '@mui/material';

const meta: Meta<typeof Autocomplete> = {
  title: 'Input/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const stocks = ['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN', 'META', 'NVDA', 'AMD', 'INTC', 'NFLX'];

export const Basic: Story = {
  render: () => (
    <Autocomplete
      options={stocks}
      renderInput={(params) => <TextField {...params} label="Select Stock" />}
      sx={{ width: 300 }}
    />
  ),
};

export const StockSearch: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>(null);
    return (
      <Autocomplete
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        options={stocks}
        renderInput={(params) => <TextField {...params} label="Search Stocks" placeholder="Type to search..." />}
        sx={{ width: 400 }}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => (
    <Autocomplete
      multiple
      options={stocks}
      defaultValue={['AAPL', 'TSLA']}
      renderInput={(params) => <TextField {...params} label="Select Multiple Stocks" />}
      sx={{ width: 500 }}
    />
  ),
};

export const WithChips: Story = {
  render: () => (
    <Autocomplete
      multiple
      options={stocks}
      defaultValue={['AAPL']}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} color="primary" />
        ))
      }
      renderInput={(params) => <TextField {...params} label="Watchlist" placeholder="Add stocks..." />}
      sx={{ width: 500 }}
    />
  ),
};

export const SkillSearch: Story = {
  render: () => {
    const skills = [
      { title: 'AAPL Momentum Strategy', category: 'Machine Learning' },
      { title: 'TSLA Price Predictor', category: 'Neural Network' },
      { title: 'SPY Trend Follower', category: 'Technical Analysis' },
      { title: 'BTC Volatility Model', category: 'Crypto' },
    ];
    return (
      <Autocomplete
        options={skills}
        getOptionLabel={(option) => option.title}
        groupBy={(option) => option.category}
        renderInput={(params) => <TextField {...params} label="Search Skills" placeholder="Find trading skills..." />}
        sx={{ width: 500 }}
      />
    );
  },
};

export const FreeSolo: Story = {
  render: () => (
    <Autocomplete
      freeSolo
      options={stocks}
      renderInput={(params) => <TextField {...params} label="Stock Symbol" helperText="Type any symbol" />}
      sx={{ width: 300 }}
    />
  ),
};

export const WithIcons: Story = {
  render: () => {
    const options = [
      { symbol: 'AAPL', name: 'Apple Inc.' },
      { symbol: 'TSLA', name: 'Tesla Inc.' },
      { symbol: 'MSFT', name: 'Microsoft Corp.' },
    ];
    return (
      <Autocomplete
        options={options}
        getOptionLabel={(option) => `${option.symbol} - ${option.name}`}
        renderOption={(props, option) => (
          <li {...props}>
            <Avatar sx={{ mr: 2, bgcolor: 'primary.main', width: 32, height: 32 }}>{option.symbol[0]}</Avatar>
            <div>
              <div style={{ fontWeight: 'bold' }}>{option.symbol}</div>
              <div style={{ fontSize: '0.875rem', color: 'gray' }}>{option.name}</div>
            </div>
          </li>
        )}
        renderInput={(params) => <TextField {...params} label="Search Companies" />}
        sx={{ width: 500 }}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Autocomplete
      disabled
      options={stocks}
      defaultValue="AAPL"
      renderInput={(params) => <TextField {...params} label="Disabled" />}
      sx={{ width: 300 }}
    />
  ),
};
