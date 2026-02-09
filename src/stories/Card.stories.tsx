import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from './Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Favorite, Share, MoreVert } from '@mui/icons-material';

const meta: Meta<typeof Card> = {
  title: 'StaNLink/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Basic Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card with just content. Cards are surfaces that display content and actions.
        </Typography>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card with Actions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cards can include action buttons at the bottom.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small" variant="outlined">Share</Button>
      </CardActions>
    </Card>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400"
        alt="Trading chart"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trading Strategy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          High-performance momentum strategy with 85% accuracy on EURUSD.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
        <Button size="small" variant="outlined">Subscribe</Button>
      </CardActions>
    </Card>
  ),
};

export const SkillCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>
            <Typography variant="overline" color="text.secondary">
              Momentum Strategy
            </Typography>
            <Typography variant="h5" component="div">
              EURUSD Scalper
            </Typography>
          </div>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </div>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Advanced scalping strategy optimized for 5-minute timeframes.
        </Typography>
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <div>
            <Typography variant="caption" color="text.secondary">Accuracy</Typography>
            <Typography variant="h6" color="success.main">87.5%</Typography>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">Sharpe</Typography>
            <Typography variant="h6">2.34</Typography>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">Subscribers</Typography>
            <Typography variant="h6">1.2K</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" fullWidth>
          Subscribe - $29/mo
        </Button>
      </CardActions>
    </Card>
  ),
};

export const UserCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>JD</Avatar>
          <div>
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body2" color="text.secondary">
              @johndoe
            </Typography>
          </div>
        </div>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Professional trader specializing in forex strategies. Creator of 15+ verified skills.
        </Typography>
        <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
          <div>
            <Typography variant="h6">15</Typography>
            <Typography variant="caption" color="text.secondary">Skills</Typography>
          </div>
          <div>
            <Typography variant="h6">3.2K</Typography>
            <Typography variant="caption" color="text.secondary">Followers</Typography>
          </div>
          <div>
            <Typography variant="h6">4.8</Typography>
            <Typography variant="caption" color="text.secondary">Rating</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" fullWidth>
          Follow
        </Button>
      </CardActions>
    </Card>
  ),
};

export const InteractiveCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400"
        alt="Market analysis"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Market Analysis Pro
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Real-time market analysis with AI-powered predictions and risk management.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
        <Button size="small" sx={{ ml: 'auto' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  ),
};

export const ElevationLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {[0, 1, 3, 6, 12, 24].map((elevation) => (
        <Card key={elevation} elevation={elevation} sx={{ width: 150, height: 100 }}>
          <CardContent>
            <Typography variant="h6">Elevation</Typography>
            <Typography variant="h4">{elevation}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
