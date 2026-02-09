import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Button } from './Button';
import { TextField } from './TextField';
import { Alert } from './Alert';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';

const meta: Meta<typeof Dialog> = {
  title: 'StaNLink/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a basic dialog. You can put any content here.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Form Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Subscribe to Strategy</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your email to receive trading signals from this strategy.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Full Width Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
          <DialogTitle>Strategy Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog takes up the full width of the screen up to the specified max width.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const WithCloseButton: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog with Close Button
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Dialog Title
            <IconButton onClick={() => setOpen(false)} size="small">
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog has a close button in the title bar.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setOpen(false)}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const ConfirmationDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Delete Strategy
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this strategy? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const TradingDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Deploy Strategy
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Deploy Trading Strategy</DialogTitle>
          <DialogContent>
            <Alert severity="info" sx={{ mb: 2 }}>
              Your strategy will start generating live signals immediately after deployment.
            </Alert>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <TextField
                label="Strategy Name"
                fullWidth
                defaultValue="EURUSD Scalper"
              />
              <TextField
                label="Risk Level (%)"
                type="number"
                fullWidth
                defaultValue="2"
              />
              <TextField
                label="Max Positions"
                type="number"
                fullWidth
                defaultValue="3"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="success" onClick={() => setOpen(false)}>
              Deploy
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

export const ScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Scrollable Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {[...Array(50)].map((_, i) => (
                <p key={i}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Decline</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};
