import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';
import { Button, Alert, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="This is a basic snackbar"
        />
      </>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          message="Message archived"
          action={
            <>
              <Button color="secondary" size="small" onClick={() => setOpen(false)}>UNDO</Button>
              <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </>
    );
  },
};

export const WithAlert: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show Alert</Button>
        <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Operation completed successfully!
          </Alert>
        </Snackbar>
      </>
    );
  },
};

export const Severities: Story = {
  render: () => {
    const [open, setOpen] = React.useState({ success: false, error: false, warning: false, info: false });
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="success" onClick={() => setOpen({ ...open, success: true })}>Success</Button>
          <Button variant="outlined" color="error" onClick={() => setOpen({ ...open, error: true })}>Error</Button>
          <Button variant="outlined" color="warning" onClick={() => setOpen({ ...open, warning: true })}>Warning</Button>
          <Button variant="outlined" color="info" onClick={() => setOpen({ ...open, info: true })}>Info</Button>
        </Stack>
        <Snackbar open={open.success} autoHideDuration={3000} onClose={() => setOpen({ ...open, success: false })}>
          <Alert severity="success">Trade executed successfully!</Alert>
        </Snackbar>
        <Snackbar open={open.error} autoHideDuration={3000} onClose={() => setOpen({ ...open, error: false })}>
          <Alert severity="error">Trade failed - insufficient funds</Alert>
        </Snackbar>
        <Snackbar open={open.warning} autoHideDuration={3000} onClose={() => setOpen({ ...open, warning: false })}>
          <Alert severity="warning">High volatility detected</Alert>
        </Snackbar>
        <Snackbar open={open.info} autoHideDuration={3000} onClose={() => setOpen({ ...open, info: false })}>
          <Alert severity="info">Market opens in 5 minutes</Alert>
        </Snackbar>
      </>
    );
  },
};

export const TradingNotifications: Story = {
  render: () => {
    const [open, setOpen] = React.useState({ order: false, signal: false, profit: false });
    return (
      <>
        <Stack spacing={2}>
          <Button variant="contained" onClick={() => setOpen({ ...open, order: true })}>Simulate Order Fill</Button>
          <Button variant="contained" color="secondary" onClick={() => setOpen({ ...open, signal: true })}>Simulate Signal</Button>
          <Button variant="contained" color="success" onClick={() => setOpen({ ...open, profit: true })}>Simulate Profit Target</Button>
        </Stack>
        <Snackbar open={open.order} autoHideDuration={5000} onClose={() => setOpen({ ...open, order: false })}>
          <Alert severity="success" variant="filled">
            Order filled: BUY 100 AAPL @ $175.50
          </Alert>
        </Snackbar>
        <Snackbar open={open.signal} autoHideDuration={5000} onClose={() => setOpen({ ...open, signal: false })}>
          <Alert severity="info" variant="filled">
            New signal: BUY TSLA - Confidence: 87%
          </Alert>
        </Snackbar>
        <Snackbar open={open.profit} autoHideDuration={5000} onClose={() => setOpen({ ...open, profit: false })}>
          <Alert severity="success" variant="filled">
            Profit target reached: +$1,250 (+5.2%)
          </Alert>
        </Snackbar>
      </>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show Position</Button>
        <Snackbar
          open={open}
          autoHideDuration={null}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="info"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Position opened: LONG BTC/USD @ $45,000
          </Alert>
        </Snackbar>
      </>
    );
  },
};
