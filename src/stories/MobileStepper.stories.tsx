import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileStepper } from './MobileStepper';
import { Box, Button, Paper, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const meta: Meta<typeof MobileStepper> = {
  title: 'Navigation/MobileStepper',
  component: MobileStepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MobileStepper>;

export const Text: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 5;
    return (
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={() => setActiveStep((prev) => prev + 1)} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => setActiveStep((prev) => prev - 1)} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    );
  },
};

export const Dots: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 5;
    return (
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={() => setActiveStep((prev) => prev + 1)} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => setActiveStep((prev) => prev - 1)} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    );
  },
};

export const Progress: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 5;
    return (
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={() => setActiveStep((prev) => prev + 1)} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => setActiveStep((prev) => prev - 1)} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    );
  },
};

export const TradingOnboarding: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = [
      { label: 'Welcome', content: 'Welcome to AI Trading Platform' },
      { label: 'Connect Exchange', content: 'Link your trading exchange' },
      { label: 'Risk Settings', content: 'Configure risk parameters' },
      { label: 'Strategy', content: 'Choose your trading strategy' },
      { label: 'Complete', content: 'Start trading!' },
    ];
    return (
      <Paper sx={{ maxWidth: 400, p: 3 }}>
        <Typography variant="h5" gutterBottom>{steps[activeStep].label}</Typography>
        <Typography color="text.secondary" sx={{ mb: 3, minHeight: 60 }}>{steps[activeStep].content}</Typography>
        <MobileStepper
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={() => setActiveStep((prev) => prev + 1)} disabled={activeStep === steps.length - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={() => setActiveStep((prev) => prev - 1)} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Paper>
    );
  },
};

export const ManySteps: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 12;
    return (
      <Box sx={{ maxWidth: 400 }}>
        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={() => setActiveStep((prev) => prev + 1)} disabled={activeStep === maxSteps - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={() => setActiveStep((prev) => prev - 1)} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Box>
    );
  },
};
