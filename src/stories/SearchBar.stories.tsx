import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const skills = [
  { title: 'AAPL Momentum Strategy', subtitle: 'Accuracy: 87.5%' },
  { title: 'TSLA Price Predictor', subtitle: 'Accuracy: 82.3%' },
  { title: 'SPY Trend Follower', subtitle: 'Accuracy: 75.8%' },
  { title: 'BTC Volatility Model', subtitle: 'Accuracy: 79.2%' },
  { title: 'EUR/USD Scalper', subtitle: 'Accuracy: 84.1%' },
  { title: 'Gold Breakout Strategy', subtitle: 'Accuracy: 76.5%' },
];

export const Basic: Story = {
  render: () => {
    const [results, setResults] = React.useState<typeof skills>([]);
    
    const handleSearch = (value: string) => {
      if (value) {
        setResults(skills.filter(s => s.title.toLowerCase().includes(value.toLowerCase())));
      } else {
        setResults([]);
      }
    };

    return (
      <SearchBar 
        placeholder="Search skills..." 
        onSearch={handleSearch}
        results={results}
        onResultClick={(result) => console.log('Clicked:', result)}
      />
    );
  },
};

export const InAppBar: Story = {
  render: () => {
    const [results, setResults] = React.useState<typeof skills>([]);
    
    const handleSearch = (value: string) => {
      if (value) {
        setResults(skills.filter(s => s.title.toLowerCase().includes(value.toLowerCase())));
      } else {
        setResults([]);
      }
    };

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <TrendingUpIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ mr: 3 }}>StaNLink</Typography>
          <Button color="inherit" sx={{ mr: 2 }}>Dashboard</Button>
          <Button color="inherit" sx={{ mr: 2 }}>Skills</Button>
          <SearchBar 
            placeholder="Search skills..." 
            onSearch={handleSearch}
            results={results}
          />
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  },
};

export const GlassyAppBarWithSearch: Story = {
  render: () => {
    const [results, setResults] = React.useState<typeof skills>([]);
    
    const handleSearch = (value: string) => {
      if (value) {
        setResults(skills.filter(s => s.title.toLowerCase().includes(value.toLowerCase())));
      } else {
        setResults([]);
      }
    };

    return (
      <AppBar 
        position="static"
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Toolbar>
          <IconButton edge="start" sx={{ mr: 2, color: 'primary.main' }}>
            <MenuIcon />
          </IconButton>
          <TrendingUpIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ mr: 3, color: 'text.primary' }}>StaNLink</Typography>
          <Button sx={{ mr: 2, color: 'text.primary' }}>Dashboard</Button>
          <Button sx={{ mr: 2, color: 'text.primary' }}>Skills</Button>
          <SearchBar 
            placeholder="Search skills..." 
            onSearch={handleSearch}
            results={results}
          />
          <IconButton sx={{ ml: 2, color: 'text.primary' }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'text.primary' }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  },
};
