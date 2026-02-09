import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer 
          variant="permanent"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: open ? 280 : 64,
              transition: 'width 0.3s',
              overflowX: 'hidden',
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, minHeight: 48 }}>
              <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1, flexShrink: 0 }} />
              {open && <Typography variant="h6" fontWeight="bold" sx={{ ml: 2, whiteSpace: 'nowrap' }}>StaNLink</Typography>}
            </Box>
            <List>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
                    <DashboardIcon color="primary" />
                  </ListItemIcon>
                  {open && <ListItemText primary="Dashboard" />}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
                    <TrendingUpIcon />
                  </ListItemIcon>
                  {open && <ListItemText primary="Skills" />}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  {open && <ListItemText primary="Marketplace" />}
                </ListItemButton>
              </ListItem>
            </List>
            {open && <Divider sx={{ my: 2 }} />}
            {open && (
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton sx={{ borderRadius: 1 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 2 }}><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ borderRadius: 1 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 2 }}><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </Box>
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4">Main Content</Typography>
          <Typography>Hover sidebar to expand</Typography>
        </Box>
      </Box>
    );
  },
};

export const TradingPlatform: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer 
          variant="permanent"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: open ? 280 : 64,
              transition: 'width 0.3s',
              overflowX: 'hidden',
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            {open && (
              <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1, mb: 2 }}>
                <Typography variant="h6">StaNLink Trading</Typography>
                <Typography variant="body2">AI-Powered Platform</Typography>
              </Box>
            )}
            <List>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
                    <DashboardIcon color="primary" />
                  </ListItemIcon>
                  {open && <ListItemText primary="Dashboard" />}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
                    <TrendingUpIcon />
                  </ListItemIcon>
                  {open && <ListItemText primary="My Skills" />}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: 1, justifyContent: open ? 'initial' : 'center' }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  {open && <ListItemText primary="Marketplace" />}
                </ListItemButton>
              </ListItem>
            </List>
            {open && <Divider sx={{ my: 2 }} />}
            {open && (
              <List>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton sx={{ borderRadius: 1 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 2 }}><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ borderRadius: 1 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 2 }}><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </Box>
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4">Trading Dashboard</Typography>
          <Typography>Hover sidebar to see full menu</Typography>
        </Box>
      </Box>
    );
  },
};
