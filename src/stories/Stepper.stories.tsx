import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, Step, StepLabel } from './Stepper';
import { Box, Button, Typography, StepContent } from '@mui/material';

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = ['Select campaign', 'Create ad group', 'Create ad'];

export const Basic: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>Back</Button>
          <Button variant="contained" onClick={() => setActiveStep(activeStep + 1)} disabled={activeStep === 2}>
            {activeStep === 2 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    );
  },
};

export const SkillDeployment: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const deploySteps = ['Select Skill', 'Configure Parameters', 'Choose Platforms', 'Deploy'];
    return (
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" gutterBottom>Deploy Trading Skill</Typography>
        <Stepper activeStep={activeStep} sx={{ mt: 3 }}>
          {deploySteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 3 }}>
          <Typography>Step {activeStep + 1}: {deploySteps[activeStep]}</Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button disabled={activeStep === 0} onClick={() => setActiveStep(activeStep - 1)}>Back</Button>
            <Button variant="contained" onClick={() => setActiveStep(Math.min(activeStep + 1, 3))}>
              {activeStep === 3 ? 'Deploy' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const verticalSteps = [
      { label: 'Upload Skill', description: 'Upload your .pyp file' },
      { label: 'Configure', description: 'Set trading parameters' },
      { label: 'Test', description: 'Run backtests' },
      { label: 'Deploy', description: 'Go live' },
    ];
    return (
      <Stepper activeStep={activeStep} orientation="vertical">
        {verticalSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={() => setActiveStep(index + 1)} sx={{ mr: 1 }}>
                  {index === verticalSteps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button disabled={index === 0} onClick={() => setActiveStep(index - 1)}>Back</Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    );
  },
};

export const Alternative: Story = {
  render: () => (
    <Stepper activeStep={1} alternativeLabel>
      <Step><StepLabel>Select</StepLabel></Step>
      <Step><StepLabel>Configure</StepLabel></Step>
      <Step><StepLabel>Deploy</StepLabel></Step>
    </Stepper>
  ),
};

export const NonLinear: Story = {
  render: () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} nonLinear>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel onClick={() => setActiveStep(index)} sx={{ cursor: 'pointer' }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={() => setCompleted({ ...completed, [activeStep]: true })}>
            Complete Step
          </Button>
        </Box>
      </Box>
    );
  },
};
