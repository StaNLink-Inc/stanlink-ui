import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Avatar } from './Avatar';
import { Mail, Notifications, ShoppingCart } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const meta: Meta<typeof Badge> = {
  title: 'StaNLink/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <Mail />
    </Badge>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="error">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="warning">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="info">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="success">
        <Mail />
      </Badge>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Badge variant="dot" color="primary">
        <Mail />
      </Badge>
      <Badge variant="dot" color="secondary">
        <Notifications />
      </Badge>
      <Badge variant="dot" color="error">
        <ShoppingCart />
      </Badge>
    </div>
  ),
};

export const MaxValue: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Badge badgeContent={99} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={1000} max={999} color="primary">
        <Mail />
      </Badge>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Badge badgeContent={4} color="error">
        <Avatar>JD</Avatar>
      </Badge>
      <Badge variant="dot" color="success">
        <Avatar src="https://i.pravatar.cc/150?img=1" />
      </Badge>
    </div>
  ),
};

export const Invisible: Story = {
  render: () => {
    const [invisible, setInvisible] = React.useState(false);

    return (
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Badge badgeContent={4} color="primary" invisible={invisible}>
          <Mail />
        </Badge>
        <button onClick={() => setInvisible(!invisible)}>
          {invisible ? 'Show Badge' : 'Hide Badge'}
        </button>
      </div>
    );
  },
};

export const NotificationIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <IconButton>
        <Badge badgeContent={5} color="error">
          <Notifications />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={12} color="primary">
          <Mail />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={3} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </div>
  ),
};

export const TradingBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge badgeContent="NEW" color="success">
        <div style={{ padding: '8px 16px', border: '1px solid #E8EAED', borderRadius: '8px' }}>
          EURUSD Scalper
        </div>
      </Badge>
      <Badge badgeContent="LIVE" color="error">
        <div style={{ padding: '8px 16px', border: '1px solid #E8EAED', borderRadius: '8px' }}>
          AI Strategy
        </div>
      </Badge>
      <Badge badgeContent={99} max={99} color="primary">
        <div style={{ padding: '8px 16px', border: '1px solid #E8EAED', borderRadius: '8px' }}>
          Signals
        </div>
      </Badge>
      <Badge variant="dot" color="success">
        <Avatar sx={{ bgcolor: '#34A853' }}>AI</Avatar>
      </Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Badge variant="dot" color="success">
          <Avatar>JD</Avatar>
        </Badge>
        <span>Online</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Badge variant="dot" color="warning">
          <Avatar>AS</Avatar>
        </Badge>
        <span>Away</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Badge variant="dot" color="error">
          <Avatar>BJ</Avatar>
        </Badge>
        <span>Busy</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Badge variant="dot" color="default">
          <Avatar>MK</Avatar>
        </Badge>
        <span>Offline</span>
      </div>
    </div>
  ),
};
