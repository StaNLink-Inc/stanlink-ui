import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack, Badge } from '@mui/material';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton color="default"><DeleteIcon /></IconButton>
      <IconButton color="primary"><FavoriteIcon /></IconButton>
      <IconButton color="secondary"><ShareIcon /></IconButton>
      <IconButton color="success"><TrendingUpIcon /></IconButton>
      <IconButton color="error"><DeleteIcon /></IconButton>
      <IconButton color="warning"><NotificationsIcon /></IconButton>
      <IconButton color="info"><SettingsIcon /></IconButton>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
      <IconButton size="medium"><DeleteIcon /></IconButton>
      <IconButton size="large"><DeleteIcon fontSize="large" /></IconButton>
    </Stack>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <IconButton color="primary">
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="primary">
        <Badge variant="dot" color="success">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="primary">
        <Badge badgeContent={99} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Stack>
  ),
};

export const TradingActions: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton color="success" title="Start Trading">
        <TrendingUpIcon />
      </IconButton>
      <IconButton color="primary" title="Notifications">
        <Badge badgeContent={3} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="default" title="Settings">
        <SettingsIcon />
      </IconButton>
      <IconButton color="default" title="More">
        <MoreVertIcon />
      </IconButton>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton disabled><DeleteIcon /></IconButton>
      <IconButton disabled color="primary"><FavoriteIcon /></IconButton>
    </Stack>
  ),
};
