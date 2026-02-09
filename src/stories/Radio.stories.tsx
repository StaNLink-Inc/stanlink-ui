import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioGroup, FormControlLabel, FormControl, FormLabel, Stack } from '@mui/material';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState('a');
    return (
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
        <FormControlLabel value="c" control={<Radio />} label="Option C" />
      </RadioGroup>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <RadioGroup defaultValue="primary">
        <FormControlLabel value="default" control={<Radio />} label="Default" />
        <FormControlLabel value="primary" control={<Radio color="primary" />} label="Primary" />
        <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
        <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
        <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
        <FormControlLabel value="warning" control={<Radio color="warning" />} label="Warning" />
      </RadioGroup>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<Radio size="small" />} label="Small" />
      <FormControlLabel control={<Radio size="medium" />} label="Medium" />
    </Stack>
  ),
};

export const TradingStrategy: Story = {
  render: () => {
    const [strategy, setStrategy] = React.useState('aggressive');
    return (
      <FormControl>
        <FormLabel>Trading Strategy</FormLabel>
        <RadioGroup value={strategy} onChange={(e) => setStrategy(e.target.value)}>
          <FormControlLabel value="conservative" control={<Radio color="success" />} label="Conservative - Low risk, steady returns" />
          <FormControlLabel value="moderate" control={<Radio color="primary" />} label="Moderate - Balanced risk/reward" />
          <FormControlLabel value="aggressive" control={<Radio color="warning" />} label="Aggressive - High risk, high reward" />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const OrderType: Story = {
  render: () => {
    const [orderType, setOrderType] = React.useState('market');
    return (
      <FormControl>
        <FormLabel>Order Type</FormLabel>
        <RadioGroup value={orderType} onChange={(e) => setOrderType(e.target.value)}>
          <FormControlLabel value="market" control={<Radio />} label="Market Order" />
          <FormControlLabel value="limit" control={<Radio />} label="Limit Order" />
          <FormControlLabel value="stop" control={<Radio />} label="Stop Loss" />
          <FormControlLabel value="trailing" control={<Radio />} label="Trailing Stop" />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="b">
      <FormControlLabel value="a" control={<Radio />} label="Enabled" />
      <FormControlLabel value="b" control={<Radio />} label="Enabled & Selected" />
      <FormControlLabel value="c" control={<Radio />} label="Disabled" disabled />
    </RadioGroup>
  ),
};
