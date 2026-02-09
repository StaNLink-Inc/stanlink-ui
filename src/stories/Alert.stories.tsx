import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from './Button';

const meta: Meta<typeof Alert> = {
  title: 'StaNLink/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'This is a success alert — check it out!',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'This is an info alert — check it out!',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'This is a warning alert — check it out!',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'This is an error alert — check it out!',
  },
};

export const WithTitle: Story = {
  render: () => (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      Your trading strategy has been successfully deployed!
    </Alert>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Alert
      severity="info"
      action={
        <Button size="small" variant="text">
          UNDO
        </Button>
      }
    >
      This is an info alert with an action!
    </Alert>
  ),
};

export const Filled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="filled" severity="success">
        This is a filled success alert!
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info alert!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning alert!
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error alert!
      </Alert>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="outlined" severity="success">
        This is an outlined success alert!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info alert!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning alert!
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an outlined error alert!
      </Alert>
    </div>
  ),
};

export const Standard: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert severity="success">This is a standard success alert!</Alert>
      <Alert severity="info">This is a standard info alert!</Alert>
      <Alert severity="warning">This is a standard warning alert!</Alert>
      <Alert severity="error">This is a standard error alert!</Alert>
    </div>
  ),
};

export const TradingExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Alert severity="success">
        <AlertTitle>Strategy Deployed</AlertTitle>
        Your EURUSD Scalper strategy is now live and generating signals.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Market Update</AlertTitle>
        High volatility detected on GBPUSD. Consider adjusting your risk parameters.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Subscription Expiring</AlertTitle>
        Your Pro subscription expires in 3 days. Renew now to avoid interruption.
      </Alert>
      <Alert severity="error">
        <AlertTitle>Connection Lost</AlertTitle>
        Unable to connect to trading server. Retrying in 30 seconds...
      </Alert>
    </div>
  ),
};
