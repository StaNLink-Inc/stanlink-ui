import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './LandingPage';

const meta: Meta<typeof LandingPage> = {
  title: 'Templates/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {
    onCtaClick: () => alert('CTA clicked!'),
  },
};

export const CustomHero: Story = {
  args: {
    heroTitle: 'Trade Smarter with AI',
    heroSubtitle: 'Automate your trading strategies and maximize profits with our cutting-edge platform.',
    ctaText: 'Start Free Trial',
    onCtaClick: () => alert('Free trial started!'),
  },
};

export const SaaS: Story = {
  args: {
    heroTitle: 'Your Business, Automated',
    heroSubtitle: 'Streamline operations and scale faster with our all-in-one platform.',
    ctaText: 'Book a Demo',
    pricingPlans: [
      {
        name: 'Basic',
        price: '$29',
        features: ['10 Users', '100GB Storage', 'Email Support', 'Basic Analytics'],
      },
      {
        name: 'Business',
        price: '$99',
        features: ['50 Users', '1TB Storage', 'Priority Support', 'Advanced Analytics', 'API Access'],
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Unlimited Users', 'Unlimited Storage', '24/7 Support', 'Custom Features', 'Dedicated Manager'],
      },
    ],
  },
};
