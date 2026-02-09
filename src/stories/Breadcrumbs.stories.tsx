import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
import { Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="/">Home</Link>
      <Link underline="hover" color="inherit" href="/">Category</Link>
      <Typography color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/">Skills</Link>
      <Typography color="text.primary">Skill Details</Typography>
    </Breadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link underline="hover" color="inherit" href="/">Home</Link>
      <Link underline="hover" color="inherit" href="/">Dashboard</Link>
      <Typography color="text.primary">Analytics</Typography>
    </Breadcrumbs>
  ),
};

export const TradingNavigation: Story = {
  render: () => (
    <Breadcrumbs separator="›">
      <Link underline="hover" color="inherit" href="/">Dashboard</Link>
      <Link underline="hover" color="inherit" href="/">Marketplace</Link>
      <Link underline="hover" color="inherit" href="/">Machine Learning</Link>
      <Typography color="text.primary">AAPL Predictor v2.1</Typography>
    </Breadcrumbs>
  ),
};

export const MaxItems: Story = {
  render: () => (
    <Breadcrumbs maxItems={3}>
      <Link underline="hover" color="inherit" href="/">Home</Link>
      <Link underline="hover" color="inherit" href="/">Dashboard</Link>
      <Link underline="hover" color="inherit" href="/">Skills</Link>
      <Link underline="hover" color="inherit" href="/">Category</Link>
      <Link underline="hover" color="inherit" href="/">Subcategory</Link>
      <Typography color="text.primary">Current</Typography>
    </Breadcrumbs>
  ),
};

export const SkillPath: Story = {
  render: () => (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      <Link underline="hover" color="primary" href="/">
        <HomeIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} fontSize="small" />
        Home
      </Link>
      <Link underline="hover" color="primary" href="/">My Skills</Link>
      <Link underline="hover" color="primary" href="/">Active</Link>
      <Typography color="text.primary" fontWeight="bold">momentum_strategy.pyp</Typography>
    </Breadcrumbs>
  ),
};
