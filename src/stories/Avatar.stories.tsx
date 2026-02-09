import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Person, TrendingUp } from '@mui/icons-material';

const meta: Meta<typeof Avatar> = {
  title: 'StaNLink/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
  },
};

export const WithInitials: Story = {
  args: {
    children: 'JD',
  },
};

export const WithIcon: Story = {
  args: {
    children: <Person />,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar variant="circular">JD</Avatar>
      <Avatar variant="rounded">JD</Avatar>
      <Avatar variant="square">JD</Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>S</Avatar>
      <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>M</Avatar>
      <Avatar sx={{ width: 40, height: 40 }}>L</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>XL</Avatar>
      <Avatar sx={{ width: 72, height: 72, fontSize: '1.5rem' }}>2X</Avatar>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar sx={{ bgcolor: '#1A73E8' }}>P</Avatar>
      <Avatar sx={{ bgcolor: '#34A853' }}>S</Avatar>
      <Avatar sx={{ bgcolor: '#EA4335' }}>E</Avatar>
      <Avatar sx={{ bgcolor: '#FBBC04' }}>W</Avatar>
      <Avatar sx={{ bgcolor: '#4285F4' }}>I</Avatar>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar alt="User 1" src="https://i.pravatar.cc/150?img=1" />
      <Avatar alt="User 2" src="https://i.pravatar.cc/150?img=2" />
      <Avatar alt="User 3" src="https://i.pravatar.cc/150?img=3" />
      <Avatar alt="User 4" src="https://i.pravatar.cc/150?img=4" />
      <Avatar alt="User 5" src="https://i.pravatar.cc/150?img=5" />
    </AvatarGroup>
  ),
};

export const TradingAvatars: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar sx={{ bgcolor: '#34A853' }}>
        <TrendingUp />
      </Avatar>
      <Avatar sx={{ bgcolor: '#1A73E8' }}>AI</Avatar>
      <Avatar variant="rounded" sx={{ bgcolor: '#FBBC04' }}>
        ₿
      </Avatar>
      <Avatar variant="square" sx={{ bgcolor: '#EA4335' }}>
        FX
      </Avatar>
    </div>
  ),
};

export const UserProfiles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar src="https://i.pravatar.cc/150?img=12">JD</Avatar>
        <div>
          <div style={{ fontWeight: 600 }}>John Doe</div>
          <div style={{ fontSize: '0.875rem', color: '#5F6368' }}>@johndoe</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar sx={{ bgcolor: '#1A73E8' }}>AS</Avatar>
        <div>
          <div style={{ fontWeight: 600 }}>Alice Smith</div>
          <div style={{ fontSize: '0.875rem', color: '#5F6368' }}>@alicesmith</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Avatar src="https://i.pravatar.cc/150?img=33">BJ</Avatar>
        <div>
          <div style={{ fontWeight: 600 }}>Bob Johnson</div>
          <div style={{ fontSize: '0.875rem', color: '#5F6368' }}>@bobjohnson</div>
        </div>
      </div>
    </div>
  ),
};
