import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation, BottomNavigationAction } from './BottomNavigation';
import { Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue)}>
          <BottomNavigationAction label="Recents" icon={<DashboardIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    );
  },
};

export const TradingApp: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue)} showLabels>
          <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
          <BottomNavigationAction label="Skills" icon={<TrendingUpIcon />} />
          <BottomNavigationAction label="Marketplace" icon={<ShoppingCartIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
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

export const ActiveWithLabel: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={(_, newValue) => setValue(newValue)}>
          <BottomNavigationAction 
            label="Dashboard" 
            icon={<DashboardIcon />} 
            sx={{ 
              minWidth: value === 0 ? 120 : 56,
              transition: 'all 0.3s',
              flexDirection: 'row',
              gap: 1,
              '& .MuiBottomNavigationAction-label': {
                opacity: value === 0 ? 1 : 0,
                fontSize: '0.75rem',
                width: value === 0 ? 'auto' : 0,
                overflow: 'hidden',
              },
            }} 
          />
          <BottomNavigationAction 
            label="Skills" 
            icon={<TrendingUpIcon />} 
            sx={{ 
              minWidth: value === 1 ? 120 : 56,
              transition: 'all 0.3s',
              flexDirection: 'row',
              gap: 1,
              '& .MuiBottomNavigationAction-label': {
                opacity: value === 1 ? 1 : 0,
                fontSize: '0.75rem',
                width: value === 1 ? 'auto' : 0,
                overflow: 'hidden',
              },
            }} 
          />
          <BottomNavigationAction 
            label="Marketplace" 
            icon={<ShoppingCartIcon />} 
            sx={{ 
              minWidth: value === 2 ? 120 : 56,
              transition: 'all 0.3s',
              flexDirection: 'row',
              gap: 1,
              '& .MuiBottomNavigationAction-label': {
                opacity: value === 2 ? 1 : 0,
                fontSize: '0.75rem',
                width: value === 2 ? 'auto' : 0,
                overflow: 'hidden',
              },
            }} 
          />
          <BottomNavigationAction 
            label="Profile" 
            icon={<PersonIcon />} 
            sx={{ 
              minWidth: value === 3 ? 120 : 56,
              transition: 'all 0.3s',
              flexDirection: 'row',
              gap: 1,
              '& .MuiBottomNavigationAction-label': {
                opacity: value === 3 ? 1 : 0,
                fontSize: '0.75rem',
                width: value === 3 ? 'auto' : 0,
                overflow: 'hidden',
              },
            }} 
          />
        </BottomNavigation>
      </Paper>
    );
  },
};
