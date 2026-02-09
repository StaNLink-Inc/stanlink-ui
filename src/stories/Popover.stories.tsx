import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button, Typography, Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const meta: Meta<typeof Popover> = {
  title: 'Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return (
      <>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>Open Popover</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 2 }}>
            <Typography>Popover content</Typography>
          </Box>
        </Popover>
      </>
    );
  },
};

export const StockInfo: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>AAPL Info</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Box sx={{ p: 2, minWidth: 200 }}>
            <Typography variant="h6" gutterBottom>AAPL</Typography>
            <Typography variant="body2" color="text.secondary">Apple Inc.</Typography>
            <Typography variant="h5" color="success.main" sx={{ mt: 1 }}>$175.50</Typography>
            <Typography variant="body2" color="success.main">+$4.25 (+2.48%)</Typography>
          </Box>
        </Popover>
      </>
    );
  },
};

export const SkillActions: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    return (
      <>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>Actions</Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <List sx={{ width: 200 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setAnchorEl(null)}>
                <ListItemText primary="Deploy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setAnchorEl(null)}>
                <ListItemText primary="Edit" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setAnchorEl(null)}>
                <ListItemText primary="Delete" />
              </ListItemButton>
            </ListItem>
          </List>
        </Popover>
      </>
    );
  },
};
