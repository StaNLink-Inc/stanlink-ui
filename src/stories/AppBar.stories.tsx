import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';
import { MegaMenu } from './MegaMenu';
import { Toolbar, Typography, IconButton, Button, Badge, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const meta: Meta<typeof AppBar> = {
  title: 'Navigation/AppBar',
  component: AppBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Basic: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">StaNLink</Typography>
      </Toolbar>
    </AppBar>
  ),
};

export const WithMenu: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>StaNLink</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};

export const TradingPlatform: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <TrendingUpIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>StaNLink Trading</Typography>
        <Button color="inherit" sx={{ mr: 2 }}>Dashboard</Button>
        <Button color="inherit" sx={{ mr: 2 }}>Skills</Button>
        <Button color="inherit" sx={{ mr: 2 }}>Marketplace</Button>
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <AppBar position="static" color="primary">
        <Toolbar><Typography>Primary</Typography></Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary">
        <Toolbar><Typography>Secondary</Typography></Toolbar>
      </AppBar>
      <AppBar position="static" color="default">
        <Toolbar><Typography>Default</Typography></Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent">
        <Toolbar><Typography>Transparent</Typography></Toolbar>
      </AppBar>
    </Box>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 3 }}>StaNLink</Typography>
        <Box sx={{ flexGrow: 1, bgcolor: 'rgba(255,255,255,0.15)', borderRadius: 1, px: 2, py: 0.5 }}>
          <Typography variant="body2">Search skills...</Typography>
        </Box>
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
};

export const GlassyAppBar: Story = {
  render: () => (
    <Box sx={{ height: '100vh', bgcolor: 'grey.100', position: 'relative' }}>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Toolbar>
          <IconButton edge="start" sx={{ mr: 2, color: 'primary.main' }}>
            <MenuIcon />
          </IconButton>
          <TrendingUpIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'text.primary' }}>StaNLink Trading</Typography>
          <Button sx={{ mr: 2, color: 'text.primary' }}>Dashboard</Button>
          <Button sx={{ mr: 2, color: 'text.primary' }}>Skills</Button>
          <Button sx={{ mr: 2, color: 'text.primary' }}>Marketplace</Button>
          <IconButton sx={{ mr: 2, color: 'text.primary' }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'text.primary' }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Scroll to see glassy effect</Typography>
        {[...Array(20)].map((_, i) => (
          <Typography key={i} paragraph>
            Content line {i + 1} - The AppBar stays glassy and floats above content with blur effect.
          </Typography>
        ))}
      </Box>
    </Box>
  ),
};

export const WithMegaMenu: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <TrendingUpIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ mr: 3 }}>StaNLink</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <MegaMenu
            label="Skills"
            sections={[
              {
                title: 'Categories',
                items: [
                  { label: 'Scalping', description: '1-5 min trades' },
                  { label: 'Day Trading', description: 'Intraday strategies' },
                  { label: 'Swing Trading', description: 'Multi-day holds' },
                ],
              },
              {
                title: 'Markets',
                items: [
                  { label: 'Forex', description: 'Currency pairs' },
                  { label: 'Crypto', description: 'Digital assets' },
                  { label: 'Stocks', description: 'Equities' },
                ],
              },
            ]}
          />
          <MegaMenu
            label="Marketplace"
            sections={[
              {
                title: 'Browse',
                items: [
                  { label: 'Top Rated', description: '5-star skills' },
                  { label: 'New Releases', description: 'Latest strategies' },
                  { label: 'Best Sellers', description: 'Most popular' },
                ],
              },
              {
                title: 'Sell',
                items: [
                  { label: 'Upload Skill', description: 'Monetize your strategy' },
                  { label: 'Seller Dashboard', description: 'Track earnings' },
                ],
              },
            ]}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  ),
};

export const WithEnhancedSearch: Story = {
  render: () => {
    const [searchOpen, setSearchOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const searchRef = React.useRef<HTMLInputElement>(null);

    const skills = [
      'AAPL Momentum Strategy',
      'TSLA Price Predictor',
      'SPY Trend Follower',
      'BTC Volatility Model',
      'EUR/USD Scalper',
      'Gold Breakout Strategy',
    ];

    const filteredSkills = skills.filter(skill => 
      skill.toLowerCase().includes(searchValue.toLowerCase())
    );

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          setSearchOpen(true);
          setTimeout(() => searchRef.current?.focus(), 100);
        }
        if (e.key === 'Escape') {
          setSearchOpen(false);
          setSearchValue('');
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <TrendingUpIcon sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ mr: 3 }}>StaNLink</Typography>
            <Box 
              onClick={() => setSearchOpen(true)}
              sx={{ 
                flexGrow: 1, 
                maxWidth: 600,
                bgcolor: 'rgba(255,255,255,0.15)', 
                borderRadius: 2, 
                px: 2, 
                py: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.25)',
                  transform: 'scale(1.02)',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Search skills...</Typography>
              <Box sx={{ 
                bgcolor: 'rgba(255,255,255,0.2)', 
                px: 1, 
                py: 0.5, 
                borderRadius: 1,
                fontSize: '0.75rem',
                fontWeight: 600,
              }}>
                ⌘K
              </Box>
            </Box>
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

        {searchOpen && (
          <Box
            onClick={() => setSearchOpen(false)}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 1300,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              pt: 10,
            }}
          >
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                width: '90%',
                maxWidth: 600,
                bgcolor: 'white',
                borderRadius: 3,
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search skills..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    fontSize: '1.125rem',
                    padding: '8px 0',
                  }}
                />
              </Box>
              <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                {searchValue && filteredSkills.length > 0 ? (
                  filteredSkills.map((skill, i) => (
                    <Box
                      key={i}
                      sx={{
                        p: 2,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: 'primary.light',
                          color: 'white',
                          transform: 'translateX(8px)',
                        },
                      }}
                    >
                      <Typography fontWeight={600}>{skill}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>Trading Skill</Typography>
                    </Box>
                  ))
                ) : searchValue ? (
                  <Box sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
                    <Typography>No results found</Typography>
                  </Box>
                ) : (
                  <Box sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
                    <Typography>Start typing to search...</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        )}
      </>
    );
  },
};
