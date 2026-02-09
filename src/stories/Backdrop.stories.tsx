import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';
import { Button, CircularProgress, Typography, Box } from '@mui/material';

const meta: Meta<typeof Backdrop> = {
  title: 'Feedback/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Show Backdrop</Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
  },
};

export const TradingLoader: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Deploy Skill</Button>
        <Backdrop open={open} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress color="inherit" />
            <Typography sx={{ mt: 2 }}>Deploying skill...</Typography>
          </Box>
        </Backdrop>
      </>
    );
  },
};

export const WithMessage: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>Process Trade</Button>
        <Backdrop open={open} onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress color="inherit" size={60} />
            <Typography variant="h6" sx={{ mt: 2 }}>Processing trade...</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Click anywhere to cancel</Typography>
          </Box>
        </Backdrop>
      </>
    );
  },
};

export const Undismissable: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    React.useEffect(() => {
      if (open) {
        const timer = setTimeout(() => setOpen(false), 3000);
        return () => clearTimeout(timer);
      }
    }, [open]);
    
    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>Critical Operation</Button>
        <Backdrop open={open} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress color="inherit" size={60} />
            <Typography variant="h6" sx={{ mt: 2 }}>Building project...</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Please wait, cannot be cancelled</Typography>
          </Box>
        </Backdrop>
      </>
    );
  },
};
