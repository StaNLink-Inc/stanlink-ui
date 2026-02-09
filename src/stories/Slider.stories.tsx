import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { Stack, Typography, Box } from '@mui/material';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState(30);
    return (
      <Box sx={{ width: 300 }}>
        <Slider value={value} onChange={(_, v) => setValue(v as number)} />
        <Typography variant="body2" color="text.secondary">Value: {value}</Typography>
      </Box>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Slider defaultValue={30} color="primary" />
      <Slider defaultValue={40} color="secondary" />
      <Slider defaultValue={50} color="success" />
      <Slider defaultValue={60} color="error" />
      <Slider defaultValue={70} color="warning" />
    </Stack>
  ),
};

export const WithMarks: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={50}
        marks={[
          { value: 0, label: '0%' },
          { value: 25, label: '25%' },
          { value: 50, label: '50%' },
          { value: 75, label: '75%' },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  ),
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = React.useState<number[]>([20, 80]);
    return (
      <Box sx={{ width: 300 }}>
        <Slider value={value} onChange={(_, v) => setValue(v as number[])} />
        <Typography variant="body2" color="text.secondary">Range: {value[0]} - {value[1]}</Typography>
      </Box>
    );
  },
};

export const RiskTolerance: Story = {
  render: () => {
    const [risk, setRisk] = React.useState(50);
    return (
      <Box sx={{ width: 400 }}>
        <Typography gutterBottom>Risk Tolerance</Typography>
        <Slider
          value={risk}
          onChange={(_, v) => setRisk(v as number)}
          marks={[
            { value: 0, label: 'Low' },
            { value: 50, label: 'Medium' },
            { value: 100, label: 'High' },
          ]}
          color={risk < 33 ? 'success' : risk < 66 ? 'primary' : 'error'}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Current: {risk < 33 ? 'Conservative' : risk < 66 ? 'Moderate' : 'Aggressive'}
        </Typography>
      </Box>
    );
  },
};

export const PositionSize: Story = {
  render: () => {
    const [size, setSize] = React.useState(25);
    return (
      <Box sx={{ width: 400 }}>
        <Typography gutterBottom>Position Size (%)</Typography>
        <Slider
          value={size}
          onChange={(_, v) => setSize(v as number)}
          valueLabelDisplay="on"
          marks
          step={5}
          min={0}
          max={100}
          color="primary"
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Allocate {size}% of portfolio to this trade
        </Typography>
      </Box>
    );
  },
};

export const PriceRange: Story = {
  render: () => {
    const [range, setRange] = React.useState<number[]>([100, 500]);
    return (
      <Box sx={{ width: 400 }}>
        <Typography gutterBottom>Price Range Filter</Typography>
        <Slider
          value={range}
          onChange={(_, v) => setRange(v as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          color="secondary"
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          ${range[0]} - ${range[1]}
        </Typography>
      </Box>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Slider defaultValue={30} disabled />
    </Box>
  ),
};
