import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from './Menu';
import { Button } from './Button';
import IconButton from '@mui/material/IconButton';
import { MoreVert, Settings, Logout, Person } from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const meta: Meta<typeof Menu> = {
  title: 'StaNLink/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    return (
      <>
        <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
        </Menu>
      </>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    return (
      <>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <MoreVert />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><Person fontSize="small" /></ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  },
};

export const TradingMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    return (
      <>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Strategy Actions
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Deploy Strategy</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Run Backtest</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>View Performance</MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>Edit Strategy</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Clone Strategy</MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)}>Archive</MenuItem>
        </Menu>
      </>
    );
  },
};
