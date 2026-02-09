import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingPage } from './OnboardingPage';
import { Box, TextField, Typography, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, FormLabel } from '@mui/material';

const meta: Meta<typeof OnboardingPage> = {
  title: 'Templates/OnboardingPage',
  component: OnboardingPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof OnboardingPage>;

export const TradingPlatform: Story = {
  args: {
    steps: [
      {
        label: 'Welcome',
        content: (
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome to Pyp Trading Platform
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Let's get you set up in just a few steps. We'll help you configure your trading preferences and connect your accounts.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This will only take 2-3 minutes.
            </Typography>
          </Box>
        ),
      },
      {
        label: 'Profile',
        content: (
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Complete Your Profile
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Tell us a bit about yourself
            </Typography>
            <TextField fullWidth label="Full Name" margin="normal" />
            <TextField fullWidth label="Phone Number" margin="normal" />
            <TextField fullWidth label="Country" margin="normal" />
          </Box>
        ),
      },
      {
        label: 'Preferences',
        content: (
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Trading Preferences
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Customize your trading experience
            </Typography>
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Experience Level</FormLabel>
              <RadioGroup defaultValue="intermediate">
                <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
                <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
                <FormControlLabel value="advanced" control={<Radio />} label="Advanced" />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Enable real-time notifications"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Enable AI-powered trade suggestions"
            />
          </Box>
        ),
      },
      {
        label: 'Verification',
        content: (
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Email Verification
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              We've sent a verification code to your email
            </Typography>
            <TextField
              fullWidth
              label="Verification Code"
              placeholder="Enter 6-digit code"
              margin="normal"
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Didn't receive the code? <a href="#">Resend</a>
            </Typography>
          </Box>
        ),
      },
      {
        label: 'Complete',
        content: (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              You're All Set! 🎉
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Your account is ready. Start exploring AI-powered trading strategies and connect with thousands of traders.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click Complete to access your dashboard
            </Typography>
          </Box>
        ),
      },
    ],
    activeStep: 0,
    onNext: () => console.log('Next'),
    onBack: () => console.log('Back'),
    onComplete: () => console.log('Complete'),
  },
};

export const WithSkip: Story = {
  args: {
    ...TradingPlatform.args,
    allowSkip: true,
    onSkip: () => console.log('Skip'),
  },
};

export const StepTwo: Story = {
  args: {
    ...TradingPlatform.args,
    activeStep: 1,
  },
};

export const LastStep: Story = {
  args: {
    ...TradingPlatform.args,
    activeStep: 4,
  },
};

export const VerticalOnboarding: Story = {
  args: {
    ...TradingPlatform.args,
    orientation: 'vertical',
    activeStep: 1,
  },
};

export const Loading: Story = {
  args: {
    ...TradingPlatform.args,
    activeStep: 3,
    loading: true,
  },
};
