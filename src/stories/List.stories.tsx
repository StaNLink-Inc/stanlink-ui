import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem } from './List';
import { ListItemText, ListItemIcon, ListItemButton, Divider, Avatar, ListItemAvatar, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const meta: Meta<typeof List> = {
  title: 'Display/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Basic: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon><TrendingUpIcon color="success" /></ListItemIcon>
        <ListItemText primary="Trending Up" />
      </ListItem>
      <ListItem>
        <ListItemIcon><TrendingDownIcon color="error" /></ListItemIcon>
        <ListItemText primary="Trending Down" />
      </ListItem>
      <ListItem>
        <ListItemIcon><CheckCircleIcon color="primary" /></ListItemIcon>
        <ListItemText primary="Completed" />
      </ListItem>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List>
      {['Dashboard', 'Skills', 'Marketplace', 'Settings'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  ),
};

export const WithDividers: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemText primary="Item 1" secondary="Description 1" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Item 2" secondary="Description 2" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Item 3" secondary="Description 3" />
      </ListItem>
    </List>
  ),
};

export const TradingPositions: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemIcon><TrendingUpIcon color="success" /></ListItemIcon>
        <ListItemText
          primary="AAPL"
          secondary="100 shares @ $175.50"
        />
        <Typography color="success.main" fontWeight="bold">+$450</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon><TrendingUpIcon color="success" /></ListItemIcon>
        <ListItemText
          primary="TSLA"
          secondary="50 shares @ $245.20"
        />
        <Typography color="success.main" fontWeight="bold">+$1,250</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon><TrendingDownIcon color="error" /></ListItemIcon>
        <ListItemText
          primary="MSFT"
          secondary="75 shares @ $380.00"
        />
        <Typography color="error.main" fontWeight="bold">-$225</Typography>
      </ListItem>
    </List>
  ),
};

export const SkillList: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'primary.main' }}>ML</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="AAPL Momentum Strategy"
          secondary="Accuracy: 87.5% • Sharpe: 2.4"
        />
        <CheckCircleIcon color="success" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>AI</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="TSLA Price Predictor"
          secondary="Accuracy: 82.3% • Sharpe: 1.9"
        />
        <CheckCircleIcon color="success" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'info.main' }}>NN</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="SPY Trend Follower"
          secondary="Accuracy: 75.8% • Sharpe: 1.5"
        />
      </ListItem>
    </List>
  ),
};

export const Dense: Story = {
  render: () => (
    <List dense>
      {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((text) => (
        <ListItem key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  ),
};
