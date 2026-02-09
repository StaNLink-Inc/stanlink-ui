import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MegaMenu } from './MegaMenu';
import { AppBar, Toolbar, Box } from '@mui/material';

const meta: Meta<typeof MegaMenu> = {
  title: 'Navigation/MegaMenu',
  component: MegaMenu,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof MegaMenu>;

export const Default: Story = {
  args: {
    label: 'Products',
    sections: [
      {
        title: 'Trading',
        items: [
          { label: 'Skills Marketplace', description: 'Buy & sell strategies' },
          { label: 'Signal Delivery', description: 'Multi-platform alerts' },
          { label: 'Backtesting', description: 'Test your strategies' },
        ],
      },
      {
        title: 'Platforms',
        items: [
          { label: 'Telegram Bot', description: 'Automated trading signals' },
          { label: 'WhatsApp', description: 'Real-time notifications' },
          { label: 'Discord', description: 'Community trading' },
        ],
      },
    ],
  },
};

export const InAppBar: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2 }}>
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
      </Toolbar>
    </AppBar>
  ),
};
