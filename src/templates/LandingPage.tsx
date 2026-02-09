import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import { Logo } from '../stories/Logo';
import { Footer } from '../stories/Footer';
import { StaNLinkGraphic } from '../stories/StaNLinkGraphic';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface LandingPageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  pricingPlans?: Array<{
    name: string;
    price: string;
    features: string[];
    highlighted?: boolean;
  }>;
  testimonials?: Array<{
    name: string;
    role: string;
    avatar?: string;
    quote: string;
  }>;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  heroTitle = 'Build. Automate. Monetize.',
  heroSubtitle = 'AI-powered trading platform that turns your strategies into profit across Telegram, WhatsApp, Discord, and Web.',
  ctaText = 'Get Started Free',
  onCtaClick,
  features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'AI-Powered Strategies',
      description: 'Create trading skills with .pyp format and let AI optimize your trades in real-time.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure & Reliable',
      description: 'Bank-grade encryption and 99.9% uptime guarantee for your trading operations.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Lightning Fast',
      description: 'Execute trades in milliseconds with our optimized infrastructure.',
    },
  ],
  pricingPlans = [
    {
      name: 'Starter',
      price: '$0',
      features: ['5 Active Skills', 'Basic Analytics', 'Community Support', 'Web Dashboard'],
    },
    {
      name: 'Pro',
      price: '$49',
      features: ['Unlimited Skills', 'Advanced Analytics', 'Priority Support', 'All Platforms', 'API Access'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom Solutions', 'Dedicated Support', 'White Label', 'SLA Guarantee', 'Custom Integrations'],
    },
  ],
  testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Crypto Trader',
      quote: 'Increased my trading profits by 300% in just 3 months. The AI strategies are game-changing.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Hedge Fund Manager',
      quote: 'Best trading automation platform I\'ve used. The multi-platform delivery is brilliant.',
    },
    {
      name: 'Emma Thompson',
      role: 'Day Trader',
      quote: 'Simple to use, powerful results. The marketplace has amazing pre-built strategies.',
    },
  ],
}) => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', bgcolor: 'grey.900' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05 }}>
          <StaNLinkGraphic text="TRADE" />
        </Box>
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Box sx={{ mb: 4 }}>
            <Logo width={100} />
          </Box>
          
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip label="🚀 Now Live" color="primary" sx={{ mb: 3 }} />
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, color: 'white', mb: 3, lineHeight: 1.1 }}>
                {heroTitle}
              </Typography>
              <Typography variant="h5" sx={{ color: 'grey.400', mb: 4, lineHeight: 1.6 }}>
                {heroSubtitle}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" size="large" onClick={onCtaClick} sx={{ px: 4, py: 1.5 }}>
                  {ctaText}
                </Button>
                <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, color: 'white', borderColor: 'white' }}>
                  Watch Demo
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: 400, display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  background: (theme) => `radial-gradient(circle, ${theme.palette.primary.main}40 0%, transparent 70%)`,
                  animation: 'pulse 3s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
                    '50%': { transform: 'translate(-50%, -50%) scale(1.1)' },
                  },
                }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography variant="h2" align="center" fontWeight="bold" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}>
          Everything you need to automate and scale your trading strategies
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" fontWeight="bold" gutterBottom>
            Simple Pricing
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
            Choose the plan that fits your needs
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  p: 4, 
                  textAlign: 'center',
                  border: plan.highlighted ? 3 : 0,
                  borderColor: 'primary.main',
                  position: 'relative',
                  transform: plan.highlighted ? 'scale(1.05)' : 'none',
                }}>
                  {plan.highlighted && (
                    <Chip label="POPULAR" color="primary" sx={{ position: 'absolute', top: 16, right: 16 }} />
                  )}
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color="primary.main" sx={{ my: 3 }}>
                    {plan.price}
                    {plan.price !== 'Custom' && <Typography component="span" variant="h6" color="text.secondary">/mo</Typography>}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {plan.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                        <Typography>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button variant={plan.highlighted ? 'contained' : 'outlined'} fullWidth size="large">
                    Get Started
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography variant="h2" align="center" fontWeight="bold" gutterBottom>
          Loved by Traders
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
          See what our users are saying
        </Typography>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', p: 3 }}>
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={testimonial.avatar}>{testimonial.name[0]}</Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 12, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
          <StaNLinkGraphic text="START" />
        </Box>
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Ready to Start Trading Smarter?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of traders already using our platform
          </Typography>
          <Button variant="contained" size="large" onClick={onCtaClick} sx={{ bgcolor: 'white', color: 'primary.main', px: 6, py: 2, '&:hover': { bgcolor: 'grey.100' } }}>
            {ctaText}
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Footer
        sections={[
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
              { label: 'Careers', href: '#' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Documentation', href: '#' },
              { label: 'API', href: '#' },
              { label: 'Support', href: '#' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ],
          },
        ]}
        socialLinks={{
          twitter: 'https://twitter.com',
          github: 'https://github.com',
        }}
      />
    </Box>
  );
};
