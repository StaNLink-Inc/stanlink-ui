import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation, BottomNavigationAction } from './BottomNavigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ height: '300px', backgroundColor: '#f8f9fa', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const DefaultFloatingPill: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue)}>
        <BottomNavigationAction label="Home" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Search" icon={<TrendingUpIcon />} />
        <BottomNavigationAction label="Market" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    );
  },
};

export const WithoutLabels: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue)}>
        <BottomNavigationAction icon={<DashboardIcon />} />
        <BottomNavigationAction icon={<TrendingUpIcon />} />
        <BottomNavigationAction icon={<ShoppingCartIcon />} />
        <BottomNavigationAction icon={<PersonIcon />} />
      </BottomNavigation>
    );
  },
};
