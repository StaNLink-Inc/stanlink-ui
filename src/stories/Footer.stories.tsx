import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
          { label: 'Marketplace', href: '#' },
          { label: 'Documentation', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Help Center', href: '#' },
          { label: 'Community', href: '#' },
          { label: 'Tutorials', href: '#' },
          { label: 'API Reference', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
          { label: 'Cookie Policy', href: '#' },
          { label: 'Licenses', href: '#' },
        ],
      },
    ],
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
};

export const TradingPlatform: Story = {
  args: {
    sections: [
      {
        title: 'Trading',
        links: [
          { label: 'Marketplace', href: '#' },
          { label: 'My Skills', href: '#' },
          { label: 'Live Trading', href: '#' },
          { label: 'Backtesting', href: '#' },
        ],
      },
      {
        title: 'Signals',
        links: [
          { label: 'Telegram', href: '#' },
          { label: 'WhatsApp', href: '#' },
          { label: 'Discord', href: '#' },
          { label: 'Web Dashboard', href: '#' },
        ],
      },
      {
        title: 'Learn',
        links: [
          { label: 'Getting Started', href: '#' },
          { label: 'Create Skills', href: '#' },
          { label: 'API Docs', href: '#' },
          { label: 'Video Tutorials', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', href: '#' },
          { label: 'Community Forum', href: '#' },
          { label: 'Contact Us', href: '#' },
          { label: 'Status', href: '#' },
        ],
      },
    ],
    socialLinks: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
    copyrightText: '© 2024 Pyp Trading Platform. All rights reserved.',
  },
};

export const Minimal: Story = {
  args: {
    sections: [
      {
        title: 'Quick Links',
        links: [
          { label: 'Home', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
        ],
      },
    ],
    socialLinks: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
};

export const NoGraphic: Story = {
  args: {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
    ],
    showGraphic: false,
  },
};

export const NoSocial: Story = {
  args: {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
    ],
    socialLinks: {},
  },
};

export const GraphicInMiddle: Story = {
  args: {
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
          { label: 'Marketplace', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Help Center', href: '#' },
          { label: 'Community', href: '#' },
          { label: 'API Docs', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
        ],
      },
    ],
    socialLinks: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
    graphicPosition: 'middle',
  },
};
